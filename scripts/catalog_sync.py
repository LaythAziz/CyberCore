#!/usr/bin/env python3
import json, os, re, html, hashlib, time
from datetime import datetime, timezone
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen
from xml.etree import ElementTree as ET

UA = "CyberCoreCatalogBot/1.0 (+https://github.com/LaythAziz/CyberCore)"
TIMEOUT = 20
MAX_GENERIC_PRODUCTS = 500

STORES = [
    ("global","https://globaliraq.iq/"),
    ("zaytoona","https://zaytoona.com/"),
    ("hypertech","https://hypertechiq.com/"),
    ("pcsmart","https://pcsmartiq.com/"),
    ("mena","https://menairq.com/"),
    ("dna","https://www.dna-iraq.com/"),
    ("feesha","https://feesha.net/"),
    ("alkhalifa","https://alkhalifa.shop/"),
    ("daralreem","https://www.daralreem.store/"),
    ("mnc","https://mnc-tech.store/"),
]

def fetch(url):
    req = Request(url, headers={"User-Agent": UA, "Accept": "text/html,application/json,application/xml;q=0.9,*/*;q=0.8"})
    with urlopen(req, timeout=TIMEOUT) as r:
        return r.read(), r.headers.get("Content-Type","")

def text_clean(v):
    return re.sub(r"\\s+", " ", html.unescape(str(v or ""))).strip()

def money_iqd(v):
    if v is None: return 0
    s = text_clean(v).replace(",","").replace("٬","").replace("٫",".")
    nums = re.findall(r"\\d+(?:\\.\\d+)?", s)
    if not nums: return 0
    try:
        n = float(nums[0])
        return int(round(n))
    except: return 0

def category(name, text=""):
    s=(name+" "+text).lower()
    rules=[
        ("GPU",r"rtx|rx \\d|geforce|radeon|graphics card|gpu"),
        ("CPU",r"ryzen|core i[3579]|core ultra|processor|cpu"),
        ("BOARD",r"motherboard|mainboard|b[35679]50|z[6789]0|x[35679]0"),
        ("RAM",r"ddr[45]|memory kit|ram"),
        ("SSD",r"nvme|ssd|solid state"),
        ("HDD",r"hard drive|hdd"),
        ("PSU",r"power supply|\\bpsu\\b"),
        ("CASE",r"\\bcase\\b|computer case|chassis"),
        ("COOLER",r"cooler|liquid cooling|aio|heatsink"),
        ("FANS",r"\\bfan(s)?\\b"),
        ("MONITOR",r"monitor|display"),
        ("LAPTOP",r"laptop|notebook"),
        ("TABLET",r"tablet|ipad"),
        ("BUILD",r"gaming pc|pc build|desktop pc|computer build"),
    ]
    for c,p in rules:
        if re.search(p,s): return c
    return "ACCESSORY"

def parse_jsonld(raw, base, store_id):
    out=[]
    for m in re.findall(r'<script[^>]+type=["\\\']application/ld\\+json["\\\'][^>]*>(.*?)</script>', raw, re.I|re.S):
        try:
            obj=json.loads(html.unescape(m.strip()))
        except: continue
        nodes=obj if isinstance(obj,list) else obj.get("@graph",[]) if isinstance(obj,dict) else [obj]
        if isinstance(nodes,dict): nodes=[nodes]
        for p in nodes:
            if not isinstance(p,dict): continue
            typ=p.get("@type")
            if isinstance(typ,list): typ=" ".join(map(str,typ))
            if "product" not in str(typ).lower(): continue
            offers=p.get("offers") or {}
            if isinstance(offers,list): offers=offers[0] if offers else {}
            url=p.get("url") or offers.get("url") or base
            img=p.get("image")
            if isinstance(img,list): img=img[0] if img else ""
            price=offers.get("price") or offers.get("lowPrice") or 0
            currency=offers.get("priceCurrency") or "IQD"
            if str(currency).upper() not in ("IQD","IQ","د.ع","دينار",""):
                continue
            name=text_clean(p.get("name"))
            if not name: continue
            out.append(normalize(store_id,name,p.get("brand"),p.get("sku") or p.get("mpn"),money_iqd(price),img,url,text_clean(p.get("description"))))
    return out

def normalize(store_id,name,brand,model,price,img,url,spec=""):
    key=(text_clean(brand)+"|"+text_clean(model or name)).lower()
    pid=hashlib.sha1((store_id+"|"+url).encode()).hexdigest()[:16]
    return {"id":pid,"storeId":store_id,"name":name,"brand":text_clean(brand),
            "category":category(name,spec),"model":text_clean(model),
            "priceIqd":price,"currency":"IQD","availability":"unknown",
            "imageUrl":urljoin(url,img) if img else "","productUrl":urljoin(url,url),
            "spec":spec[:500],"sourceUpdatedAt":None,
            "lastCheckedAt":datetime.now(timezone.utc).isoformat(),
            "dedupeKey":key}

