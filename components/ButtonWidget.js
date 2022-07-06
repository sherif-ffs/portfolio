class ButtonWidget extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <link href="./components/buttonWidget.css" rel="stylesheet"></link>
      <section class="buttons">
        <div class="second-border">
          <div class="third-border">
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
      </section>
    `;
  }
}

customElements.define('button-widget', ButtonWidget);