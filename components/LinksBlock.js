const linksBlockTemplate = document.createElement('template');

linksBlockTemplate.innerHTML =
  `
  <link href="../global.css" rel="stylesheet"></link>
  <link href="./components/linksBlock.css" rel="stylesheet"></link>
  <section class="links">
    <div class="border-one">
      <div class="border-two">
        <div class="border-three">
          <div class="border-four">
          <div class="contact">
            <a href="#">Github</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`

class LinksBlock extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(linksBlockTemplate.content);
  }
}

customElements.define('links-block', LinksBlock);