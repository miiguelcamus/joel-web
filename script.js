(function(){
var $=function(s,c){return(c||document).querySelector(s)},$$=function(s,c){return[].slice.call((c||document).querySelectorAll(s))};
var WA='34615736224',fine=matchMedia('(hover:hover) and (pointer:fine)').matches,RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
var b=$('.burger'),m=$('.menu');b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
if(fine&&!RM)$$('.mag').forEach(function(el){el.addEventListener('mousemove',function(e){var r=el.getBoundingClientRect();el.style.transform='translate('+(e.clientX-r.left-r.width/2)*.2+'px,'+(e.clientY-r.top-r.height/2)*.3+'px)'});el.addEventListener('mouseleave',function(){el.style.transform=''})});
function count(el){var to=+el.dataset.count,dec=+(el.dataset.dec||0),s=null;function f(ts){if(!s)s=ts;var k=Math.min((ts-s)/1300,1),v=to*(1-Math.pow(1-k,3));el.textContent=dec?v.toFixed(dec).replace('.',','):Math.round(v);if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');if(x.target.dataset.count)count(x.target);io.unobserve(x.target)}})},{threshold:.15});
$$('.card,.steps li,.q,details,.g,.tcard,.kc,.soc,.cc,.bm,.form').forEach(function(el,i){el.classList.add('reveal');el.style.transitionDelay=(i%3)*80+'ms';io.observe(el)});$$('[data-count]').forEach(function(el){io.observe(el)})}
else $$('[data-count]').forEach(function(el){el.textContent=el.dataset.count});
// mapa corporal
var zs=$$('.zp');if(zs.length){function show(k){zs.forEach(function(z){z.hidden=z.dataset.z!==k});$$('.spot,.zc').forEach(function(x){x.classList.toggle('on',x.dataset.z===k)})}
$$('.spot,.zc').forEach(function(x){x.addEventListener('click',function(){show(x.dataset.z)})});show(zs[0].dataset.z)}
// formulario
var cf=$('#cf');if(cf){$$('#who .opt').forEach(function(o){o.addEventListener('click',function(){$$('#who .opt').forEach(function(x){x.classList.toggle('on',x===o)})})});
cf.addEventListener('submit',function(e){e.preventDefault();var v=function(n){return cf.querySelector('[name='+n+']').value.trim()},ok=true;['n','m'].forEach(function(n){var f=cf.querySelector('[name='+n+']').parentNode,bad=!v(n);f.classList.toggle('err',bad);if(bad)ok=false});if(!ok)return;
var msg='Hola Joel! Soy '+v('n')+(v('t')?' ('+v('t')+')':'')+'. Te escribo desde tu web. La cita sería '+$('#who .opt.on').textContent.toLowerCase()+'.\n\n'+v('m');window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(msg),'_blank','noopener')})}
// pixelar caras de menores
function pix(im){if(im.dataset.done)return;im.dataset.done=1;try{var W=im.naturalWidth,H=im.naturalHeight,c=document.createElement('canvas');c.width=W;c.height=H;var x=c.getContext('2d');x.drawImage(im,0,0);var bs=Math.max(10,Math.round(W*.04)),t=document.createElement('canvas'),tx=t.getContext('2d');
im.dataset.pix.split(';').forEach(function(r){var a=r.split(',').map(Number),sx=a[0]*W,sy=a[1]*H,sw=a[2]*W,sh=a[3]*H,tw=Math.max(1,Math.ceil(sw/bs)),th=Math.max(1,Math.ceil(sh/bs));t.width=tw;t.height=th;tx.drawImage(c,sx,sy,sw,sh,0,0,tw,th);x.imageSmoothingEnabled=false;x.drawImage(t,0,0,tw,th,sx,sy,sw,sh)});
var u=c.toDataURL('image/jpeg',.88);im.src=u;im.classList.add('pxd');var g=im.closest('.g');if(g)g.dataset.src=u}catch(e){im.classList.add('pxf');var g2=im.closest('.g');if(g2)g2.dataset.src=''}}
$$('img[data-pix]').forEach(function(im){im.loading='eager';if(im.complete&&im.naturalWidth)pix(im);else{im.addEventListener('load',function(){pix(im)},{once:true});im.addEventListener('error',function(){im.classList.add('pxf')},{once:true})}});
// lightbox
var lb=$('.lb');if(lb){var im=$('img',lb);$$('.g').forEach(function(x){x.addEventListener('click',function(){if(!x.dataset.src)return;im.src=x.dataset.src;lb.hidden=false})});lb.addEventListener('click',function(){lb.hidden=true});addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true})}
})();
