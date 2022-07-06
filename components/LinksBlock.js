const linksBlockTempalte = document.createElement('template');

linksBlockTempalte.innerHTML =
  `
  <link href="../index.css" rel="stylesheet"></link>
  <link href="./components/linksBlock.css" rel="stylesheet"></link>
  <section class="modal">
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
    shadowRoot.appendChild(linksBlockTempalte.content);
  }
}

customElements.define('links-block', LinksBlock);