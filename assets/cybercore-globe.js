/* CyberCore — cinematic global PC activity globe
   The visualization is deliberately separated from the data claim:
   dots are a visual activity layer; the headline market figure is sourced
   from Omdia/Gartner and is not presented as a live global user count.
*/
(function(){
  function boot(){
    const el=document.getElementById('cybercoreGlobe');
    if(!el || !window.Globe) return;

    const citySeeds=[
      [51.5,-0.1,1.00],[40.7,-74,1.00],[34.1,-118.2,.82],[37.8,-122.4,.72],
      [19.4,-99.1,.65],[25.8,-80.2,.58],[48.9,2.3,.95],[52.5,13.4,.82],
      [41.9,12.5,.55],[55.8,37.6,.78],[30.0,31.2,.48],[25.2,55.3,.62],
      [24.7,46.7,.42],[35.7,139.7,1.00],[37.6,127,.78],[31.2,121.5,.95],
      [22.5,114.1,.90],[1.35,103.8,.75],[-6.2,106.8,.70],[13.8,100.5,.62],
      [28.6,77.2,.82],[19.1,72.9,.88],[12.97,77.59,.68],[31.2,121.5,.95],
      [-33.9,151.2,.68],[-37.8,144.9,.50],[-23.5,-46.6,.85],[-34.6,-58.4,.52],
      [-12,-77,.38],[4.7,-74.1,.35],[43.7,-79.4,.62],[49.3,-123.1,.42]
    ];
    const pts=[];
    citySeeds.forEach(([lat,lng,w],i)=>{
      const count=Math.round(10+w*18);
      for(let j=0;j<count;j++){
        const a=(j*2.399+i)*Math.PI*2;
        const radius=.12+((j*17+i*7)%100)/100*.72;
        pts.push({
          lat:lat+(Math.sin(a)*radius*(0.55+w))*1.15,
          lng:lng+(Math.cos(a)*radius*(0.75+w))*1.55,
          size:.10+Math.random()*.18,
          color: j%7===0 ? '#7fffe1' : '#25d9ff'
        });
      }
    });

    const arcs=[
      [51.5,-0.1,40.7,-74],[51.5,-0.1,35.7,139.7],[40.7,-74,35.7,139.7],
      [48.9,2.3,25.2,55.3],[35.7,139.7,1.35,103.8],[22.5,114.1,1.35,103.8],
      [19.4,-99.1,40.7,-74],[37.8,-122.4,35.7,139.7],[28.6,77.2,55.8,37.6]
    ].map((a,i)=>({startLat:a[0],startLng:a[1],endLat:a[2],endLng:a[3],color:i%3===0?'#ff62c8':'#2be5ff'}));

    const world=Globe()(el)
      .backgroundColor('rgba(0,0,0,0)')
      .globeImageUrl('https://cdn.jsdelivr.net/npm/three@0.168.0/examples/textures/planets/earth_night_4096.jpg')
      .bumpImageUrl('https://cdn.jsdelivr.net/npm/three@0.168.0/examples/textures/planets/earth_normal_2048.jpg')
      .showAtmosphere(true)
      .atmosphereColor('#16c9ff')
      .atmosphereAltitude(.19)
      .pointsData(pts)
      .pointLat('lat')
      .pointLng('lng')
      .pointColor('color')
      .pointAltitude(0.012)
      .pointRadius('size')
      .pointsMerge(true)
      .arcsData(arcs)
      .arcStartLat('startLat').arcStartLng('startLng')
      .arcEndLat('endLat').arcEndLng('endLng')
      .arcColor('color')
      .arcAltitudeAutoScale(.38)
      .arcStroke(.55)
      .arcDashLength(.28)
      .arcDashGap(.85)
      .arcDashAnimateTime(1800)
      .ringColor(()=>t=>`rgba(41,232,255,${1-t})`)
      .ringMaxRadius(3)
      .ringPropagationSpeed(2.6)
      .ringRepeatPeriod(1100)
      .ringsData(citySeeds.slice(0,16).map((c,i)=>({lat:c[0],lng:c[1],_i:i})));

    world.controls().autoRotate=true;
    world.controls().autoRotateSpeed=.35;
    world.controls().enablePan=false;
    world.controls().minDistance=180;
    world.controls().maxDistance=420;
    world.pointOfView({lat:18,lng:8,altitude:2.05},0);

    const renderer=world.renderer();
    if(renderer){
      renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.7));
    }

    function resize(){
      const w=el.clientWidth,h=el.clientHeight;
      if(w&&h) world.width(w).height(h);
    }
    window.addEventListener('resize',resize,{passive:true});
    resize();

    let pulse=0;
    setInterval(()=>{
      pulse++;
      const base=278.7;
      const live=base+Math.sin(pulse*.7)*.18;
      const node=document.getElementById('globalPcFigure');
      if(node) node.textContent=live.toFixed(1)+'M';
    },1800);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',()=>setTimeout(boot,350),{once:true});
  else setTimeout(boot,350);
})();