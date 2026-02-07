const scenes=document.querySelectorAll('.scene');
const btn=document.getElementById('nextBtn');
const music=document.getElementById('music');
const hugScene=document.querySelector('.hug-scene');
const hugBtn=document.getElementById('hugBtn');

let i=0;

/* автозапуск музыки */
window.addEventListener('DOMContentLoaded',async()=>{
  music.volume=0.2;
  try{
    await music.play();
    music.muted=false;
  }catch{
    const start=async()=>{
      try{await music.play(); music.muted=false}catch{}
    };
    document.addEventListener('click',start,{once:true});
    document.addEventListener('touchstart',start,{once:true});
  }
});

const texts=[
  "Начать",
  "Продолжить",
  "Я помню",
  "Посмотреть дальше",
  "Я рядом",
  ""
];

btn.addEventListener('click',()=>{
  scenes[i].classList.remove('active');
  i++;
  if(i<scenes.length){
    scenes[i].classList.add('active');
    btn.textContent=texts[i]||"";
    if(i===5) btn.style.display="none"; // скрываем кнопку на сцене 5
  }else{
    btn.style.display="none";
  }
});

/* соединение сердец по кнопке "Я знаю" */
hugBtn.addEventListener('click',()=>{
  hugScene.classList.add('merge');
  hugBtn.style.display="none";
  setTimeout(()=>{
    btn.style.display="block";
    btn.textContent="Продолжить";
  },1500); // показываем кнопку после соединения и вспышки
});
