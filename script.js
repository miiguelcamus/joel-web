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
// lightbox
var lb=$('.lb');if(lb){var im=$('img',lb);$$('.g').forEach(function(x){x.addEventListener('click',function(){im.src=x.dataset.src;lb.hidden=false})});lb.addEventListener('click',function(){lb.hidden=true});addEventListener('keydown',function(e){if(e.key==='Escape')lb.hidden=true})}
})();
