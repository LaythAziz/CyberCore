/* CyberCore — robust interactive Earth
 * Primary renderer: globe.gl + Three.js.
 * Fallback renderer: D3 + world-atlas real country geometry.
 * The activity dots/arcs are illustrative; they are never presented as live user telemetry.
 */
(function(){
  const CITY_SEEDS=[
    [51.5,-0.1,1],[40.7,-74,1],[34.1,-118.2,.82],[37.8,-122.4,.72],[19.4,-99.1,.65],[25.8,-80.2,.58],
    [48.9,2.3,.95],[52.5,13.4,.82],[41.9,12.5,.55],[55.8,37.6,.78],[30,31.2,.48],[25.2,55.3,.62],
    [24.7,46.7,.42],[35.7,139.7,1],[37.6,127,.78],[31.2,121.5,.95],[22.5,114.1,.9],[1.35,103.8,.75],
    [-6.2,106.8,.7],[13.8,100.5,.62],[28.6,77.2,.82],[19.1,72.9,.88],[12.97,77.59,.68],[-33.9,151.2,.68],
    [-37.8,144.9,.5],[-23.5,-46.6,.85],[-34.6,-58.4,.52],[-12,-77,.38],[4.7,-74.1,.35],[43.7,-79.4,.62],
    [49.3,-123.1,.42],[33.3152,44.3661,1.05]
  ];
  const ARCS=[
    [51.5,-0.1,40.7,-74],[51.5,-0.1,35.7,139.7],[40.7,-74,35.7,139.7],[48.9,2.3,25.2,55.3],
    [35.7,139.7,1.35,103.8],[22.5,114.1,1.35,103.8],[19.4,-99.1,40.7,-74],[37.8,-122.4,35.7,139.7],
    [28.6,77.2,55.8,37.6],[33.3152,44.3661,25.2,55.3]
  ];
  let started=false;
  function points(){
    const out=[];
    CITY_SEEDS.forEach(([lat,lng,w],i)=>{
      const count=Math.round(7+w*12);
      for(let j=0;j<count;j++){
        const a=(j*2.399+i)*6.283185307179586;
        const radius=.12+(((j*17+i*7)%100)/100)*.72;
        out.push({lat:lat+Math.sin(a)*radius*(.55+w)*1.15,lng:lng+Math.cos(a)*radius*(.75+w)*1.55,size:.1+((j*13+i*3)%17)/100,color:j%7===0?'#7fffe1':'#25d9ff'});
      }
    });
    return out;
  }
  function setStatus(text,kind){
    const el=document.getElementById('cybercoreGlobe');
    if(!el)return;
    el.setAttribute('aria-label',text);
    if(kind==='error'){
      el.innerHTML='<div style="display:grid;place-items:center;height:100%;padding:28px;text-align:center;color:#8aa4b3;font:12px/1.8 system-ui,sans-serif"><div><b style="display:block;color:#dff8ff;font-size:14px;margin-bottom:6px">الكرة الأرضية التفاعلية</b>'+text+'</div></div>';
    }
  }
  function bootGlobe(){
    const el=document.getElementById('cybercoreGlobe');
    if(!el||!window.Globe||!window.THREE) return false;
    try{
      const world=window.Globe()(el)
        .backgroundColor('rgba(0,0,0,0)')
        .globeImageUrl('https://cdn.jsdelivr.net/npm/three@0.168.0/examples/textures/planets/earth_night_4096.jpg')
        .bumpImageUrl('https://cdn.jsdelivr.net/npm/three@0.168.0/examples/textures/planets/earth_normal_2048.jpg')
        .showAtmosphere(true).atmosphereColor('#16c9ff').atmosphereAltitude(.19)
        .pointsData(points()).pointLat('lat').pointLng('lng').pointColor('color').pointAltitude(.012).pointRadius('size').pointsMerge(true)
        .arcsData(ARCS.map((a,i)=>({startLat:a[0],startLng:a[1],endLat:a[2],endLng:a[3],color:i%3===0?'#ff62c8':'#2be5ff'})))
        .arcStartLat('startLat').arcStartLng('startLng').arcEndLat('endLat').arcEndLng('endLng')
        .arcColor('color').arcAltitudeAutoScale(.38).arcStroke(.55).arcDashLength(.28).arcDashGap(.85).arcDashAnimateTime(1800)
        .ringColor(()=>'#29e8ff').ringMaxRadius(3).ringPropagationSpeed(2.6).ringRepeatPeriod(1100)
        .ringsData(CITY_SEEDS.slice(0,16).map((c,i)=>({lat:c[0],lng:c[1],_i:i})));
      world.controls().autoRotate=true; world.controls().autoRotateSpeed=.35; world.controls().enablePan=false;
      world.controls().minDistance=180; world.controls().maxDistance=420;
      world.pointOfView({lat:22,lng:18,altitude:2.05},0);
      const renderer=world.renderer(); if(renderer)renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7));
      const resize=()=>{const w=el.clientWidth,h=el.clientHeight;if(w&&h)world.width(w).height(h)};
      window.addEventListener('resize',resize,{passive:true}); resize();
      return true;
    }catch(err){ console.warn('[CyberCore Globe] globe.gl failed:',err); return false; }
  }
  async function bootD3Fallback(){
    const el=document.getElementById('cybercoreGlobe');
    if(!el)return;
    try{
      const [d3,topo,worldData]=await Promise.all([
        import('https://cdn.jsdelivr.net/npm/d3@7.9.0/+esm'),
        import('https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/+esm'),
        import('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-50m.json/+esm')
      ]);
      el.innerHTML='';
      const width=Math.max(320,el.clientWidth||600),height=Math.max(300,el.clientHeight||520);
      const svg=d3.select(el).append('svg').attr('viewBox','0 0 '+width+' '+height).attr('role','img').attr('aria-label','كرة أرضية تفاعلية').style('width','100%').style('height','100%');
      const g=svg.append('g');
      const projection=d3.geoOrthographic().translate([width/2,height/2]).scale(Math.min(width,height)*.38).clipAngle(90);
      const path=d3.geoPath(projection); const sphere={type:'Sphere'};
      const countries=topo.feature(worldData.default||worldData, (worldData.default||worldData).objects.countries).features;
      const graticule=d3.geoGraticule10();
      g.append('path').datum(sphere).attr('class','ccFallbackSphere').attr('d',path).attr('fill','#061522').attr('stroke','#2be5ff').attr('stroke-opacity','.45');
      g.append('path').datum(graticule).attr('d',path).attr('fill','none').attr('stroke','#2be5ff').attr('stroke-opacity','.09').attr('stroke-width','.5');
      const countryLayer=g.append('g');
      countryLayer.selectAll('path').data(countries).join('path').attr('d',path).attr('fill','#0b2535').attr('stroke','#2a566c').attr('stroke-width','.45').attr('stroke-opacity','.7');
      const activity=points();
      const dots=g.append('g').selectAll('circle').data(activity).join('circle').attr('r',d=>Math.max(1,d.size*5)).attr('fill',d=>d.color).attr('opacity',.75);
      const baghdad=g.append('circle').attr('r',4).attr('fill','#ff62c8').attr('stroke','#fff').attr('stroke-width',1).attr('opacity',.95);
      const baghdadLabel=g.append('text').text('Iraq').attr('fill','#dff8ff').attr('font-size',10).attr('dx',7).attr('dy',-7).attr('opacity',.9);
      function render(){
        g.selectAll('path').attr('d',path); dots.attr('cx',d=>{const p=projection([d.lng,d.lat]);return p?p[0]:-100}).attr('cy',d=>{const p=projection([d.lng,d.lat]);return p?p[1]:-100}).attr('display',d=>d3.geoDistance([d.lng,d.lat],projection.invert([width/2,height/2]))<Math.PI/2?'':'none');
        const bp=projection([44.3661,33.3152]); baghdad.attr('cx',bp?bp[0]:-100).attr('cy',bp?bp[1]:-100); baghdadLabel.attr('x',bp?bp[0]:-100).attr('y',bp?bp[1]:-100);
      }
      const drag=d3.drag().on('drag',event=>{const r=projection.rotate();projection.rotate([r[0]+event.dx*.45,r[1]-event.dy*.45]);render()});
      svg.call(drag).call(d3.zoom().scaleExtent([.75,2.2]).on('zoom',event=>{projection.scale(Math.min(width,height)*.38*event.transform.k);render()}));
      render();
      let raf=0,last=performance.now();
      function tick(now){if(document.hidden){raf=requestAnimationFrame(tick);return}const dt=Math.min(80,now-last);last=now;const r=projection.rotate();projection.rotate([r[0]+dt*.006,r[1]]);render();raf=requestAnimationFrame(tick)}
      if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)raf=requestAnimationFrame(tick);
      window.addEventListener('resize',()=>{const w=Math.max(320,el.clientWidth||width),h=Math.max(300,el.clientHeight||height);projection.translate([w/2,h/2]).scale(Math.min(w,h)*.38);svg.attr('viewBox','0 0 '+w+' '+h);render()},{passive:true});
      el.addEventListener('dblclick',()=>projection.rotate([0,0]));
      return true;
    }catch(err){console.error('[CyberCore Globe] fallback failed:',err);return false;}
  }
  async function boot(){
    if(started)return; started=true;
    const ok=bootGlobe();
    if(ok)return;
    const fallback=await bootD3Fallback();
    if(!fallback)setStatus('تعذر تحميل بيانات الكرة الأرضية من CDN حالياً. بقية الموقع يعمل بشكل طبيعي.','error');
  }
  function schedule(){setTimeout(boot,250)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',schedule,{once:true}); else schedule();
})();
