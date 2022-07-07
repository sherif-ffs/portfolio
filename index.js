const root = document.documentElement;
const doc = document.firstElementChild;

const hueInput = document.querySelector('hue-scroll-widget')
const themeToggle = document.querySelector('theme-toggle').shadowRoot.querySelector('.buttons')

hueInput.addEventListener('input', (e) => {
  h = e.target.value;
  root.style.setProperty('--brand-hue', e.target.value)
})

console.log({ themeToggle, doc });

themeToggle.addEventListener('input', (e) => {
  console.log({ e })
  console.log('e.target.value: ', e.target.value)
  doc.setAttribute('color-scheme', e.target.value)
})