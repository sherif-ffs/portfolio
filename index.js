console.log('Hello! Thank you for visiting my website :)')

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
  localStorage.setItem('--brand-hue', e.target.value);
  root.style.setProperty('--brand-hue', e.target.value)
})

hueInput.addEventListener('onkeydown', (e) => {
  localStorage.setItem('--brand-hue', e.target.value);
  root.style.setProperty('--brand-hue', e.target.value)
})

themeToggle.addEventListener('input', (e) => {
  localStorage.setItem('color-scheme', e.target.value);
  doc.setAttribute('color-scheme', e.target.value)
})


const radioButtons = Array.from(document.querySelectorAll('.radio-input'))
const slider = document.querySelector('.brand-hue-input');


const renderChecked = (scheme) => {
  radioButtons.forEach(button => {
    const value = button.value;

    if (value === scheme) {
      button.checked = true
    }
  })
}

if (localStorage.getItem('color-scheme')) {
  const theme = localStorage.getItem('color-scheme')
  doc.setAttribute('color-scheme', theme)
  renderChecked(theme)
}


if (localStorage.getItem('--brand-hue')) {
  const hue = localStorage.getItem('--brand-hue')
  root.style.setProperty('--brand-hue', hue)
  slider.value = hue
}