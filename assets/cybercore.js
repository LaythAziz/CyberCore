
const IMG={gpu:'https://marvelpc.com/media/media/product/2026/07/0f93d4a9-e0c4-4a4b-b439-89b9b406c457-transparent.webp',ram:'https://marvelpc.com/media/media/product/2026/07/7b307ad8-3cc4-4da7-a7c3-3a110e925490-transparent.webp',board:'https://marvelpc.com/media/media/product/2026/07/b387f61c-e3d1-4346-96ff-2d18cf62f01c-transparent.webp',cpu:'https://marvelpc.com/media/media/product/2026/07/9e71f814-4010-4fa3-aeb2-e4200c2c144f-transparent.webp',pny:'https://cdn.techlab-iq.com/anas/ANAS-7667-1.jpg',galax:'https://alfarah-store.com/cdn/shop/files/rn-image_picker_lib_temp_fee711f3-f9ef-4221-b9f3-40e919216362.png?v=1784190101'};
const data={
products:[
{id:'gpu5070',cat:'GPU',name:'Gigabyte GeForce RTX 5070 GAMING OC 12GB Black',brand:'Gigabyte',price:1575000,img:IMG.gpu,url:'https://marvelpc.com/ar/products/gigabyte-geforce-rtx-5070-gaming-oc-12gb-black',store:'Marvel For Computers',spec:'12GB GDDR7 • PCIe 5.0 • WINDFORCE 3X',socket:'',ram:'',watts:250},
{id:'gpu4070',cat:'GPU',name:'PNY GeForce RTX 4070 SUPER VERTO DUAL 12GB Black',brand:'PNY',price:1000000,img:IMG.pny,url:'https://marvelpc.com/ar/build-your-pc',store:'Marvel For Computers',spec:'12GB GDDR6X • PCIe 4.0',socket:'',ram:'',watts:220},
{id:'gpuGalax',cat:'GPU',name:'GALAX RTX 4070 SUPER 1-Click OC Black 12GB',brand:'GALAX',price:910000,img:IMG.galax,url:'https://alfarah-store.com/ar/products/galax-geforce-rtx-4070-super-1-click-oc-black-12gb',store:'AL FARAH STORE',spec:'12GB GDDR6X • Dual Fan • PCIe 4.0',socket:'',ram:'',watts:220},
{id:'cpu7800',cat:'CPU',name:'AMD Ryzen 7 7800X3D Tray',brand:'AMD',price:490000,img:IMG.cpu,url:'https://marvelpc.com/ar/build-your-pc',store:'Marvel For Computers',spec:'8 Cores • 16 Threads • 3D V-Cache',socket:'AM5',ram:'DDR5',watts:120},
{id:'boardB650',cat:'BOARD',name:'Gigabyte B650 EAGLE AX Black',brand:'Gigabyte',price:275000,img:IMG.board,url:'https://marvelpc.com/ar/products/gigabyte-b650-eagle-ax-black',store:'Marvel For Computers',spec:'AM5 • B650 • ATX • DDR5 • Wi‑Fi 6E',socket:'AM5',ram:'DDR5',watts:60},
{id:'ramTforce',cat:'RAM',name:'T-Force Delta RGB 32GB (2x16GB) DDR5 7200',brand:'T-Force',price:850000,img:IMG.ram,url:'https://marvelpc.com/ar/products/t-force-delta-rgb-32gb-2x16gb-ddr5-cl34-7200mhz-black',store:'Marvel For Computers',spec:'32GB • 2x16GB • DDR5 • 7200MHz',socket:'',ram:'DDR5',watts:12},
{id:'ssdWd',cat:'SSD',name:'WD Blue SN5000 1TB',brand:'Western Digital',price:285000,img:IMG.ram,url:'https://marvelpc.com/ar/categories/pc-components/storage',store:'Marvel For Computers',spec:'1TB • PCIe 4.0 NVMe • 5150MB/s',socket:'',ram:'',watts:6},
{id:'build307',cat:'BUILD',name:'PC Build 307 — i5 14400F + RTX 4070 Super',brand:'TechLab+',price:2100000,img:IMG.pny,url:'https://store.techlab-iq.com/products/9780',store:'TechLab+',spec:'32GB • 1TB NVMe • B760 • 750W Gold',socket:'',ram:'',watts:480}
],
parts:{'كرت الشاشة':{keys:['GPU','PCIe','VRAM'],desc:'هو أهم جزء للألعاب والرندر. نقارن الأداء، VRAM، الحجم والطاقة قبل السعر.',checks:['PCIe x16','طول البطاقة','موصل الطاقة','قدرة PSU'],cat:'GPU'},'المعالج':{keys:['Socket','Cores','Threads'],desc:'لازم يطابق Socket اللوحة، ومع الاستخدام نحدد هل نحتاج X3D أو أنوية أكثر.',checks:['AM5 / LGA','عدد الأنوية','التبريد','استهلاك الطاقة'],cat:'CPU'},'الرامات':{keys:['DDR4 / DDR5','Capacity','Speed'],desc:'نوع الرام لازم يطابق اللوحة. للتجميعات الجديدة نبدأ عادةً من DDR5.',checks:['DDR generation','2x16GB','Speed','Compatibility'],cat:'RAM'},'التخزين':{keys:['NVMe','PCIe','TB'],desc:'نقارن السعة والواجهة والسرعة، وليس الرقم المكتوب على العلبة فقط.',checks:['M.2 slot','PCIe generation','Capacity','Thermals'],cat:'SSD'},'اللوحة الأم':{keys:['Socket','Chipset','Form factor'],desc:'هي نقطة التوافق الرئيسية بين CPU وRAM وM.2 وPCIe.',checks:['Socket','RAM type','ATX/mATX','M.2'],cat:'BOARD'},'المبرد':{keys:['AIO','Air','Socket'],desc:'اختيار المبرد يعتمد على حرارة المعالج ودعم Socket ومساحة الكيس.',checks:['Socket bracket','Radiator size','Clearance'],cat:'COOLER'},'الباور':{keys:['Watt','80+','PCIe'],desc:'نحسب استهلاك القطع مع هامش أمان، ثم نتحقق من الموصلات.',checks:['Wattage','80+ rating','PCIe connectors'],cat:'PSU'},'الكيس':{keys:['ATX','GPU length','Airflow'],desc:'الكيس يجب أن يستوعب اللوحة والبطاقة والمبرد ويملك airflow جيد.',checks:['Board size','GPU length','Radiator','Fans'],cat:'CASE'},'المراوح':{keys:['120/140mm','PWM','Airflow'],desc:'المراوح الجيدة تقلل الحرارة والضجيج، خصوصاً مع GPU قوي.',checks:['Size','PWM','Air direction'],cat:'FANS'}}
};
const extraProducts=[{"id":"dna5060","cat":"BUILD","name":"DNA Gaming PC i5-14400F + RTX 5060 8GB","brand":"DNA IRAQ","price":1849000,"img":"","url":"https://www.dna-iraq.com/en/shop/category/gaming-pc-gaming-gaming-desktops-632","store":"DNA IRAQ","spec":"i5-14400F • RTX 5060 • 16GB DDR4 • 1TB SSD","watts":450},{"id":"dna5060ti","cat":"BUILD","name":"DNA Gaming PC Ryzen 7 8700F + RTX 5060 Ti 16GB","brand":"DNA IRAQ","price":2969000,"img":"","url":"https://www.dna-iraq.com/en/shop/category/gaming-pc-gaming-gaming-desktops-632","store":"DNA IRAQ","spec":"8700F • RTX 5060 Ti 16GB • 32GB DDR5 • 1TB SSD","watts":500},{"id":"dna7800","cat":"BUILD","name":"DNA Gaming PC Ryzen 7 7800X3D + RTX 5070","brand":"DNA IRAQ","price":3395000,"img":"","url":"https://www.dna-iraq.com/en/shop/category/gaming-pc-gaming-gaming-desktops-632","store":"DNA IRAQ","spec":"7800X3D • RTX 5070 12GB • 32GB DDR5 • 1TB SSD","watts":550},{"id":"global7800","cat":"BUILD","name":"Global Iraq 7800X3D + RTX 5070 Build","brand":"Global Iraq","price":2870000,"img":"","url":"https://globaliraq.iq/products/pc-build-amd-7-7800x3d-rtx-5070-12gb-1","store":"Global Iraq","spec":"7800X3D • B650 • RTX 5070 • 1TB NVMe • 750W Gold","watts":520},{"id":"karada7800","cat":"BUILD","name":"Karada Build #7 — 7800X3D + RTX 5070","brand":"Karada Store","price":2700000,"img":"","url":"https://karadastore.iq/product/3158","store":"Karada Store","spec":"RTX 5070 • 7800X3D • B650 • 32GB DDR5 • 1TB Lexar","watts":520},{"id":"mnc5070","cat":"GPU","name":"GeForce RTX 5070 12G GAMING TRIO OC","brand":"MSI","price":1560000,"img":"","url":"https://mnc-tech.store/ar-iq/pages/pc-components","store":"MNC Tech","spec":"RTX 5070 • 12GB","watts":250},{"id":"mnc7500","cat":"CPU","name":"AMD Ryzen 5 7500F Tray","brand":"AMD","price":210000,"img":"","url":"https://mnc-tech.store/ar-iq/pages/pc-components","store":"MNC Tech","spec":"AM5 • 6 Cores • 12 Threads","socket":"AM5","ram":"DDR5","watts":65},{"id":"mnc7600","cat":"CPU","name":"AMD Ryzen 5 7600 Tray","brand":"AMD","price":260000,"img":"","url":"https://mnc-tech.store/ar-iq/pages/pc-components","store":"MNC Tech","spec":"AM5 • 6 Cores • 12 Threads","socket":"AM5","ram":"DDR5","watts":65},{"id":"mnc9800","cat":"CPU","name":"AMD Ryzen 7 9800X3D Tray","brand":"AMD","price":645000,"img":"","url":"https://mnc-tech.store/ar-iq/pages/pc-components","store":"MNC Tech","spec":"AM5 • X3D Gaming CPU","socket":"AM5","ram":"DDR5","watts":120},{"id":"dna34","cat":"MONITOR","name":"Twisted Minds 34 WQHD 180Hz Curved","brand":"Twisted Minds","price":450000,"img":"","url":"https://www.dna-iraq.com/en/shop/category/gaming-pc-gaming-88/page/3","store":"DNA IRAQ","spec":"34 inch • WQHD • 1ms • 180Hz"},{"id":"dna24","cat":"MONITOR","name":"GAMEON Midnight Pro X 24 FHD 190Hz IPS","brand":"GAMEON","price":240000,"img":"","url":"https://www.dna-iraq.com/en/shop/category/gaming-pc-gaming-88/page/3","store":"DNA IRAQ","spec":"24 inch • FHD • IPS • 190Hz"},{"id":"dna5070laptop","cat":"LAPTOP","name":"Razer Blade 14 Gaming Laptop RTX 5070","brand":"Razer","price":4200000,"img":"","url":"https://www.dna-iraq.com/en/shop/category/gaming-pc-gaming-88/page/3","store":"DNA IRAQ","spec":"Gaming Laptop • RTX 5070"},{"id":"zaytoona9600","cat":"BUILD","name":"Voyager 1 — Ryzen 5 9600X + RTX 5070","brand":"Zaytoona","price":0,"img":"","url":"https://zaytoona.com/shop/gaming-pc/full-gaming-pc-setup/voyager-1-gaming-pc-combo-amd-ryzen-5-9600x-16gb-rgb-ddr5-1tb-ssd-rtx-5070-oc-12gb-ktc-h27t7p-200hz-qhd-monitor/","store":"Zaytoona","spec":"9600X • RTX 5070 • 16GB DDR5 • 1TB NVMe • 360 AIO"}];
extraProducts.forEach(p=>data.products.push(p));