def shopify(store_id, base):
    products=[]; page=1
    while page<=100:
        try: raw,_=fetch(urljoin(base,f"/products.json?limit=250&page={page}"))
        except Exception: break
        try: data=json.loads(raw)
        except: break
        arr=data.get("products",[])
        if not arr: break
        for p in arr:
            variants=p.get("variants") or [{}]
            v=next((x for x in variants if x.get("available") is not False),variants[0])
            price=money_iqd(v.get("price"))
            img=(p.get("images") or [{}])[0].get("src","")
            handle=p.get("handle","")
            url=urljoin(base,"/products/"+handle)
            products.append(normalize(store_id,text_clean(p.get("title")),p.get("vendor"),v.get("sku") or p.get("handle"),price,img,url,text_clean(p.get("body_html"))))
        page+=1
        if len(arr)<250: break
    return products

def sitemap_urls(base):
    urls=[]
    for path in ("/sitemap.xml","/sitemap_index.xml"):
        try: raw,_=fetch(urljoin(base,path)); root=ET.fromstring(raw)
        except Exception: continue
        locs=[x.text.strip() for x in root.iter() if x.tag.lower().endswith("loc") and x.text]
        nested=[u for u in locs if "sitemap" in u.lower()]
        direct=[u for u in locs if u not in nested]
        urls.extend(direct)
        for sm in nested[:30]:
            try:
                r,_=fetch(sm); rr=ET.fromstring(r)
                urls.extend(x.text.strip() for x in rr.iter() if x.tag.lower().endswith("loc") and x.text)
            except Exception: pass
        break
    return list(dict.fromkeys(urls))

def generic(store_id,base):
    urls=sitemap_urls(base)
    product_urls=[u for u in urls if any(x in u.lower() for x in ("/product","/products/","/shop/","/item/"))]
    products=[]
    for u in product_urls[:MAX_GENERIC_PRODUCTS]:
        try:
            raw,ct=fetch(u)
            s=raw.decode("utf-8","ignore")
            got=parse_jsonld(s,u,store_id)
            if got: products.extend(got[:3])
        except Exception: continue
    return products

def sync_store(sid,base):
    try:
        raw,_=fetch(urljoin(base,"/products.json?limit=1"))
        json.loads(raw)
        return shopify(sid,base), "shopify"
    except Exception:
        return generic(sid,base), "generic"

all_products=[]; status=[]
for sid,base in STORES:
    started=time.time()
    try:
        items,mode=sync_store(sid,base)
        # Keep only records with an exact product URL; never invent price/image.
        items=[x for x in items if x.get("productUrl")]
        all_products.extend(items)
        status.append({"id":sid,"url":base,"status":"ok" if items else "no-products","mode":mode,"products":len(items),"seconds":round(time.time()-started,1)})
    except Exception as e:
        status.append({"id":sid,"url":base,"status":"error","mode":"unknown","products":0,"error":str(e)[:240]})

# De-duplicate exact source URLs, then stable brand/model offers remain separate across stores.
dedup={}
for p in all_products:
    dedup[p["storeId"]+"|"+p["productUrl"]]=p
all_products=list(dedup.values())

os.makedirs("data/catalog",exist_ok=True)
now=datetime.now(timezone.utc).isoformat()

# Preserve a small, transparent price history from previous sync snapshots.
# Only observed source prices are stored; zero/unknown prices are never invented.
history_path="data/catalog/price-history.json"
try:
    with open(history_path,"r",encoding="utf-8") as f:
        previous_history=json.load(f)
except Exception:
    previous_history={}

try:
    with open("data/catalog/products.json","r",encoding="utf-8") as f:
        previous_catalog=json.load(f)
        previous_products=previous_catalog.get("products",[])
except Exception:
    previous_products=[]

previous_by_id={p.get("id"):p for p in previous_products if p.get("id")}
for p in all_products:
    pid=p.get("id")
    old=previous_by_id.get(pid,{})
    hist=list(previous_history.get(pid,old.get("priceHistory",[])) or [])
    current=int(p.get("priceIqd") or 0)
    if current>0:
        last=hist[-1].get("priceIqd") if hist else None
        if last!=current:
            hist.append({"priceIqd":current,"checkedAt":p.get("lastCheckedAt") or now})
    # Keep the last 24 observed changes per source product.
    p["priceHistory"]=hist[-24:]

with open("data/catalog/price-history.json","w",encoding="utf-8") as f:
    json.dump({p.get("id"):p.get("priceHistory",[]) for p in all_products if p.get("id")},f,ensure_ascii=False,indent=2)

with open("data/catalog/products.json","w",encoding="utf-8") as f:
    json.dump({"version":3,"generatedAt":now,"count":len(all_products),"products":all_products},f,ensure_ascii=False,indent=2)
with open("data/catalog-sync-status.json","w",encoding="utf-8") as f:
    json.dump({"version":3,"generatedAt":now,"mode":"live-public-catalog","count":len(all_products),"stores":status,
               "rules":{"publicSourcesOnly":True,"neverInventPrice":True,"neverInventImage":True,"exactProductUrl":True}},f,ensure_ascii=False,indent=2)
print(json.dumps({"count":len(all_products),"stores":status},ensure_ascii=False,indent=2))

# Catalog sync adapter revision: 2026-10-04
