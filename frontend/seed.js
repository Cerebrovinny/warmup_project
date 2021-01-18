class MyTitle extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h1>Warm Up Project</h1>
        `;
    }
}
customElements.define(`my-title`, MyTitle);