const catalogStores=[
{id:'global',name:'شركة القيم العالمية للحاسبات',nameEn:'Global Iraq Computer Technologies',url:'https://globaliraq.iq/',catalog:'https://globaliraq.iq/collections/custom-collection',type:'متجر عراقي • كتالوج إلكتروني'},
{id:'zaytoona',name:'Zaytoona',nameEn:'Zaytoona Iraq',url:'https://zaytoona.com/',catalog:'https://zaytoona.com/product-category/pc-components/',type:'متجر عراقي • PC & Electronics'},
{id:'hypertech',name:'HyperTech',nameEn:'HyperTech Iraq',url:'https://hypertechiq.com/',catalog:'https://hypertechiq.com/category/gpu',type:'متجر عراقي • قطع PC'},
{id:'pcsmart',name:'PC SMART STORE',nameEn:'PC Smart Iraq',url:'https://pcsmartiq.com/',catalog:'https://pcsmartiq.com/shop/',type:'متجر عراقي • كتالوج كبير'},
{id:'mena',name:'Mena Com',nameEn:'Mena Iraq',url:'https://menairq.com/',catalog:'https://menairq.com/category/components',type:'متجر عراقي • Components'},
{id:'dna',name:'DNA IRAQ',nameEn:'DNA Iraq',url:'https://www.dna-iraq.com/',catalog:'https://www.dna-iraq.com/en/shop/category/gaming-pc-gaming-gaming-desktops-632',type:'متجر عراقي • Gaming'},
{id:'feesha',name:'Feesha',nameEn:'Feesha Iraq',url:'https://feesha.net/',catalog:'https://feesha.net/',type:'متجر عراقي • Laptops'},
{id:'alkhalifa',name:'Al-Khalifa',nameEn:'Al-Khalifa Iraq',url:'https://alkhalifa.shop/',catalog:'https://alkhalifa.shop/',type:'متجر عراقي • PC & Gaming'},
{id:'daralreem',name:'Dar Al Reem',nameEn:'Dar Al Reem',url:'https://www.daralreem.store/',catalog:'https://www.daralreem.store/en/collections/all',type:'متجر عراقي • Electronics'},
{id:'mnc',name:'MNC Tech',nameEn:'MNC Tech Iraq',url:'https://mnc-tech.store/',catalog:'https://mnc-tech.store/ar-iq/pages/pc-components',type:'متجر عراقي • Components'},
{id:'alfarah',name:'AL FARAH STORE',nameEn:'Al Farah Store',url:'https://alfarah-store.com/',catalog:'https://alfarah-store.com/collections/all',type:'متجر عراقي • PC'},
{id:'techlab',name:'TechLab+',nameEn:'TechLab Iraq',url:'https://store.techlab-iq.com/',catalog:'https://store.techlab-iq.com/',type:'متجر عراقي • Builds'},
{id:'alfawaz',name:'Al-Fawaz',nameEn:'Al Fawaz Iraq',url:'https://alfawaz.com.iq/',catalog:'https://alfawaz.com.iq/product/asus-rog-strix-geforce-rtx-5070-12gb/',type:'متجر عراقي • PC'},
{id:'alnabaa',name:'AL-NABAA',nameEn:'Al Nabaa Computers',url:'https://store.alnabaa.com/',catalog:'https://store.alnabaa.com/collections/gaming-laptops',type:'متجر عراقي • Computers'},
{id:'joker',name:'Joker Center',nameEn:'Joker Center Iraq',url:'https://www.jokercenter.net/',catalog:'https://www.jokercenter.net/computers/graphics-cards',type:'متجر عراقي • Gaming'},
{id:'techmart',name:'Tech Mart',nameEn:'Tech Mart Iraq/Kurdistan',url:'https://techmart.krd/',catalog:'https://techmart.krd/brand/AMD',type:'متجر عراقي • Components'},
{id:'raiq',name:'RAIQ',nameEn:'RAIQ Iraq',url:'https://raiq.com/',catalog:'https://raiq.com/pc',type:'متجر عراقي • Gaming PC'},
{id:'afaq',name:'Afaq Iraq',nameEn:'Afaq Computer Store',url:'http://afaq-iraq.com/',catalog:'http://afaq-iraq.com/',type:'متجر عراقي • PC'},
{id:'basit',name:'Basit Computers',nameEn:'Basit Computers Iraq',url:'https://basitcomputers.com/',catalog:'https://basitcomputers.com/',type:'متجر عراقي • Components'},
{id:'godukkan',name:'Godukkan Iraq',nameEn:'Godukkan',url:'https://www.godukkan.com/iraq_en/',catalog:'https://www.godukkan.com/iraq_en/computers-laptops/laptops/gaming-laptops',type:'متجر دولي يشحن للعراق'}
];

