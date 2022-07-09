const root = document.documentElement;
const doc = document.firstElementChild;

const sherif = document.querySelector('.sherif');
const mask = document.querySelector('.mask');
const modal = document.querySelector('.about-me');

mask.addEventListener('click', () => {
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
const themeToggle = document.querySelector('theme-toggle').shadowRoot.querySelector('.buttons')

hueInput.addEventListener('input', (e) => {
  root.style.setProperty('--brand-hue', e.target.value)
})

hueInput.addEventListener('onkeydown', (e) => {
  root.style.setProperty('--brand-hue', e.target.value)

})
console.log({ themeToggle, doc });

themeToggle.addEventListener('input', (e) => {
  console.log({ e })
  console.log('e.target.value: ', e.target.value)
  doc.setAttribute('color-scheme', e.target.value)
})