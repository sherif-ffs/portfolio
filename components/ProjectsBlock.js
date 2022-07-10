class ProjectsBlock extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <link href="./components/projectsBlock.css" rel="stylesheet"></link>
      <section>
      <div class="border-one">
        <div class="border-two">
          <div class="border-three">
          <div class="border-four">
        <div class="project">
          <a href="https://under-garden.vercel.app/" target="_blank">Under Garden</a>
          <p>
          A tunneling & falling sand game built with WASM, Rust, and GLSL.
          </p>
        </div>

        <div class="project">
          <a href="https://rabbit-silk.vercel.app/" target="_blank">Hoard</a> 
          <p>
          A bookmarking app written using Next.js, Typescript, and Node.
          </p>
        </div>
        <a href="projects.html" class="more-projects">More Projects</a>
        </div>
        </div>
        </div>
        </div>
      </section>
    `;
  }
}

customElements.define('projects-block', ProjectsBlock);