const verifiedCatalogProducts=[
{id:'global-build8700',cat:'BUILD',name:'Pc Build AMD 7 8700F + RTX 5060 8GB',brand:'Global Iraq',price:2045000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-433227_1.jpg?v=1791025193&width=1080',url:'https://globaliraq.iq/products/pc-build-amd-7-8700f-rtx%E2%84%A2-5060-8gb',store:'شركة القيم العالمية للحاسبات',spec:'Ryzen 7 8700F • RTX 5060 8GB',sourceId:'global'},
{id:'global-build7600x',cat:'BUILD',name:'Pc Build AMD 5 7600X + RTX 5050 8GB',brand:'Global Iraq',price:1705000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-838149.jpg?v=1791020841&width=1080',url:'https://globaliraq.iq/products/pc-build-amd-5-7600x-rtx%E2%84%A25050-8gb',store:'شركة القيم العالمية للحاسبات',spec:'Ryzen 5 7600X • RTX 5050 8GB',sourceId:'global'},
{id:'global-build9600x',cat:'BUILD',name:'Pc Build AMD 5 9600X + RTX 5060 8GB',brand:'Global Iraq',price:1795000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-311857_1.jpg?v=1791020619&width=1080',url:'https://globaliraq.iq/products/pc-build-amd-5-9600x-rtx%E2%84%A25060-8gb',store:'شركة القيم العالمية للحاسبات',spec:'Ryzen 5 9600X • RTX 5060 8GB',sourceId:'global'},
{id:'global-build285k',cat:'BUILD',name:'Pc Build Ultra 9 285K + RX 9070 XT 16GB',brand:'Global Iraq',price:4650000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-618956_1.jpg?v=1791020372&width=1080',url:'https://globaliraq.iq/products/pc-build-ultra-9-285k-rx-9070-16gb',store:'شركة القيم العالمية للحاسبات',spec:'Core Ultra 9 285K • RX 9070 XT 16GB',sourceId:'global'},
{id:'global-build9800-5080',cat:'BUILD',name:'Pc Build Ryzen 7 9800X3D + RTX 5080 16GB',brand:'Global Iraq',price:4865000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-895419_4e17f06c-258c-4a6e-80cf-6b581be4468d.jpg?v=1791019907&width=1080',url:'https://globaliraq.iq/products/pc-build-amd-7-9800x3d-rtx-5080-16gb',store:'شركة القيم العالمية للحاسبات',spec:'Ryzen 7 9800X3D • RTX 5080 16GB',sourceId:'global'},
{id:'global-build9800-5070',cat:'BUILD',name:'Pc Build Ryzen 7 9800X3D + RTX 5070 12GB',brand:'Global Iraq',price:3785000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-757484.jpg?v=1791019381&width=1080',url:'https://globaliraq.iq/products/pc-build-amd-7-9800x3d-rtx-5070-12gb-1',store:'شركة القيم العالمية للحاسبات',spec:'Ryzen 7 9800X3D • RTX 5070 12GB',sourceId:'global'},
{id:'global-buildultra7',cat:'BUILD',name:'Pc Build Ultra 7 265KF + RTX 5060 8GB',brand:'Global Iraq',price:2250000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-157035_2.jpg?v=1791019141&width=1080',url:'https://globaliraq.iq/products/pc-build-ultra-7-265kf-rtx-5060-8gb',store:'شركة القيم العالمية للحاسبات',spec:'Core Ultra 7 265KF • RTX 5060 8GB',sourceId:'global'},
{id:'global-build14700-rx9070',cat:'BUILD',name:'Pc Build Intel i7-14700KF + RX 9070 16GB',brand:'Global Iraq',price:3000000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-779442_1.jpg?v=1791015263&width=1080',url:'https://globaliraq.iq/products/pc-build-intel-i7-14700kf-rx-9070-16gb',store:'شركة القيم العالمية للحاسبات',spec:'Core i7-14700KF • RX 9070 16GB',sourceId:'global'},
{id:'global-build5500-5060',cat:'BUILD',name:'Pc Build Ryzen 5 5500 + RTX 5060 8GB',brand:'Global Iraq',price:1390000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-548409_1.jpg?v=1791014013&width=1080',url:'https://globaliraq.iq/products/pc-build-amd-5-5500-rtx-5060-8gb-1',store:'شركة القيم العالمية للحاسبات',spec:'Ryzen 5 5500 • RTX 5060 8GB',sourceId:'global'},
{id:'global-build5500-3050',cat:'BUILD',name:'Pc Build Ryzen 5 5500 + RTX 3050 6GB',brand:'Global Iraq',price:1195000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-548409.jpg?v=1791013826&width=1080',url:'https://globaliraq.iq/products/pc-build-amd-5-5500-rtx-3050-6gb-1',store:'شركة القيم العالمية للحاسبات',spec:'Ryzen 5 5500 • RTX 3050 6GB',sourceId:'global'},
{id:'global-build5700x',cat:'BUILD',name:'Pc Build Ryzen 7 5700X + RTX 5060 Ti 8GB',brand:'Global Iraq',price:1760000,img:'https://globaliraq.iq/cdn/shop/files/global-iraq-build-666142_3.jpg?v=1791013252&width=1080',url:'https://globaliraq.iq/products/pc-build-amd-7-5700x-rtx-5060-ti-8gb-1',store:'شركة القيم العالمية للحاسبات',spec:'Ryzen 7 5700X • RTX 5060 Ti 8GB',sourceId:'global'},
{id:'global-lg27',cat:'MONITOR',name:'LG 27GS75Q-B 27 inch 2K 200Hz IPS',brand:'LG',price:365000,img:'https://globaliraq.iq/cdn/shop/files/2_378553ba-d6b2-49c0-aa77-48532978af1b.jpg?v=1790669303&width=1080',url:'https://globaliraq.iq/products/lg-27-27gs75q-b-amq-180hz-oc-200hz-2k-ips-1ms-flat',store:'شركة القيم العالمية للحاسبات',spec:'27 inch • QHD • 200Hz OC • IPS • 1ms',sourceId:'global'},
{id:'global-raptor15',cat:'MONITOR',name:'Raptor MF160T02 15.6 inch 60Hz IPS Portable Monitor',brand:'Raptor',price:150000,img:'https://globaliraq.iq/cdn/shop/files/3_f3758ca9-3a4b-4f20-81bc-8b46041b538d.jpg?v=1788421891&width=1024',url:'https://globaliraq.iq/products/raptor-mf160t02-15-6-inch-60hz-ips-portable-monitor',store:'شركة القيم العالمية للحاسبات',spec:'15.6 inch • IPS • 60Hz • Portable',sourceId:'global'},
{id:'global-xiaomi27',cat:'MONITOR',name:'Xiaomi A27Q 2026i 27 inch 2K IPS 120Hz',brand:'Xiaomi',price:325000,img:'https://globaliraq.iq/cdn/shop/files/1_71af4d7a-3d5b-41cf-8fb5-be3efbff38c9.jpg?v=1787058314&width=1024',url:'https://globaliraq.iq/products/xiaomi-27-a27q-2026i-120hz-2k-6ms-flat-ips',store:'شركة القيم العالمية للحاسبات',spec:'27 inch • 2K • IPS • 120Hz',sourceId:'global'},
{id:'global-asus32',cat:'MONITOR',name:'ASUS TUF Gaming VG32AQA1A 31.5 inch 2K 170Hz',brand:'ASUS',price:450000,img:'https://globaliraq.iq/cdn/shop/files/3_ea59d7a3-0e39-4775-aead-35defd0b6b93.jpg?v=1786796362&width=1024',url:'https://globaliraq.iq/products/asus-tuf-gaming-vg32aqa1a-31-5-inch-2k-qhd-2560x1440-170hz-1ms-monitor',store:'شركة القيم العالمية للحاسبات',spec:'31.5 inch • QHD • 170Hz • 1ms',sourceId:'global'},
{id:'global-proart',cat:'MONITOR',name:'ASUS ProArt PA278QGV 27 2K 120Hz',brand:'ASUS',price:550000,img:'https://globaliraq.iq/cdn/shop/files/1_15987127-006e-44fa-86b7-7e53bf4658fc.jpg?v=1766662511&width=1080',url:'https://globaliraq.iq/products/asus-proart-pa278qgv-27-2k-2560x1440-120hz-5ms-ips-srgb-100-monitor',store:'شركة القيم العالمية للحاسبات',spec:'27 inch • QHD • 120Hz • IPS • sRGB 100%',sourceId:'global'},
{id:'global-mo32u2',cat:'MONITOR',name:'GIGABYTE MO32U2 32 4K 240Hz QD-OLED',brand:'GIGABYTE',price:1550000,img:'https://globaliraq.iq/cdn/shop/files/3_cd8ebb9a-1d02-45cb-a0e1-a6f58c65b68e.jpg?v=1786767096&width=1024',url:'https://globaliraq.iq/products/gigabyte-mo32u2-32-inch-4k-uhd-3840x2160-240hz-0-03ms-qd-oled-flat-monitor',store:'شركة القيم العالمية للحاسبات',spec:'32 inch • 4K • 240Hz • QD-OLED',sourceId:'global'},
{id:'global-5090',cat:'GPU',name:'MSI GeForce RTX 5090 32GB GDDR7 LIGHTNING Z',brand:'MSI',price:12350000,img:'https://globaliraq.iq/cdn/shop/files/1_1750f282-f56a-443b-9259-eb75525ee726.jpg?v=1791033743&width=1080',url:'https://globaliraq.iq/products/geforce-rtx%E2%84%A2-5090-32g-lightning-z',store:'شركة القيم العالمية للحاسبات',spec:'RTX 5090 • 32GB GDDR7',sourceId:'global'},
{id:'zay-msi5060ti',cat:'GPU',name:'MSI GeForce RTX 5060 Ti SHADOW 2X OC PLUS 8GB GDDR7',brand:'MSI',price:950000,img:'https://zaytoona.com/wp-content/uploads/2026/05/MSI-GeForce-RTX-5070-SHADOW-2X-OC-Graphics-Card-price-Iraq-600x600.jpg',url:'https://zaytoona.com/shop/pc-components/graphics-cards/msi-geforce-rtx-5060-ti-shadow-2x-oc-plus-8gb-gddr7-graphics-card/',store:'Zaytoona',spec:'RTX 5060 Ti • 8GB GDDR7',sourceId:'zaytoona'},
{id:'zay-5070ti',cat:'GPU',name:'Gigabyte RTX 5070 Ti Eagle OC ICE SFF 16GB GDDR7',brand:'GIGABYTE',price:0,img:'https://zaytoona.com/wp-content/uploads/2026/08/Gigabyte-GeForce-RTX-5070-Ti-Eagle-OC-ICE-SFF-16GB-GDDR7-256-bit-Graphics-Card-9VN507TEOI-00-G10-600x600.jpg',url:'https://zaytoona.com/shop/pc-components/graphics-cards/gigabyte-geforce-rtx-5070-ti-eagle-oc-ice-sff-16gb-gddr7-256-bit-graphics-card-9vn507teoi-00-g10/',store:'Zaytoona',spec:'RTX 5070 Ti • 16GB GDDR7 • White',sourceId:'zaytoona'},
{id:'zay-b760',cat:'BOARD',name:'ASUS Prime B760-PLUS ATX DDR5',brand:'ASUS',price:225000,img:'',url:'https://zaytoona.com/shop/pc-components/motherboards/intel-motherboards/asus-prime-b760-plus-lga-1700-atx-gaming-motherboard-3-years-warranty/',store:'Zaytoona',spec:'LGA1700 • B760 • ATX • DDR5 • PCIe 5.0',sourceId:'zaytoona'},
{id:'zay-z790',cat:'BOARD',name:'MSI MAG Z790 Tomahawk WiFi Gaming Motherboard',brand:'MSI',price:477000,img:'',url:'https://zaytoona.com/shop/pc-components/motherboards/intel-motherboards/msi-mag-z790-tomahawk-wifi-gaming-motherboard/',store:'Zaytoona',spec:'Z790 • ATX • WiFi',sourceId:'zaytoona'},
{id:'zay-monitor',cat:'MONITOR',name:'MSI MAG 255F E20 25 inch FHD 200Hz',brand:'MSI',price:194000,img:'',url:'https://zaytoona.com/shop/monitors/gaming-monitors/msi-mag-255f-e20-25-inch-1920-x-1080-fhd-200hz-gaming-monitor-black/',store:'Zaytoona',spec:'25 inch • FHD • 200Hz',sourceId:'zaytoona'},
{id:'zay-laptop',cat:'LAPTOP',name:'MSI Thin A15 B7VE RTX 4050 Gaming Laptop',brand:'MSI',price:1467000,img:'',url:'https://zaytoona.com/shop/laptops-tablets-pcs/gaming-laptops/msi-thin-a15-b7ve-gaming-laptop-amd-ryzen-7-7735hs-16gb-ram-512gb-ssd-rtx-4050-8gb-15-6-fhd-144hz-ips-cosmos-gray/',store:'Zaytoona',spec:'Ryzen 7 7735HS • 16GB • 512GB SSD • RTX 4050 • 144Hz',sourceId:'zaytoona'},
{id:'zay-mouse',cat:'ACCESSORY',name:'Logitech MX Master 3S Wireless Mouse White',brand:'Logitech',price:158000,img:'',url:'https://zaytoona.com/shop/computer-accessories/keyboards-and-mouse/logitech-mx-master-3s-wireless-gaming-mouse-white/',store:'Zaytoona',spec:'Wireless • Multi-device',sourceId:'zaytoona'},
{id:'zay-keyboard',cat:'ACCESSORY',name:'Rapoo Ralemo Pre5 Multi-Mode Wireless Mechanical Keyboard',brand:'Rapoo',price:35000,img:'',url:'https://zaytoona.com/shop/computer-accessories/keyboards-and-mouse/rapoo-ralemo-pre5-multi-mode-wireless-mechanical-keyboard-with-backlight-blue/',store:'Zaytoona',spec:'Wireless • Mechanical • Backlight',sourceId:'zaytoona'}
];
verifiedCatalogProducts.forEach(p=>data.products.push(p));

const DEVELOPER_SOCIALS={facebook:"https://www.facebook.com/share/19dSCpWhm4/?mibextid=wwXIfr",instagram:"https://www.instagram.com/v365_/",telegram:"https://t.me/l713i",youtube:"https://youtube.com/@lynz317"};
let state={page:'home',part:'كرت الشاشة',sort:'price',dealFilter:'all',build:{},usedFilter:'الكل',admin:'overview'};
const money=n=>new Intl.NumberFormat('ar-IQ').format(Math.round(n))+' د.ع';
const esc=s=>String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>e.classList.remove('show'),2800)}
function openModal(id){document.getElementById(id).classList.add('show');if(id==='accountModal')renderAccount()}
function closeModal(id){document.getElementById(id).classList.remove('show')}
function go(id){location.hash=id}
function route(){let id=location.hash.slice(1)||'home';if(!document.getElementById(id))id='home';state.page=id;document.querySelectorAll('.page').forEach(x=>x.classList.toggle('active',x.id===id));document.querySelectorAll('.nav button').forEach(x=>x.classList.toggle('active',x.dataset.page===id));window.scrollTo({top:0,behavior:'smooth'});if(id==='home')renderHome();if(id==='search')renderSearch();if(id==='deals')renderDeals();if(id==='builder')renderBuilder();if(id==='used')renderUsed();if(id==='reviews')renderReviews();if(id==='admin')renderAdmin();if(id==='stores'){renderStores();catalogSyncStatus()}}
window.addEventListener('hashchange',route);document.querySelectorAll('.nav button').forEach(b=>b.onclick=()=>go(b.dataset.page));document.querySelectorAll('.zone').forEach(b=>b.onclick=()=>selectPart(b.dataset.part));
function renderHome(){document.getElementById('homeDeals').innerHTML=data.products.filter(p=>p.price>0).sort((a,b)=>a.price-b.price).slice(0,8).map(card).join('')}
function card(p){const visual=p.img?`<img src="${p.img}" alt="${esc(p.name)}" loading="lazy">`:`<div style="color:var(--cyan);font-weight:900;font-size:12px;text-align:center;padding:30px">صورة المتجر<br><small style="color:var(--muted)">افتح المصدر الأصلي</small></div>`;return `<article class="productCard"><div class="imgWrap">${visual}</div><div><span class="tag">${esc(p.cat)}</span><span class="tag">${esc(p.store)}</span></div><h3>${esc(p.name)}</h3><div class="meta">${esc(p.spec)}</div><div class="cardFooter"><div><div class="price">${p.price?money(p.price):'السعر عند المصدر'}</div><div class="meta">${p.img?"صورة مصدرية":"صورة غير مفهرسة — افتح المصدر"}</div></div><button class="btn primary" onclick="openProduct('${p.id}')">التفاصيل</button></div></article>`}
function quickSearch(){const q=(document.getElementById('globalSearch').value||'').trim();if(!q)return go('deals');go('deals');setTimeout(()=>{const grid=document.getElementById('dealGrid');const found=data.products.filter(p=>(p.name+' '+p.brand+' '+p.spec).toLowerCase().includes(q.toLowerCase()));grid.innerHTML=found.length?found.map(card).join():`<div class="empty">ما لقيت «${esc(q)}» ضمن البيانات الحالية. جرّب RTX 5070 أو Ryzen 7 أو B650.</div>`},80)}
function selectPart(p){state.part=p;document.querySelectorAll('.zone').forEach(z=>z.classList.toggle('selected',z.dataset.part===p));document.getElementById('selectedBadge').textContent=p;document.querySelectorAll('.partBtn').forEach(b=>b.classList.toggle('active',b.dataset.part===p));const d=data.parts[p];document.getElementById('partDetail').innerHTML=`<h4>${esc(p)}</h4><p>${esc(d.desc)}</p><ul>${d.checks.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>`;document.getElementById('dealTitle').textContent='أفضل عروض '+p;renderOffers()}
let partsSearchTimer;
function searchNorm(v){return String(v||'').toLowerCase().normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ة/g,'ه').replace(/ى/g,'ي').replace(/ي/g,'ي').replace(/ك/g,'ك').replace(/[أإآ]/g,'ا').replace(/[^a-z0-9\u0600-\u06ff]+/g,' ').trim()}
function productSearchText(p){return searchNorm([p.name,p.brand,p.cat,p.spec,p.store,p.socket,p.ram,p.model].filter(Boolean).join(' '))}
function searchScore(p,q){if(!q)return 0;const n=productSearchText(p),terms=searchNorm(q).split(/\s+/).filter(Boolean);let score=0;const name=searchNorm(p.name),brand=searchNorm(p.brand);for(const t of terms){if(name===t)score+=100;else if(name.includes(t))score+=55;else if(brand===t)score+=45;else if(brand.includes(t))score+=25;else if(n.includes(t))score+=18}return score}
function populateSearchBrands(){const el=document.getElementById('sfBrand');if(!el)return;const all=[...new Set(data.products.map(p=>p.brand).filter(Boolean))].sort((a,b)=>a.localeCompare(b));const cur=el.value;el.innerHTML='<option value="">كل الشركات</option>'+all.map(b=>'<option value="'+esc(b)+'">'+esc(b)+'</option>').join('');if(all.includes(cur))el.value=cur}
function partsSearchInput(){clearTimeout(partsSearchTimer);partsSearchTimer=setTimeout(runPartsSearch,120)}
function setPartsQuery(q){const i=document.getElementById('partsQuery');if(i){i.value=q;runPartsSearch();i.focus()}}
function clearPartsSearch(){['partsQuery','sfCat','sfBrand','sfRam','sfPrice','sfSort'].forEach(id=>{const e=document.getElementById(id);if(e)e.value=''});const sort=document.getElementById('sfSort');if(sort)sort.value='relevance';runPartsSearch()}
function extractProductIdentity(p){
 const raw=searchNorm([p.brand||'',p.model||'',p.name||'',p.spec||''].join(' ')).replace(/[•,()\[\]_/]/g,' ');
 const clean=v=>String(v||'').replace(/\\s+/g,' ').trim();
 const brand=clean(p.brand);
 const cat=String(p.cat||'').toUpperCase();
 const id={category:cat,brand,model:'',vram:'',ddr:'',capacity:'',chipset:'',socket:'',interface:'',variant:''};
 const gpu=raw.match(/\\b((?:rtx|gtx)\\s*(?:20|30|40|50)?\\s*[0-9]{3,4}(?:\\s*(?:ti|super))?|(?:rx|radeon)\\s*[0-9]{4,5}(?:\\s*(?:xt|xtx|gre))?)\\b/i);
 const cpu=raw.match(/\\b((?:ryzen\\s*[3579]|core\\s*(?:i[3579]|ultra\\s*[3579]))\\s*[0-9]{4,5}(?:\\s*(?:x3d|x|xt|f|g))?)\\b/i);
 const board=raw.match(/\\b((?:b|x|z|h|a)[0-9]{3}(?:e|plus|wifi|ax|m)?)\\b/i);
 if(cat==='GPU'||gpu){id.model=clean(gpu?.[1]||p.model||'');}
 else if(cat==='CPU'||cpu){id.model=clean(cpu?.[1]||p.model||'');}
 else if(cat==='BOARD'||cat==='MOTHERBOARD'||board){id.model=clean(board?.[1]||p.model||'');}
 else{id.model=clean(p.model||p.name||'').slice(0,90);}
 const v=raw.match(/\\b([0-9]+(?:\\.[0-9]+)?)\\s*(gb|g)\\b/i);if(v)id.vram=v[1]+'GB';
 const d=raw.match(/\\b(ddr[345]|gddr[4567])\\b/i);if(d)id.ddr=d[1].toUpperCase();
 const cap=raw.match(/\\b([0-9]+(?:\\.[0-9]+)?)\\s*(tb|gb)\\b/i);if(cap)id.capacity=cap[1]+cap[2].toUpperCase();
 const chip=raw.match(/\\b((?:b|x|z|h)[0-9]{3}(?:e|plus|wifi|ax|m)?)\\b/i);if(cat==='BOARD'||cat==='MOTHERBOARD')id.chipset=(chip?.[1]||'').toUpperCase();
 const sock=raw.match(/\\b(am[4-6]|lga\\s*\d{4,5})\\b/i);if(sock)id.socket=sock[1].replace(/\\s+/g,'').toUpperCase();
 const iface=raw.match(/\\b((?:pcie|pci-e)\\s*[345](?:\\.0)?|nvme|sata(?:\\s*[123])?)\\b/i);if(iface)id.interface=iface[1].replace(/\\s+/g,'').toUpperCase();
 const varM=raw.match(/\\b(oc|gaming|trio|ventus|eagle|aorus|rog|strix|tuf|dual|nitro|pulse|hellhound|phantom|xtreme|windforce)\\b/gi);if(varM)id.variant=[...new Set(varM.map(clean))].join(' ');
 if(cat==='RAM')id.model=clean(p.name||p.model||'').replace(new RegExp('\\\\b'+id.ddr+'\\\\b','ig'),'');
 return id;
}
function normalizeProductIdentity(p){
 const x=extractProductIdentity(p);
 return [x.category,searchNorm(x.brand),searchNorm(x.model),x.vram,x.ddr,x.capacity,x.chipset,x.socket,x.interface].join('|');
}
function offerKey(p){return normalizeProductIdentity(p)}
function canonicalOfferName(p){
 let n=(p.name||'').replace(/\\b(?:gigabyte|msi|asus|asrock|aorus|zotac|pny|palit|galax|inno3d|gainward|colorful|sapphire|powercolor|xfx)\\b/gi,'');
 n=n.replace(/\\s+/g,' ').replace(/^[\s•\-]+|[\s•\-]+$/g,'').trim();
 return n||p.name||'قطعة';
}
function groupSearchOffers(arr){
 const map=new Map();
 arr.forEach(p=>{
  const key=offerKey(p);
  if(!map.has(key))map.set(key,{key,name:canonicalOfferName(p),cat:p.cat||'',brand:p.brand||'',offers:[]});
  map.get(key).offers.push(p);
 });
 return [...map.values()].map(g=>{
  g.offers.sort((a,b)=>{
   if(a.price&&b.price)return a.price-b.price;
   if(a.price)return -1;
   if(b.price)return 1;
   return String(a.store||'').localeCompare(String(b.store||''));
  });
  g.minPrice=g.offers.find(x=>Number(x.price)>0)?.price||0;
  g.storeCount=new Set(g.offers.map(x=>x.store||x.sourceId).filter(Boolean)).size;
  return g;
 });
}
function comparisonField(label,value){
 return '<div class="compareSpec"><span>'+esc(label)+'</span><b>'+esc(value||'—')+'</b></div>';
}
function priceHistoryInfo(p){
 const h=Array.isArray(p.priceHistory)?p.priceHistory.filter(x=>Number(x?.priceIqd)>0):[];
 const current=Number(p.price||0);
 if(!current||!h.length)return {previous:0,direction:'none',delta:0,pct:0,when:''};
 let previous=0,when='';
 for(let i=h.length-1;i>=0;i--){
  const v=Number(h[i]?.priceIqd||0);
  if(v>0&&v!==current){previous=v;when=h[i]?.checkedAt||'';break}
 }
 if(!previous)return {previous:0,direction:'none',delta:0,pct:0,when:''};
 const delta=current-previous;
 return {previous,direction:delta<0?'down':delta>0?'up':'same',delta,pct:Math.abs(delta)/previous*100,when};
}
function priceTrendMarkup(p){
 const t=priceHistoryInfo(p);
 if(!t.previous)return '<span class="priceTrend neutral">لا يوجد سعر سابق موثوق</span>';
 const label=t.direction==='down'?'انخفض':'ارتفع';
 const cls=t.direction==='down'?'down':'up';
 return '<span class="priceTrend '+cls+'">'+label+' '+t.pct.toFixed(1)+'% عن آخر سعر معروف <small>('+money(t.previous)+')</small></span>';
}
function openOfferComparison(encodedKey){
 const key=decodeURIComponent(encodedKey);
 const group=groupSearchOffers(data.products).find(g=>g.key===key);
 if(!group)return;
 const identity=extractProductIdentity(group.offers[0]);
 const priced=group.offers.filter(x=>Number(x.price)>0);
 const prices=priced.map(x=>Number(x.price));
 const best=prices.length?Math.min(...prices):0;
 const worst=prices.length?Math.max(...prices):0;
 const average=prices.length?prices.reduce((a,b)=>a+b,0)/prices.length:0;
 const diff=best&&worst?worst-best:0;
 const spreadPct=best&&worst?diff/best*100:0;
 const storeCount=new Set(group.offers.map(x=>x.store||x.sourceId).filter(Boolean)).size;
 const rows=group.offers.map((x,i)=>{
  const delta=best&&x.price?Number(x.price)-best:0;
  const avail=String(x.availability||x.stock||'').trim()||'الحالة عند المصدر';
  const checked=x.lastCheckedAt||x.sourceUpdatedAt||'غير متوفر';
  return '<div class="comparisonOffer '+(Number(x.price)===best&&best?'best':'')+'"><div class="comparisonRank">'+(i+1)+'</div><div class="comparisonStore"><b>'+esc(x.store||x.sourceId||'المصدر')+'</b><span>'+esc(x.name||group.name)+'</span></div><div class="comparisonPrice">'+(x.price?money(x.price):'السعر عند المصدر')+(delta>0?'<small>+'+money(delta)+' عن الأرخص</small>':'<small>'+(Number(x.price)===best&&best?'أفضل سعر':'')+'</small>')+priceTrendMarkup(x)+'</div><div class="comparisonAvailability">'+esc(avail)+'</div><div class="comparisonChecked">'+esc(checked)+'</div><a class="offerOpen" href="'+esc(x.url||'#')+'" target="_blank" rel="noopener">فتح العرض ↗</a></div>';
 }).join('');
 const specs=[
  comparisonField('الفئة',identity.category),
  comparisonField('الموديل',identity.model),
  comparisonField('VRAM',identity.vram),
  comparisonField('DDR / GDDR',identity.ddr),
  comparisonField('السعة',identity.capacity),
  comparisonField('Chipset',identity.chipset),
  comparisonField('Socket',identity.socket),
  comparisonField('Interface',identity.interface)
 ].join('');
 const visual=group.offers.find(x=>x.img)?.img;
 document.getElementById('productBox').innerHTML='<div class="modalHead"><div><div class="eyebrow">PRICE INTELLIGENCE • '+esc(group.cat||'PART')+'</div><h2>'+esc(group.name)+'</h2><p class="muted">مقارنة '+group.offers.length+' عروض من '+storeCount+' متاجر</p></div><button class="close" onclick="closeModal(\'productModal\')">×</button></div><div class="comparisonHero">'+(visual?'<img src="'+esc(visual)+'" alt="'+esc(group.name)+'">':'<div class="sourcePlaceholder">صورة المصدر غير مفهرسة</div>')+'<div class="comparisonBest"><span>أفضل سعر معروف</span><strong>'+(best?money(best):'السعر عند المصدر')+'</strong><small>'+(average?'متوسط السوق: '+money(Math.round(average)):'لا توجد أسعار معروفة')+'</small><small>'+(diff?'فرق الأرخص/الأغلى: '+money(diff)+' • '+spreadPct.toFixed(1)+'%':'لا يوجد فرق محسوب')+'</small></div></div><div class="priceIntelGrid"><div class="intelCard"><span>الأرخص</span><b>'+(best?money(best):'—')+'</b></div><div class="intelCard"><span>متوسط الأسعار</span><b>'+(average?money(Math.round(average)):'—')+'</b></div><div class="intelCard"><span>فرق السعر</span><b>'+(diff?money(diff):'—')+'</b><small>'+(spreadPct?spreadPct.toFixed(1)+'% فوق الأرخص':'—')+'</small></div><div class="intelCard"><span>عدد المتاجر</span><b>'+storeCount+'</b><small>'+group.offers.length+' عروض</small></div></div><div class="comparisonSpecs">'+specs+'</div><div class="comparisonOffers"><div class="comparisonHeader"><b>العروض حسب السعر</b><span>الأرخص أولاً • '+storeCount+' متجر</span></div>'+rows+'</div><p class="comparisonNote">Price Intelligence يعتمد فقط على أسعار رصدتها CyberCore من المصادر. اتجاه السعر يظهر فقط عندما يوجد سعر سابق مختلف محفوظ في سجل المصدر؛ لا نخمن تاريخاً غير موجود.</p>';
 openModal('productModal');
}
function resetBuild(){state.build={};renderBuilder();toast('تمت إعادة التجميعة')}
const buildSlots=[['CPU','المعالج',['cpu7800']],['BOARD','اللوحة الأم',['boardB650']],['GPU','كرت الشاشة',['gpu4070','gpu5070']],['RAM','الرامات',['ramTforce']],['SSD','التخزين',['ssdWd']]];
function renderBuilder(){const slots=buildSlots.map(([key,label,ids])=>{const selected=state.build[key];const opts=ids.map(id=>data.products.find(p=>p.id===id)).filter(Boolean);return `<div class="info"><h3>${label}</h3><select class="select" onchange="chooseBuild('${key}',this.value)"><option value="">اختر قطعة</option>${opts.map(p=>`<option value="${p.id}" ${selected===p.id?'selected':''}>${esc(p.name)} — ${money(p.price)}</option>`).join('')}</select>${selected?`<p>${esc(data.products.find(p=>p.id===selected).spec)}</p>`:''}</div>`}).join('');document.getElementById('builderSlots').innerHTML=slots;updateBuildSummary()}
function chooseBuild(k,id){state.build[k]=id;updateBuildSummary();renderBuilder()}
function updateBuildSummary(){const ps=Object.values(state.build).map(id=>data.products.find(p=>p.id===id)).filter(Boolean);const total=ps.reduce((s,p)=>s+p.price,0),w=ps.reduce((s,p)=>s+(p.watts||0),0);let status='جيد';let cls='good';const cpu=data.products.find(p=>p.id===state.build.CPU),board=data.products.find(p=>p.id===state.build.BOARD),ram=data.products.find(p=>p.id===state.build.RAM);if(cpu&&board&&cpu.socket!==board.socket){status='تعارض Socket';cls='dangerText'}else if(ram&&board&&ram.ram!==board.ram){status='تعارض RAM';cls='dangerText'}else if(ps.length<3){status='أكمل القطع';cls='warn'}document.getElementById('buildTotal').textContent=money(total);document.getElementById('buildWatt').textContent=w+' W';document.getElementById('buildStatus').textContent=status;document.getElementById('buildStatus').className=cls}
function loadUsed(){return JSON.parse(localStorage.getItem('cc_used')||'[]')}
function renderUsed(){const base=[{id:'osq1',name:'تجميعة 7800X3D + RTX 5070 + شاشة 49 مستعملة',price:4500000,cat:'تجميعة كاملة',desc:'السوق المفتوح • بغداد • مستعمل',source:'https://iq.opensooq.com/ar/search/285250634'},{id:'osq2',name:'RTX 5070 TUF GAMING 12GB مستعمل',price:1320000,cat:'كرت شاشة',desc:'السوق المفتوح • بغداد • مستعمل',source:'https://iq.opensooq.com/ar/%D9%84%D8%A7%D8%A8%D8%AA%D9%88%D8%A8-%D9%88%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1/%D9%82%D8%B7%D8%B9-%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1-%D9%88-%D8%A7%D9%84%D9%85%D9%83%D9%88%D9%86%D8%A7%D8%AA'},{id:'osq3',name:'MSI Z590 GAMING FORCE DDR4 مستعمل',price:220000,cat:'لوحة أم',desc:'السوق المفتوح • بغداد • مستعمل',source:'https://iq.opensooq.com/ar/%D9%84%D8%A7%D8%A8%D8%AA%D9%88%D8%A8-%D9%88%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1/%D9%82%D8%B7%D8%B9-%D8%A7%D9%84%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1-%D9%88-%D8%A7%D9%84%D9%85%D9%83%D9%88%D9%86%D8%A7%D8%AA'},{id:'osq4',name:'PC Gaming Setup كامل مستعمل',price:1200000,cat:'تجميعة كاملة',desc:'السوق المفتوح • البصرة • مستعمل',source:'https://iq.opensooq.com/ar/%D9%84%D8%A7%D8%A8%D8%AA%D9%88%D8%A8-%D9%88%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1/%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1-%D8%A3%D9%84%D8%B9%D8%A7%D8%A8'},{id:'osq5',name:'PC Gaming مستعمل — سيتب كامل',price:1100000,cat:'تجميعة كاملة',desc:'السوق المفتوح • بغداد • مستعمل',source:'https://iq.opensooq.com/ar/%D9%84%D8%A7%D8%A8%D8%AA%D9%88%D8%A8-%D9%88%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1/%D9%83%D9%85%D8%A8%D9%8A%D9%88%D8%AA%D8%B1-%D8%A3%D9%84%D8%B9%D8%A7%D8%A8'}];const all=[...loadUsed(),...base];const cats=['الكل',...new Set(all.map(x=>x.cat))];document.getElementById('usedFilters').innerHTML=cats.map(c=>`<button class="pill ${state.usedFilter===c?'active':''}" onclick="state.usedFilter='${esc(c)}';renderUsed()">${esc(c)}</button>`).join('');const a=state.usedFilter==='الكل'?all:all.filter(x=>x.cat===state.usedFilter);document.getElementById('usedGrid').innerHTML=a.map(x=>`<article class="usedCard"><span class="tag">${esc(x.cat)}</span><h3>${esc(x.name)}</h3><div class="price">${money(x.price)}</div><p class="meta">${esc(x.desc)}</p>${x.source?`<a class="btn ghost" style="display:block;text-align:center;width:100%" href="${x.source}" target="_blank" rel="noopener">فتح الإعلان الأصلي ↗</a>`:`<button class="btn ghost" style="width:100%" onclick="toast('إعلان محلي — الإنتاج يحتاج قاعدة بيانات')">إدارة الإعلان</button>`}</article>`).join('')}
function savePost(){const n=document.getElementById('postName').value.trim(),p=+document.getElementById('postPrice').value,c=document.getElementById('postCat').value,ph=document.getElementById('postPhone').value.trim(),d=document.getElementById('postDesc').value.trim();if(!n||!p||!ph)return toast('املأ الاسم والسعر ورقم التواصل');const a=loadUsed();a.unshift({id:Date.now(),name:n,price:p,cat:c,phone:ph,desc:d||'بدون وصف'});localStorage.setItem('cc_used',JSON.stringify(a));closeModal('postModal');renderUsed();toast('تم حفظ المنشور على هذا الجهاز. الإنتاج يحتاج قاعدة بيانات.')}
function loadReviews(){return JSON.parse(localStorage.getItem('cc_reviews')||'[]')}
function renderReviews(){const base=[{name:'محمد',text:'فكرة المقارنة ممتازة، أتمنى إضافة محلات أكثر.',likes:12},{name:'علي',text:'PC Builder يحتاج قاعدة توافق ضخمة، لكن الفكرة قوية.',likes:9},{name:'سارة',text:'أريد تنبيه إذا نزل سعر قطعة.',likes:7}];const all=[...loadReviews(),...base];document.getElementById('reviewGrid').innerHTML=all.map((x,i)=>`<article class="reviewCard"><div style="display:flex;justify-content:space-between"><b>${esc(x.name)}</b><span class="meta">مجتمع الأرخص</span></div><p class="meta" style="font-size:11px;line-height:1.9">${esc(x.text)}</p><div><button class="btn ghost" onclick="likeReview(${i})">♥ ${x.likes||0}</button><button class="btn ghost" onclick="toast('تم تسجيل البلاغ — في النسخة الإنتاجية يصل للإدارة')">⚑ بلاغ</button></div></article>`).join('')}
function likeReview(i){const a=loadReviews();if(a[i]){a[i].likes=(a[i].likes||0)+1;localStorage.setItem('cc_reviews',JSON.stringify(a));renderReviews()}else toast('تم تسجيل الإعجاب في العرض التجريبي')}
function saveReview(){const n=document.getElementById('reviewName').value.trim(),t=document.getElementById('reviewText').value.trim();if(!n||!t)return toast('اكتب الاسم والرأي');const a=loadReviews();a.unshift({name:n,text:t,likes:0});localStorage.setItem('cc_reviews',JSON.stringify(a));closeModal('reviewModal');renderReviews();toast('تم نشر الرأي محلياً')}
function renderAccount(){const e=document.getElementById('accountBox'),u=JSON.parse(localStorage.getItem('cc_user')||'null');if(u)e.innerHTML='<div class="accountProfile"><div class="accountAvatar">'+esc((u.name||'C').slice(0,1).toUpperCase())+'</div><div><b>'+esc(u.name)+'</b><span>'+esc(u.email)+'</span></div></div><br><button class="btn danger" onclick="localStorage.removeItem(&quot;cc_user&quot;);renderAccount();toast(&quot;تم تسجيل الخروج&quot;)">تسجيل خروج</button>';else e.innerHTML='<div class="authPanel"><div class="authTabs"><button class="authTab active">حساب CyberCore واحد</button></div><input id="loginName" class="input" placeholder="الاسم الكامل"><input id="loginEmail" class="input" type="email" placeholder="البريد الإلكتروني"><input id="loginPassword" class="input" type="password" placeholder="كلمة المرور"><button class="btn primary authMain" onclick="login()">إنشاء حساب / تسجيل الدخول</button><div class="authDivider"><span>أو المتابعة بواسطة</span></div><div class="providerGrid"><button class="providerBtn" onclick="oauthStart(&quot;google&quot;)"><span class="providerIcon">G</span>Google</button><button class="providerBtn" onclick="oauthStart(&quot;apple&quot;)"><span class="providerIcon">A</span>Apple</button><button class="providerBtn" onclick="oauthStart(&quot;github&quot;)"><span class="providerIcon">GH</span>GitHub</button></div><p class="authNote">واجهة واحدة للحساب. ربط Google / Apple / GitHub يحتاج Backend وOAuth حقيقي قبل الإنتاج.</p></div>'}
function login(){const n=document.getElementById('loginName').value.trim(),e=document.getElementById('loginEmail').value.trim();if(!n||!e)return toast('اكتب الاسم والإيميل');localStorage.setItem('cc_user',JSON.stringify({name:n,email:e}));renderAccount();toast('تم حفظ الحساب التجريبي على هذا الجهاز')}
function oauthStart(provider){toast('ربط '+provider+' يحتاج Backend + OAuth آمن؛ الواجهة جاهزة بدون ادعاء أن الربط فعّال بعد')}
function runAI(q,target='homeAiResult'){q=(q||'').trim();if(!q)return toast('اكتب طلبك أولاً');const low=q.toLowerCase();let answer='';if(/2\s*مليون|2000000|2,000,000/.test(low)){answer='<b>خطة مبدئية لـ 2 مليون:</b><br>ركّز على GPU قوي من الفئة المتوسطة، CPU اقتصادي، 32GB RAM، و1TB NVMe. لا تصرف الميزانية كلها على RGB. إذا تريد 1440p، خلي الأولوية للـGPU.'}else if(/5070/.test(low)&&/7800|x3d/.test(low)){answer='<b>نعم، تركيبة قوية:</b><br>Ryzen 7 7800X3D + RTX 5070 متوازنة جداً للألعاب. اختار B650 + DDR5، وخلي PSU بجودة جيدة مع هامش طاقة.'}else if(/ssd|nvme/.test(low)){const p=data.products.find(x=>x.id==='ssdWd');answer=`<b>اقتراح:</b> ${esc(p.name)} بسعر ${money(p.price)} في البيانات الحالية. رابط المصدر موجود في التفاصيل. إذا كانت ميزانيتك محدودة، نقدر نقارن سعات أخرى.`}else if(/1440|قيمنق|gaming|العاب/.test(low)){answer='<b>للقيمنق:</b><br>الأولوية GPU → CPU → RAM → SSD. اختار 32GB و1TB كبداية، وبعدها نحدد القطع حسب ميزانيتك ودقة الشاشة.'}else if(/توافق|compatible|تناسب/.test(low)){answer='<b>فحص توافق:</b><br>أحتاج أسماء القطع حتى أفحص Socket + RAM + PCIe + PSU. جرّب: «7800X3D مع B650 وRTX 5070». '}else{answer='<b>فهمت طلبك.</b><br>المحرك المحلي يقدر يحلل الميزانية ونوع الاستخدام ويعطيك اتجاه أولي. للحصول على إجابة LLM فعلية بمعلومات أحدث، نربط Copilot بواجهة Backend آمنة ونموذج AI.'}document.getElementById(target).innerHTML=`<div class="answer">${answer}<br><br><span class="meta">AI Copilot • لا تعتبر النتيجة عرض سعر نهائي.</span></div>`}
function adminTab(t,el){state.admin=t;document.querySelectorAll('.adminNav button').forEach(b=>b.classList.remove('active'));if(el)el.classList.add('active');const m=document.getElementById('adminMain');if(t==='overview')m.innerHTML='<h3>Control Room</h3><div class="stats"><div class="stat"><b>'+data.products.length+'</b><span>منتج مرتبط</span></div><div class="stat"><b>4</b><span>مصادر متجر</span></div><div class="stat"><b>'+loadUsed().length+'</b><span>منشور محلي</span></div><div class="stat"><b>AI</b><span>Copilot جاهز للربط</span></div></div><br><div class="info"><h3>ملاحظة إنتاجية</h3><p>هذه الواجهة هي طبقة الإدارة الأمامية. حتى تصبح لوحة إدارة حقيقية، نربطها بـSupabase/Auth/RLS ونمنع أي مستخدم عادي من تنفيذ عمليات الإدارة.</p></div>';if(t==='products')m.innerHTML='<h3>Products / Offers</h3><table class="table"><tr><th>المنتج</th><th>المصدر</th><th>السعر</th><th>رابط</th></tr>'+data.products.map(p=>`<tr><td>${esc(p.name)}</td><td>${esc(p.store)}</td><td>${money(p.price)}</td><td><a href="${p.url}" target="_blank" rel="noopener" class="btn ghost">فتح ↗</a></td></tr>`).join('')+'</table>';if(t==='stores')m.innerHTML='<h3>Stores</h3>'+['AL FARAH STORE','TechLab+','Marvel For Computers','GALAXY & 3D'].map(x=>`<div class="offer" style="margin:7px 0;padding:12px;border:1px solid #243e52;border-radius:14px;background:#07131e"><b>${x}</b><span class="good"> مصدر نشط</span></div>`).join('');if(t==='users')m.innerHTML='<h3>Users</h3><div class="info"><p>حسابات المستخدمين الحقيقية ستُدار عبر Auth + Profiles، وليس LocalStorage.</p></div>';if(t==='reports')m.innerHTML='<h3>Reports</h3><div class="info"><p>صفحة البلاغات جاهزة كواجهة. في الإنتاج: reports → moderation queue → audit log.</p></div>';if(t==='data')m.innerHTML='<h3>Backup</h3><button class="btn primary" onclick="exportLocal()">تصدير بيانات التجربة JSON</button>'}
function renderAdmin(){adminTab(state.admin,document.querySelector('.adminNav button'))}
function exportLocal(){const blob=new Blob([JSON.stringify({used:loadUsed(),reviews:loadReviews()},null,2)],{type:'application/json'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='cybercore-local-backup.json';a.click();URL.revokeObjectURL(a.href)}

/* PC BUILDER CATALOG UPGRADE */
window.builderCatalog={
CPU:[['AMD','Ryzen 5 5500','AM4','DDR4'],['AMD','Ryzen 5 5600','AM4','DDR4'],['AMD','Ryzen 5 5700X','AM4','DDR4'],['AMD','Ryzen 7 5700X3D','AM4','DDR4'],['AMD','Ryzen 7 5800X3D','AM4','DDR4'],['AMD','Ryzen 5 7500F','AM5','DDR5'],['AMD','Ryzen 5 7600','AM5','DDR5'],['AMD','Ryzen 5 7600X','AM5','DDR5'],['AMD','Ryzen 7 7700','AM5','DDR5'],['AMD','Ryzen 7 7800X3D','AM5','DDR5'],['AMD','Ryzen 7 9700X','AM5','DDR5'],['AMD','Ryzen 7 9800X3D','AM5','DDR5'],['AMD','Ryzen 9 9900X','AM5','DDR5'],['AMD','Ryzen 9 9950X','AM5','DDR5'],['AMD','Ryzen 9 9950X3D','AM5','DDR5'],['Intel','Core i5-12400F','LGA1700','DDR4/DDR5'],['Intel','Core i5-13400F','LGA1700','DDR4/DDR5'],['Intel','Core i5-14400F','LGA1700','DDR4/DDR5'],['Intel','Core i5-14600K','LGA1700','DDR4/DDR5'],['Intel','Core i7-13700K','LGA1700','DDR4/DDR5'],['Intel','Core i7-14700KF','LGA1700','DDR4/DDR5'],['Intel','Core i9-14900K','LGA1700','DDR4/DDR5'],['Intel','Core Ultra 5 245K','LGA1851','DDR5'],['Intel','Core Ultra 7 265K','LGA1851','DDR5'],['Intel','Core Ultra 9 285K','LGA1851','DDR5']],
BOARD:[['MSI','PRO B650-S WIFI','AM5','DDR5'],['MSI','MAG B650 TOMAHAWK WIFI','AM5','DDR5'],['MSI','MAG B850 TOMAHAWK MAX WIFI','AM5','DDR5'],['MSI','MAG X870 TOMAHAWK WIFI','AM5','DDR5'],['MSI','PRO Z790-A MAX WIFI','LGA1700','DDR5'],['MSI','MAG Z790 TOMAHAWK WIFI','LGA1700','DDR5'],['Gigabyte','B650 EAGLE AX','AM5','DDR5'],['Gigabyte','B650 AORUS ELITE AX','AM5','DDR5'],['Gigabyte','B850 AORUS ELITE WIFI7','AM5','DDR5'],['Gigabyte','X870 AORUS ELITE WIFI7','AM5','DDR5'],['Gigabyte','Z790 AORUS ELITE X AX','LGA1700','DDR5'],['Aorus','B650 AORUS ELITE AX','AM5','DDR5'],['Aorus','B850 AORUS ELITE WIFI7','AM5','DDR5'],['Aorus','X870 AORUS ELITE WIFI7','AM5','DDR5'],['ASUS','TUF GAMING B650-PLUS WIFI','AM5','DDR5'],['ASUS','ROG STRIX B650-A GAMING WIFI','AM5','DDR5'],['ASUS','ROG STRIX X870-A GAMING WIFI','AM5','DDR5'],['ASUS','TUF GAMING Z790-PLUS WIFI','LGA1700','DDR5'],['ASRock','B650M Pro RS','AM5','DDR5'],['ASRock','B650E Steel Legend WIFI','AM5','DDR5'],['ASRock','B850 Steel Legend WIFI','AM5','DDR5'],['ASRock','Z790 Steel Legend WIFI','LGA1700','DDR5'],['Biostar','B650MT','AM5','DDR5']],
GPU:[['NVIDIA','GeForce GTX 1660','GTX 1660'],['NVIDIA','GeForce GTX 1660 SUPER','GTX 1660'],['NVIDIA','GeForce GTX 1660 Ti','GTX 1660'],['NVIDIA','GeForce RTX 2060','RTX 20'],['NVIDIA','GeForce RTX 3060 12GB','RTX 30'],['NVIDIA','GeForce RTX 3060 Ti','RTX 30'],['NVIDIA','GeForce RTX 3070','RTX 30'],['NVIDIA','GeForce RTX 3080','RTX 30'],['NVIDIA','GeForce RTX 3090','RTX 30'],['NVIDIA','GeForce RTX 4060','RTX 40'],['NVIDIA','GeForce RTX 4060 Ti','RTX 40'],['NVIDIA','GeForce RTX 4070','RTX 40'],['NVIDIA','GeForce RTX 4070 SUPER','RTX 40'],['NVIDIA','GeForce RTX 4070 Ti SUPER','RTX 40'],['NVIDIA','GeForce RTX 4080 SUPER','RTX 40'],['NVIDIA','GeForce RTX 4090','RTX 40'],['NVIDIA','GeForce RTX 5050','RTX 50'],['NVIDIA','GeForce RTX 5060','RTX 50'],['NVIDIA','GeForce RTX 5060 Ti 8GB','RTX 50'],['NVIDIA','GeForce RTX 5060 Ti 16GB','RTX 50'],['NVIDIA','GeForce RTX 5070','RTX 50'],['NVIDIA','GeForce RTX 5070 Ti','RTX 50'],['NVIDIA','GeForce RTX 5080','RTX 50'],['NVIDIA','GeForce RTX 5090','RTX 50'],['AMD','Radeon RX 6600','RX 6000'],['AMD','Radeon RX 6650 XT','RX 6000'],['AMD','Radeon RX 6700 XT','RX 6000'],['AMD','Radeon RX 6800 XT','RX 6000'],['AMD','Radeon RX 6900 XT','RX 6000'],['AMD','Radeon RX 7600','RX 7000'],['AMD','Radeon RX 7600 XT','RX 7000'],['AMD','Radeon RX 7700 XT','RX 7000'],['AMD','Radeon RX 7800 XT','RX 7000'],['AMD','Radeon RX 7900 GRE','RX 7000'],['AMD','Radeon RX 7900 XT','RX 7000'],['AMD','Radeon RX 7900 XTX','RX 7000'],['AMD','Radeon RX 9060 XT 8GB','RX 9000'],['AMD','Radeon RX 9060 XT 16GB','RX 9000'],['AMD','Radeon RX 9070','RX 9000'],['AMD','Radeon RX 9070 XT','RX 9000'],['AMD','Radeon RX 9070 GRE','RX 9000']],
RAM:[['Corsair','Vengeance LPX 16GB DDR4','DDR4'],['Corsair','Vengeance RGB Pro 32GB DDR4','DDR4'],['Corsair','Vengeance 32GB DDR5','DDR5'],['Corsair','Vengeance RGB 32GB DDR5','DDR5'],['Corsair','Dominator Titanium 32GB DDR5','DDR5'],['Kingston','FURY Beast 16GB DDR4','DDR4'],['Kingston','FURY Beast 32GB DDR4','DDR4'],['Kingston','FURY Beast 32GB DDR5','DDR5'],['Kingston','FURY Renegade 32GB DDR5','DDR5'],['G.Skill','Ripjaws V 32GB DDR4','DDR4'],['G.Skill','Trident Z5 32GB DDR5','DDR5'],['G.Skill','Trident Z5 RGB 32GB DDR5','DDR5'],['G.Skill','Flare X5 32GB DDR5','DDR5'],['TeamGroup','T-Force Delta RGB 32GB DDR5','DDR5'],['TeamGroup','T-Force Vulcan 32GB DDR5','DDR5'],['XPG','Lancer RGB 32GB DDR5','DDR5'],['Crucial','Pro 32GB DDR5','DDR5']],
STORAGE:[['Western Digital','Blue 1TB HDD','HDD'],['Western Digital','Blue SN580 1TB','NVMe'],['Western Digital','Black SN850X 1TB','NVMe'],['Western Digital','Black SN850X 2TB','NVMe'],['Samsung','870 EVO 1TB','SSD'],['Samsung','990 EVO Plus 1TB','NVMe'],['Samsung','990 PRO 1TB','NVMe'],['Samsung','990 PRO 2TB','NVMe'],['Crucial','BX500 1TB','SSD'],['Crucial','MX500 1TB','SSD'],['Crucial','P3 Plus 1TB','NVMe'],['Crucial','T500 1TB','NVMe'],['Kingston','NV2 1TB','NVMe'],['Kingston','KC3000 1TB','NVMe'],['Lexar','NM790 1TB','NVMe'],['Lexar','NM790 2TB','NVMe'],['Seagate','Barracuda 2TB','HDD']],
PSU:[['Corsair','CX650 650W','650W'],['Corsair','RM750e 750W','750W'],['Corsair','RM850e 850W','850W'],['Corsair','RM1000e 1000W','1000W'],['Corsair','HX1500i 1500W','1500W'],['Seasonic','FOCUS GX-750 750W','750W'],['Seasonic','FOCUS GX-850 850W','850W'],['MSI','MAG A750GL PCIE5 750W','750W'],['MSI','MAG A850GL PCIE5 850W','850W'],['ASUS','TUF GAMING 850W Gold','850W'],['Cooler Master','MWE Gold 850 V2','850W'],['DeepCool','PX850G 850W','850W'],['FSP','Hydro G Pro 850W','850W'],['Thermaltake','Toughpower GF3 850W','850W']],
CASE:[['Lian Li','LANCOOL 216','ATX'],['Lian Li','O11 Dynamic EVO','ATX'],['Lian Li','O11D EVO RGB','ATX'],['NZXT','H5 Flow','ATX'],['NZXT','H7 Flow','ATX'],['NZXT','H9 Flow','ATX'],['Corsair','4000D Airflow','ATX'],['Corsair','5000D Airflow','ATX'],['Fractal','North','ATX'],['Fractal','North XL','ATX'],['Cooler Master','TD500 Mesh V2','ATX'],['Montech','AIR 903 MAX','ATX'],['Montech','KING 95 PRO','ATX'],['DeepCool','CH560 Digital','ATX'],['ASUS','TUF Gaming GT502','ATX'],['Phanteks','Eclipse G500A','ATX']],
COOLER:[['DeepCool','AK400','Air'],['DeepCool','AK620','Air'],['DeepCool','LS520 SE','AIO'],['DeepCool','LS720 SE','AIO'],['Thermalright','Peerless Assassin 120 SE','Air'],['Thermalright','Phantom Spirit 120 SE','Air'],['Noctua','NH-D15 G2','Air'],['Corsair','H100i 240mm','AIO'],['Corsair','H150i 360mm','AIO'],['ARCTIC','Liquid Freezer III 240','AIO'],['ARCTIC','Liquid Freezer III 360','AIO'],['NZXT','Kraken 240','AIO'],['NZXT','Kraken 360','AIO']],
FANS:[['ARCTIC','P12 PWM PST 120mm','120mm'],['ARCTIC','P14 PWM PST 140mm','140mm'],['Noctua','NF-A12x25','120mm'],['Corsair','AF120 RGB Elite','120mm'],['Lian Li','UNI FAN SL-INF 120','120mm'],['Cooler Master','SickleFlow 120 ARGB','120mm'],['DeepCool','FC120 3-Pack','120mm']]
};
Object.entries(window.builderCatalog).forEach(([cat,list])=>list.forEach((x,i)=>{const id='bc_'+cat.toLowerCase()+'_'+i;if(!data.products.some(p=>p.id===id))data.products.push({id,cat:cat==='STORAGE'?'SSD':cat,name:x[1],brand:x[0],price:0,img:'',url:cat==='GPU'?(x[0]==='AMD'?'https://www.amd.com/en/products/graphics/desktops/radeon.html':'https://www.nvidia.com/en-us/geforce/graphics-cards/'):'https://www.google.com/search?q='+encodeURIComponent(x[0]+' '+x[1]),store:'كتالوج Builder',spec:x.slice(2).join(' • '),sourceType:'catalog',socket:(x[2]||'').match(/^(AM[0-9]+|LGA[0-9]+)/)?.[1]||'',ram:(x[3]||'').includes('DDR')?x[3]:'',watts:0});}));window.builderFilters={CPU:'all',BOARD:'all',GPU:'all',RAM:'all',STORAGE:'all',PSU:'all',CASE:'all',COOLER:'all',FANS:'all'};
function builderPick(k,b){window.builderFilters[k]=b||'all';renderBuilder()}
function renderBuilder(){
 const labels={CPU:'المعالج',BOARD:'اللوحة الأم',GPU:'كرت الشاشة',RAM:'الرامات',STORAGE:'التخزين',PSU:'الباور سبلاي',CASE:'الكيس',COOLER:'المبرد',FANS:'المراوح'};
 document.getElementById('builderSlots').innerHTML=Object.keys(window.builderCatalog).map(cat=>{
  const list=window.builderCatalog[cat], brand=window.builderFilters[cat], filtered=list.filter(x=>brand==='all'||x[0]===brand), selected=state.build[cat];
  const brands=[...new Set(list.map(x=>x[0]))];
  const opts=filtered.map((x,i)=>'<option value="bc_'+cat.toLowerCase()+'_'+list.indexOf(x)+'" '+(selected===('bc_'+cat.toLowerCase()+'_'+list.indexOf(x))?'selected':'')+'>'+esc(x[0]+' • '+x[1])+' — السعر عند المصدر</option>').join('');
  return '<div class="builderSlot info"><div class="builderSlotHead"><h3>'+labels[cat]+'</h3><span class="builderCount">'+list.length+' خيارات</span></div><div class="builderBrandRow"><button class="brandChip '+(brand==='all'?'active':'')+'" onclick="builderPick(\''+cat+'\',\'all\')">الكل</button>'+brands.map(b=>'<button class="brandChip '+(brand===b?'active':'')+'" onclick="builderPick(\''+cat+'\',\''+esc(b)+'\')">'+esc(b)+'</button>').join('')+'</div><select class="select builderSelect" onchange="chooseBuild(\''+cat+'\',this.value)"><option value="">اختر '+labels[cat]+'</option>'+opts+'</select>'+(selected?'<p class="builderSelected">'+esc((list.find(x=>'bc_'+cat.toLowerCase()+'_'+list.indexOf(x)===selected)||[]).slice(0).join(' • '))+'</p>':'')+'</div>';
 }).join('');
 updateBuildSummary();
}
function chooseBuild(k,id){state.build[k]=id||'';updateBuildSummary();renderBuilder()}
function updateBuildSummary(){
 const ps=Object.values(state.build).map(id=>data.products.find(p=>p.id===id)).filter(Boolean), priced=ps.filter(p=>p.price>0);
 const total=priced.reduce((s,p)=>s+p.price,0), watts=ps.reduce((s,p)=>s+(p.watts||0),0);
 let status='أكمل اختيار القطع',cls='warn'; const cpu=ps.find(p=>p.id===state.build.CPU),board=ps.find(p=>p.id===state.build.BOARD),ram=ps.find(p=>p.id===state.build.RAM);
 if(cpu&&board&&cpu.socket&&board.socket&&cpu.socket!==board.socket){status='تعارض Socket';cls='dangerText'} else if(ram&&board&&ram.ram&&board.ram&&!(ram.ram.includes(board.ram)||board.ram.includes(ram.ram))){status='تعارض RAM';cls='dangerText'} else if(ps.length>=5){status='فحص أولي جيد';cls='good'}
 document.getElementById('buildTotal').textContent=total?money(total):'السعر حسب العروض';
 document.getElementById('buildWatt').textContent=watts?watts+' W':'يُحسب عند توفر البيانات';
 document.getElementById('buildStatus').textContent=status;document.getElementById('buildStatus').className=cls;
}
route();

function catalogSyncStatus(){
 const n=document.querySelector('#catalogSyncStatus');if(!n)return;
 n.innerHTML='<span class="syncDot"></span><b>محرك مزامنة الكتالوجات</b><span>مهيأ للمزامنة الدورية • لا يتم اختلاق سعر أو صورة</span>';
}
function renderStores(){
 const root=document.getElementById('storeDirectory'); if(!root)return;
 const count=data.products.length;
 root.innerHTML='<div class="storeHero"><div><div class="eyebrow">IRAQ STORE NETWORK</div><h2>شبكة المتاجر والكتالوجات</h2><p>نربط المنتجات بمصادرها الأصلية. السعر والصورة والرابط مأخوذة من المصدر عندما تكون البيانات متاحة، وأي سعر غير مؤكد يظهر «السعر عند المصدر».</p></div><div class="storeMetric"><b>'+count+'</b><span>منتج مفهرس حالياً</span></div></div>'+
 '<div class="storeDirectoryGrid">'+catalogStores.map(s=>{const n=data.products.filter(p=>p.sourceId===s.id).length;return '<article class="storeDirectoryCard"><div class="storeAvatar">'+esc(s.name.slice(0,2))+'</div><div class="storeDirectoryBody"><span class="tag">'+esc(s.type)+'</span><h3>'+esc(s.name)+'</h3><p class="meta">'+n+' منتجات مفهرسة في النسخة الحالية</p><div class="storeBtns"><a class="btn ghost" href="'+s.url+'" target="_blank" rel="noopener">المتجر الأصلي ↗</a><a class="btn primary" href="'+s.catalog+'" target="_blank" rel="noopener">الكتالوج ↗</a></div></div></article>'}).join('')+'</div>'+
 '<div class="section"><div class="sectionHead"><div><h2>منتجات المتاجر المفهرسة</h2><p>اضغط على أي منتج لرؤية الصورة والرابط الأصلي.</p></div><div class="filters"><button class="pill active" onclick="renderStoreProducts(&quot;all&quot;,this)">الكل</button>'+catalogStores.map(s=>'<button class="pill" onclick="renderStoreProducts(\''+s.id+'\',this)">'+esc(s.name)+'</button>').join('')+'</div></div><div id="storeProductGrid" class="grid4"></div></div>';
 renderStoreProducts('all');
}
function renderStoreProducts(storeId,el){
 document.querySelectorAll('#stores .filters .pill').forEach(x=>x.classList.remove('active'));if(el)el.classList.add('active');
 const a=storeId==='all'?data.products:data.products.filter(p=>p.sourceId===storeId);
 const g=document.getElementById('storeProductGrid');if(g)g.innerHTML=a.map(card).join('');
}


/* ========================================================================
   LIVE PUBLIC CATALOG SNAPSHOT
   GitHub Pages is static, so the scheduled GitHub Action writes the latest
   public catalog into data/catalog/products.json. The browser loads it here.
   ======================================================================== */
async function loadSyncedCatalog(){
  try{
    const res=await fetch('data/catalog/products.json?v='+Date.now(),{cache:'no-store'});
    if(!res.ok) throw new Error('catalog HTTP '+res.status);
    const payload=await res.json();
    const incoming=(payload.products||[]).map(p=>({
      id:'sync-'+p.storeId+'-'+p.id,
      sourceId:p.storeId,
      cat:p.category||'ACCESSORY',
      name:p.name||'منتج بدون اسم',
      brand:p.brand||'',
      price:Number(p.priceIqd)||0,
      img:p.imageUrl||'',
      url:p.productUrl||'',
      store:(catalogStores.find(s=>s.id===p.storeId)||{}).name||p.storeId,
      spec:p.spec||'',
      model:p.model||'',
      availability:p.availability||'unknown',
      lastCheckedAt:p.lastCheckedAt||payload.generatedAt
    })).filter(p=>p.url);

    const existingByUrl=new Map(data.products.filter(p=>p.url).map(p=>[p.url,p]));
    incoming.forEach(p=>{
      const old=existingByUrl.get(p.url);
      if(old){
        Object.assign(old,p);
      }else{
        data.products.push(p);
      }
    });

    window.CYBERCORE_CATALOG_META=payload;
    catalogSyncStatus();
    const status=document.querySelector('#catalogSyncStatus');
    if(status){
      const ok=(payload.count||incoming.length);
      status.innerHTML='<span class="syncDot"></span><b>مزامنة حقيقية</b><span>'+ok.toLocaleString('ar-IQ')+' منتج عام من المصادر • آخر تحديث '+new Date(payload.generatedAt).toLocaleString('ar-IQ')+'</span>';
    }

    if(typeof renderHomeDeals==='function') renderHomeDeals();
    if(typeof renderDeals==='function') renderDeals();
    if(typeof renderSearch==='function') renderSearch();
    if(typeof renderStores==='function') renderStores();
  }catch(err){
    console.warn('[CyberCore Catalog] snapshot unavailable:',err);
    const status=document.querySelector('#catalogSyncStatus');
    if(status){
      status.innerHTML='<span class="syncDot" style="background:var(--yellow)"></span><b>وضع الكتالوج المحلي</b><span>تعذر تحميل آخر snapshot؛ البيانات الأساسية ما زالت تعمل.</span>';
    }
  }
}

if(document.readyState==='loading'){
  document.addEventListener('DOMContentLoaded',()=>setTimeout(loadSyncedCatalog,120),{once:true});
}else{
  setTimeout(loadSyncedCatalog,120);
}
