class NameWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <link href="./components/widget.css" rel="stylesheet"></link>
      <section class="wrapper">
        <div class="border-one">
          <div class="border-two">
            <div class="border-three">
              <div class="border-four">
                <h3>Sherif Elmetwally</h3>
              </div>
            </div>
          </div>
        </div>

        <div class="about-block">
          <div class="border-one">
            <div class="border-two">
              <div class="border-three">
                <div class="border-four">
                  <p>
                    I’m Sherif.
                    I create things for the web.
                  </p>
                  <a href="projects.html">More -></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('name-widget', NameWidget);