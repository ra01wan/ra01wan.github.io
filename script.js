const scenes = document.querySelectorAll('.scene');
const btn = document.getElementById('nextBtn');
const music = document.getElementById('music');
const hugScene = document.querySelector('.hug-scene');

let i = 0;

/* максимально ранний запуск музыки */
window.addEventListener('DOMContentLoaded', async () => {
  music.volume = 0.2;

  try {
    await music.play();   // попытка мгновенного запуска
    music.muted = false;  // включаем звук
  } catch (e) {
    const startMusic = async () => {
      try {
        await music.play();
        music.muted = false;
      } catch {}
    };

    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('touchstart', startMusic, { once: true });
  }
});

const texts = [
  "Продолжить",
  "Я помню",
  "Посмотреть дальше",
  "Я рядом",
  "Объединить",
  ""
];

btn.addEventListener('click', () => {

  if (i === 4) {
    hugScene.classList.add('merge');

    setTimeout(() => {
      scenes[i].classList.remove('active');
      i++;
      scenes[i].classList.add('active');
      btn.style.display = "none";
    }, 2500);

    return;
  }

  scenes[i].classList.remove('active');
  i++;

  if (i < scenes.length) {
    scenes[i].classList.add('active');
    btn.textContent = texts[i] || "";
  } else {
    btn.style.display = "none";
  }

});
