class ProjectsBlock extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <section>
        <div class="project">
          <a href="https://under-garden.vercel.app/" target="_blank">Under Garden</a> is a tunneling/fallin sand game built using WASM, Rust, and GLSL.
        </div>
        <div class="project">
        <a href="https://rabbit-silk.vercel.app/" target="_blank">Hoard</a> is a bookmarking app written using Next.js, Typescript, and Node.
        </div>
        <a href="#" class="more-projects">More Projects</a>
      </section>
    `;
  }
}

customElements.define('projects-block', ProjectsBlock);