const NavigationTemplate = document.createElement('template');

NavigationTemplate.innerHTML =
  `
  <link href="./components/nav.css" rel="stylesheet"></link>
  <link href="../index.css" rel="stylesheet"></link>
  <header>
      <div class="border-two">
        <div class="border-three">
          <div class="border-four">
            <div class="contact">
              <a href="index.html">Home</a>
              <a href="projects.html">Projects</a>
            </div>
          </div>
        </div>
      </div>
  </header>
`

class Navigation extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(NavigationTemplate.content);
  }
}

customElements.define('navigation-component', Navigation);