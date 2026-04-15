const slides = document.querySelectorAll('.hero_slider');
const bullets = document.querySelectorAll('.hero_bullet_btn');
const currentEl = document.querySelector('.current');
const totalEl = document.querySelector('.total');

let current = 0;
let total = slides.length;

totalEl.innerText = total;

function updateSlide(index) {
  slides[current].classList.remove('active');
  bullets[current].classList.remove('active');

  current = index;

  slides[current].classList.add('active');
  bullets[current].classList.add('active');

  currentEl.innerText = current + 1;
}

// 👉 다음
document.querySelector('.hero_next').addEventListener('click', () => {
  let next = (current + 1) % total;
  updateSlide(next);
});

// 👉 이전
document.querySelector('.hero_prev').addEventListener('click', () => {
  let prev = (current - 1 + total) % total;
  updateSlide(prev);
});

// 👉 bullet 클릭
bullets.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    updateSlide(index);
  });
});

// 👉 자동 슬라이드
let auto = setInterval(() => {
  let next = (current + 1) % total;
  updateSlide(next);
}, 4000);

