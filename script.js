const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}})},{threshold:.15});
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
const bo=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.querySelectorAll('b[data-w]').forEach(b=>b.style.width=b.dataset.w);bo.unobserve(e.target)}})},{threshold:.4});
document.querySelectorAll('.about-card').forEach(c=>bo.observe(c));