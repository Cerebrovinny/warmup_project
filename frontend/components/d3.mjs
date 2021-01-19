class GreenCoffee extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <h1>Green Coffee project</h1>
        `;
    }
}
customElements.define(`green-coffee`, GreenCoffee);