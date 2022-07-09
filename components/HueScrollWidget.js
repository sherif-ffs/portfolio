class HueScrollWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <section>
      <div class="border-one">
        <div class="border-two">
          <div class="border-three">
            <div class="border-four">
              <div class="content input-wrapper">
                <input type='range' value='200' min='0' max='260' class="brand-hue-input" aria-label="hue-slider" tabindex=0 role="slider">
              </div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      </section>
    `;
  }
}

customElements.define('hue-scroll-widget', HueScrollWidget);