const map = document.querySelector('.map')
const garden = document.querySelector('.garden');
const hoard = document.querySelector('.hoard');
const neolib = document.querySelector('.neolib');
const test = document.querySelector('.test');
const wealth = document.querySelector('.wealth');
const spirit = document.querySelector('.spirit');

const width = window.innerWidth;

const root = document.documentElement;
const doc = document.firstElementChild;

if (localStorage.getItem('color-scheme')) {
  const theme = localStorage.getItem('color-scheme')
  doc.setAttribute('color-scheme', theme)
}


if (localStorage.getItem('--brand-hue')) {
  const hue = localStorage.getItem('--brand-hue')
  root.style.setProperty('--brand-hue', hue)
}

const projects = [{
    name: 'garden',
    node: garden
  },
  {
    name: 'map',
    node: map
  },
  {
    name: 'hoard',
    node: hoard
  },
  {
    name: 'neolib',
    node: neolib
  },
  {
    name: 'test',
    node: test
  },
  {
    name: 'wealth',
    node: wealth
  },
  {
    name: 'spirit',
    node: spirit
  }
]
const image = document.querySelector('.target-image');
image.style.display = 'none'

if (width > 1000) {
  projects.forEach((project) => {
    project.node.addEventListener('mouseenter', (e) => {
      const top = e.layerY;
      document.querySelector('.dance').style.display = 'none';
      image.style.display = 'block';
      image.style.top = `${top-200}px`;
      image.style.zIndex = '10';
      image.src = `./images/${project.name}.png`
    })
    project.node.addEventListener('mouseleave', (e) => {
      image.style.display = 'none'
      document.querySelector('.dance').style.display = 'block';
      image.src = ""
    })
  })
}