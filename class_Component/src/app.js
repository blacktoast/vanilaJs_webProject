import Items from "./Components/items.js";
import Component from "./core/component.js";

export default class App extends Component {
  constructor() {
    super();
  }
  test() {}
  setup() {
    this.$state = { num: 1 };
  }
  static get observedAttributes() {}

  reRender() {
    document
      .querySelector("main-app")
      .insertAdjacentHTML("beforeend", "<item-list></item-list>");
  }
  template() {
    let { num } = this.$state;
    console.log(num);
    return `
    <test-list></test-list>
    <h1>hi</h1>
${[...Array(num)].map(() => `<item-list></item-list>`).join("")}
  <button class="list-add">list add</button>
      `;
  }
  setEvent() {
    this.addEventListener("click", ({ target }) => {
      if (target.classList.contains("list-add")) {
        const { num } = this.$state;
        this.setState({ num: num + 1 });
      }
    });
  }
}
customElements.define("main-app", App);

let main = document.querySelector("#app");
main.innerHTML = `<main-app>`;
