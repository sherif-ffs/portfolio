class NavigationTemplate extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <link href="./components/Nav.css" rel="stylesheet"></link>
      <header>
          <div class="border-two">
            <div class="border-three">
              <div class="border-four">
                <div class="contact">
                  <a href="index.html">Home</a>
                </div>
              </div>
            </div>
          </div>
      </header>
    `;
  }
}

customElements.define('navigation-component', NavigationTemplate);