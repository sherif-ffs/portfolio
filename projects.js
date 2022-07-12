const map = document.querySelector('.map')
const garden = document.querySelector('.garden');
const hoard = document.querySelector('.hoard');
const neolib = document.querySelector('.neolib');
const test = document.querySelector('.test');
const wealth = document.querySelector('.wealth');
const spirit = document.querySelector('.spirit');

const width = window.innerWidth;

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

console.log({ width });

if (width > 1000) {
  projects.forEach((project) => {
    project.node.addEventListener('mouseenter', (e) => {
      console.log({ e })
      const top = e.layerY;
      const left = e.x;
      console.log({
        top,
        left
      })
      document.querySelector('.dance').style.display = 'none';
      image.style.display = 'block';
      image.style.top = `${top-200}px`;
      image.style.zIndex = '10';
      image.style.border = '1px solid red';
      image.src = `./images/${project.name}.png`
    })
    project.node.addEventListener('mouseleave', (e) => {
      console.log({ e })
      image.style.display = 'none'
      document.querySelector('.dance').style.display = 'block';
      image.src = ""
    })
  })
}