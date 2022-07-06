class CircleScrollWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <section>
        <div class="second-border">
          <div class="third-border">
            <div class="content input-wrapper">
            <input type='range' value='15' min='3' max='75' class="slider size-one-slider">
            <input type='range' value='15' min='3' max='75' class="slider size-two-slider">
          </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('circle-scroll-widget', CircleScrollWidget);