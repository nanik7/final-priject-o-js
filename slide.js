const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const sliderItems = document.querySelectorAll('.slider-item');

let currentSliderIndex = 0;

nextBtn.addEventListener('click', () => {
  sliderItems[currentSliderIndex].classList.remove('show');
  if (currentSliderIndex === sliderItems.length - 1) {
    currentSliderIndex = 0;
  } else {
    currentSliderIndex += 1;
  }
  sliderItems[currentSliderIndex].classList.add('show');
});

prevBtn.addEventListener('click', () => {
  sliderItems[currentSliderIndex].classList.remove('show');
  if (currentSliderIndex === 0) {
    currentSliderIndex = sliderItems.length - 1;
  } else {
    currentSliderIndex -= 1;
  }
  sliderItems[currentSliderIndex].classList.add('show');
});


const dropdownBtn = document.querySelector('#dropdown-btn');
const dropdownMenu = document.querySelector('#dropdown-container');

dropdownBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  if (dropdownMenu.classList.contains('show')) {
    dropdownBtn.innerHTML = `Dropdown <i class="fa-solid fa-arrow-up"></i>`;
  } else {
    dropdownBtn.innerHTML = `Dropdown <i class="fa-solid fa-arrow-down"></i>`;
  }
});


const scrollTop = document.querySelector('#scroll-top');
scrollTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});


const burgerBtn = document.getElementById('burgerBtn');
const burgerContainer = document.getElementById('burgerContainer');

burgerBtn.addEventListener('click', () => {
  burgerContainer.classList.toggle('show');
  if (burgerBtn.classList.toggle('show')) {
    burgerBtn.innerText = '👇';
  } else {
    burgerBtn.innerText = '☝️';
  }
});