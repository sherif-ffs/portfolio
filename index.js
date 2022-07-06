const root = document.documentElement;
const doc = document.firstElementChild;

const hueInput = document.querySelector('hue-scroll-widget')
const themeToggle = document.querySelector('button-widget')
  // const sizeOneSlider = document.querySelector('circle-scroll-widget').querySelector('.size-one-slider')
  // const sizeTwoSlider = document.querySelector('circle-scroll-widget').querySelector('.size-two-slider')
  // const sizeOneSlider = document.querySelector('modal-component').shadowRoot.querySelector('.size-one-slider');
  // const sizeTwoSlider = document.querySelector('modal-component').shadowRoot.querySelector('.size-two-slider');

hueInput.addEventListener('input', (e) => {
  h = e.target.value;
  root.style.setProperty('--brand-hue', e.target.value)
})

// sizeOneSlider.addEventListener('input', (e) => {
//   h = e.target.value;
//   console.log(e.target.value)
//   root.style.setProperty('--size-one', `${e.target.value}px`)
// })

// sizeTwoSlider.addEventListener('input', (e) => {
//   h = e.target.value;
//   root.style.setProperty('--size-two', `${e.target.value}px`)
// })
themeToggle.addEventListener('input', (e) => {
  doc.setAttribute('color-scheme', e.target.value)
})