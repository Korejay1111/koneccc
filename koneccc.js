// ── All JS inline — no defer needed, DOMContentLoaded handles init ──
var TS=[
  {q:'\u201cKONECCC has been a blessing to my family and me. The teachings here have transformed my understanding of the Word, and I have grown spiritually in ways I never imagined possible.\u201d',n:'Corp. Joel Amusan',r:'Member',i:'C'},
  {q:'\u201cSince I started attending KONECCC, my life has never remained the same. The prayer meetings have strengthened my faith, and the community here is truly like family.\u201d',n:'Mr. Olajide Aderogba',r:'Member',i:'M'},
  {q:'\u201cI found a home at KONECCC. The discipleship program helped me understand my purpose in Christ, and I am now living a life of excellence and fruitfulness.\u201d',n:'Sis. Mofeoluwa Isaac',r:'Member',i:'S'}
];
var ti=0,tt=null;

function gs(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}
function tmm(){var m=document.getElementById('mob');if(m)m.classList.toggle('op');}
function sf(e){
  e.preventDefault();
  var t=document.getElementById('toast');
  if(t){t.classList.add('on');setTimeout(function(){t.classList.remove('on');},3500);}
  e.target.reset();
}
// Directions — opens KONECCC directly on Google Maps
// Uses GPS if available, otherwise opens map search for KONECCC
function gdir(e){
  e.preventDefault();

  var address = "KONECCC (Kingdom of New Creature in Christ Center), Local Government, Road 18, Achiever's Estate, Off Ologuneru-Ido Road, Ibadan, Oyo State Nigeria Ido/Ibadan Oyo NG, Ido 200130";

  var churchName = encodeURIComponent(address);
  var dest = churchName;

  if(navigator.geolocation){
    var btn = e.currentTarget, orig = btn.innerHTML;

    btn.innerHTML = 'Locating...';
    btn.style.pointerEvents = 'none';

    navigator.geolocation.getCurrentPosition(
      function(p){
        var url = 'https://www.google.com/maps/dir/' 
          + p.coords.latitude + ',' + p.coords.longitude + '/' + dest;

        window.open(url, '_blank');
        btn.innerHTML = orig;
        btn.style.pointerEvents = '';
      },
      function(){
        window.open('https://www.google.com/maps/search/' + churchName, '_blank');
        btn.innerHTML = orig;
        btn.style.pointerEvents = '';
      },
      { timeout: 8000 }
    );

  } else {
    window.open('https://www.google.com/maps/search/' + churchName, '_blank');
  }
}
function stT(i){
  var sl=document.getElementById('tsl');if(!sl)return;
  sl.classList.add('out');
  setTimeout(function(){
    var t=TS[i];
    document.getElementById('tq').textContent=t.q;
    document.getElementById('tn').textContent=t.n;
    document.getElementById('tr').textContent=t.r;
    document.getElementById('ti').textContent=t.i;
    document.querySelectorAll('.dot').forEach(function(d,j){d.classList.toggle('on',j===i);});
    sl.classList.remove('out');
  },280);
}
function nT(){ti=(ti+1)%TS.length;stT(ti);rT();}
function pT(){ti=(ti-1+TS.length)%TS.length;stT(ti);rT();}
function gT(i){ti=i;stT(i);rT();}
function rT(){clearInterval(tt);tt=setInterval(nT,6000);}

window.addEventListener('DOMContentLoaded',function(){
  document.getElementById('yr').textContent=new Date().getFullYear();
  window.addEventListener('scroll',function(){
    document.getElementById('nav').classList.toggle('sc',window.scrollY>50);
  },{passive:true});
  // Particles
  var pc=document.getElementById('ptcl');
  if(pc){
    for(var k=0;k<20;k++){
      var p=document.createElement('div');
      p.className='pt';
      p.style.left=Math.round(Math.random()*100)+'%';
      p.style.top=Math.round(Math.random()*100)+'%';
      p.style.animationDelay=(Math.random()*3).toFixed(1)+'s';
      p.style.animationDuration=(3+Math.random()*2).toFixed(1)+'s';
      pc.appendChild(p);
    }
  }
  // Scroll reveal
  var ro=new IntersectionObserver(function(entries){
    entries.forEach(function(entry,idx){
      if(entry.isIntersecting) setTimeout(function(){entry.target.classList.add('on');},idx*55);
    });
  },{threshold:0.08,rootMargin:'0px 0px -40px 0px'});
  document.querySelectorAll('.rv').forEach(function(el){ro.observe(el);});
  // Start testimony auto-play
  tt=setInterval(nT,6000);
});