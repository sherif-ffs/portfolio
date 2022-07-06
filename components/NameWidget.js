class NameWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <link href="./components/widget.css" rel="stylesheet"></link>
      <section class="wrapper">
        <div class="second-border">
          <div class="third-border">
            <div class="content">
              <h3>Sherif Elmetwally</h3>
              <span>Software Engineer</span>
            </div>
          </div>
        </div>
        <div class="contact">
        <a href="#">Github</a>
        <a href="#">LinkedIn</a>
        <a href="#">Email</a>
      </div>
      </section>
    `;
  }
}

customElements.define('name-widget', NameWidget);