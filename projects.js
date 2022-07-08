const map = document.querySelector('.map')
const garden = document.querySelector('.garden');
const hoard = document.querySelector('.hoard');
const neolib = document.querySelector('.neolib');
const test = document.querySelector('.test');
const wealth = document.querySelector('.wealth');

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
  }
]
const image = document.querySelector('.target-image');
image.style.display = 'none'

projects.forEach((project) => {
  project.node.addEventListener('mouseenter', (e) => {
    console.log({ e })
    document.querySelector('.dance').style.display = 'none';
    image.style.display = 'block'
    image.src = `./images/${project.name}.png`
  })
  project.node.addEventListener('mouseleave', (e) => {
    console.log({ e })
    image.style.display = 'none'
    document.querySelector('.dance').style.display = 'block';
    image.src = ""
  })
})