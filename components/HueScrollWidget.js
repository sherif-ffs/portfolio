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
                <input type='range' value='200' min='0' max='260' class="brand-hue-input">
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