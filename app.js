import Items from "./src/Components/items.js";

export default class App extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = this.template();
  }
  template() {
    return `<test-modal>`;
  }
}
customElements.define("main-app", App);

let main = document.querySelector("#app");
main.innerHTML = `<main-app>x`;
