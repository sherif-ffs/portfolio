const ThemeToggleTemplate = document.createElement('template');

ThemeToggleTemplate.innerHTML =
  `
  <link href="../global.css" rel="stylesheet"></link>
  <link href="./components/themeToggle.css" rel="stylesheet"></link>
  <section class="buttons">
  <div class="border-one">
  <div class="border-two">
    <div class="border-three">
      <div class="border-four">
        <div class="content input-wrapper">
          <form class="toggle-theme">
            <div>
                <input checked type="radio" id="light" name="theme" value="light" class="radio-input" aria-label="radio-button-light-theme" tabindex=0>
              </div>
              <div>
              <input type="radio" id="dim" name="theme" value="dim" class="radio-input" aria-label="radio-button-dim-theme" tabindex=0>
            </div>
            <div>
              <input type="radio" id="dark" name="theme" value="dark" class="radio-input" aria-label="radio-button-dark-theme" tabindex=0>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  </div>
</section>
`

class ThemeToggle extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(ThemeToggleTemplate.content);
  }
}

customElements.define('theme-toggle', ThemeToggle);