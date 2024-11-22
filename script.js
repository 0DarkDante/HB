let btn = document.querySelector('.btnJS');
let p = document.querySelector('#answear');
let scrolling = document.querySelector('#scrolling');

let WhyILoveY = ['Тому що ти завжди робиш мій день яскравішим❤️', 'Звісно, іноді ти бешкетниця, але з тобою не буває сумно❤️', 'Тому що ти завжди віриш у мене❤️', 'Тому що ти надихаєш мене❤️', 'Тому що ти особлива❤️', 'Тому що ти моя маленька❤️', 'Тому що твоя посмішка робить мій день яскравішим і радіснішим❤️', 'Тому що наше спільне майбутнє виглядає захопливим та обіцяючим❤️', 'Тому що наша любов зростає з кожним днем, і я вірю, що ми - найкраща команда❤️', 'Тому що ти - найважливіша людина у моєму житті, і я завжди готовий докласти всіх зусиль для твого щастя❤️', 'Тому що твої теплі обійми завжди роблять мене коханим❤️', 'Тому що твої вміння бути терплячою і розуміючою дозволяють подолати будь-які труднощі❤️', 'Тому що ти мій найкращий друг, з яким можна поділитися всім❤️', 'Тому що ти завжди готова вислухати мене, коли мені потрібно поділитися своїми думками і переживаннями❤️', 'Тому що ти моя❤️'];

let currentIndex = 0;

btn.addEventListener('click', function(){
  if (currentIndex < WhyILoveY.length) {
    p.textContent = WhyILoveY[currentIndex]; // Виводимо поточний елемент масиву
    currentIndex++; // Збільшуємо індекс для наступного виведення
  } else {
    p.textContent = 'Ти найкраща❤️'; // Якщо всі причини вже виведені
  }
});

scrolling.addEventListener('click', function(){
  window.scrollBy({
    top: 6520, // Відстань в пікселях, на яку прокручуємо сторінку
    behavior: 'smooth' // Додаємо плавний ефект прокрутки
  });
});



var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

// Додаємо обробник подій на кнопку
document.getElementById('confetti-btn').addEventListener('click', () => {
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
});



document.getElementById('confetti-btn2').addEventListener('click', () => {
  var duration = 15 * 1000; // Тривалість конфеті 15 секунд
  var animationEnd = Date.now() + duration;
  var skew = 1;

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  (function frame() {
    var timeLeft = animationEnd - Date.now();
    var ticks = Math.max(200, 500 * (timeLeft / duration));
    skew = Math.max(0.8, skew - 0.001);

    confetti({
      particleCount: 1,
      startVelocity: 0,
      ticks: ticks,
      origin: {
        x: Math.random(),
        y: (Math.random() * skew) - 0.2 // Частинки стартують зверху
      },
      colors: ['#1d85d2'], // Яскраві кольори
      shapes: ['circle', 'square'], // Форми частинок
      gravity: randomInRange(0.4, 0.6),
      scalar: randomInRange(0.6, 1.2),
      drift: randomInRange(-0.4, 0.4) // Розсіювання частинок
    });

    if (timeLeft > 0) {
      requestAnimationFrame(frame);
    }
  })();
});