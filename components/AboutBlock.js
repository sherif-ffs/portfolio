class AboutBlock extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
      <section>
        <div class="border-one">
          <div class="border-two">
            <div class="border-three">
              <div class="border-four">
                <div class="contact">
                  <a href="#">Github</a>
                  <a href="#">LinkedIn</a>
                  <a href="#">Email</a>
                </div>
                <p>
                  I'm a frontend engineer who loves design and passionate about generative art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}

customElements.define('about-block', AboutBlock);