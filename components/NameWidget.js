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
                    I'm a frontend engineer who is also interested in Data Visualization and Product Design.
                  </p>
                  <a href="about.html">More -></a>
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