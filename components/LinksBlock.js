class LinksBlock extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
        <link href="./components/linksBlock.css" rel="stylesheet"></link>
        <section class="links">
          <div class="border-one">
            <div class="border-two">
              <div class="border-three">
                <div class="border-four">
                <div class="contact">
                  <a href="https://github.com/sherif-ffs" target="_blank">Github</a>
                  <a href="https://www.linkedin.com/in/selmetwa/" target="_blank">LinkedIn</a>
                  <a href="mailto:selmetwa@gmail.com" target="_blank">Email</a>
                </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    `;
  }
}

customElements.define('links-block', LinksBlock);