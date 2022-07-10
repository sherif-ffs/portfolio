const root = document.documentElement;
const doc = document.firstElementChild;

const sherif = document.querySelector('.sherif');
const mask = document.querySelector('.mask');
const modal = document.querySelector('.about-me');

var isSafari = window.safari !== undefined;

if (isSafari) {
  document.querySelector('.dance').style.display = 'none'
};

mask.addEventListener('click', () => {
  mask.classList.remove('open')
  mask.classList.add('close')
  modal.classList.add('dismiss')
});

sherif.addEventListener('click', () => {
  mask.classList.remove('close')
  mask.classList.add('open')
  modal.classList.remove('dismiss')
  modal.classList.add('selected')
})

const hueInput = document.querySelector('hue-scroll-widget')
const themeToggle = document.querySelector('theme-toggle');

hueInput.addEventListener('input', (e) => {
  root.style.setProperty('--brand-hue', e.target.value)
})

hueInput.addEventListener('onkeydown', (e) => {
  root.style.setProperty('--brand-hue', e.target.value)

})

themeToggle.addEventListener('input', (e) => {
  doc.setAttribute('color-scheme', e.target.value)
})