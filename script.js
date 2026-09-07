const intro=document.querySelector('#intro'), welcome=document.querySelector('#welcome'), app=document.querySelector('#app');
const form=document.querySelector('#nameForm'), input=document.querySelector('#clientName');
const nameOut=document.querySelector('#nameOutput'), welcomeName=document.querySelector('#welcomeName');
const saved=localStorage.getItem('dogsterName'); if(saved) input.value=saved;

form.addEventListener('submit',e=>{
 e.preventDefault();
 const name=(input.value.trim()||'amigo').slice(0,30);
 localStorage.setItem('dogsterName',name);
 nameOut.textContent=name; welcomeName.textContent=name.toUpperCase();
 intro.classList.add('done');
 setTimeout(()=>{welcome.classList.add('show');welcome.setAttribute('aria-hidden','false')},350);
 setTimeout(()=>{welcome.classList.remove('show');app.classList.add('ready');initReveal()},3900);
});

function initReveal(){
 const obs=new IntersectionObserver(entries=>{
  entries.forEach((e,i)=>{if(e.isIntersecting){setTimeout(()=>e.target.classList.add('visible'),i*80);obs.unobserve(e.target)}})
 },{threshold:.12});
 document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
}
document.addEventListener('mousemove',e=>{
 const g=document.querySelector('.cursor-glow'); if(g){g.style.left=e.clientX+'px';g.style.top=e.clientY+'px'}
});


// Real food photography: cycle the background slides in each cinematic section.
(function(){
  const groups=document.querySelectorAll('.real-bg');
  groups.forEach(group=>{
    const slides=[...group.querySelectorAll('.bg-slide')];
    if(!slides.length) return;
    let current=0;
    setInterval(()=>{
      slides[current].classList.remove('active');
      current=(current+1)%slides.length;
      slides[current].classList.add('active');
    },5000);
  });
})();
