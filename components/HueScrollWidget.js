class HueScrollWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <link href="./components/buttonWidget.css" rel="stylesheet"></link>
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

      <section class="buttons">
        <div class="border-one">
        <div class="border-two">
          <div class="border-three">
            <div class="border-four">
              <div class="content input-wrapper">
                <form class="toggle-theme">
                  <div>
                      <input checked type="radio" id="light" name="theme" value="light" class="radio-input">
                    </div>
                    <div>
                    <input type="radio" id="dim" name="theme" value="dim" class="radio-input">
                  </div>
                  <div>
                    <input type="radio" id="dark" name="theme" value="dark" class="radio-input">
                  </div>
                </form>
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