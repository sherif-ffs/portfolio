const modalTemplate = document.createElement('template');

modalTemplate.innerHTML =
  `
  <link href="./modal.css" rel="stylesheet"></link>
  <section class="modal">
    <h1>Settings</h1>
    <input type='range' value='200' min='0' max='260' class="slider brand-hue-input">
    <form class="toggle-theme">
    <div>
      <input checked type="radio" id="light" name="theme" value="light" class="radio-input">
      <label for="light">Light</label>
    </div>
    <div>
      <input type="radio" id="dark" name="theme" value="dark" class="radio-input">
      <label for="dark">Dark</label>
    </div>
    <div>
      <input type="radio" id="dim" name="theme" value="dim" class="radio-input">
      <label for="dim">Dim</label>
    </div>
  </form>

  <input type='range' value='15' min='3' max='150' class="slider size-one-slider">
  <input type='range' value='15' min='3' max='150' class="slider size-two-slider">

  <button class="play-button">play</button>
  </section>
`

class Modal extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(modalTemplate.content);
  }
}

customElements.define('modal-component', Modal);