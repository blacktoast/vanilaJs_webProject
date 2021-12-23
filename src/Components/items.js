import Component from "../core/component.js";

class ComElement {}

customElements.define(
  "item-test",
  class extends HTMLElement {
    constructor() {
      super();

      let te = `<div>test</div>`;
      const t = document.createElement("div");
      t.innerHTML = te;
    }
  }
);

export default class Items extends Component {
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <item-test></item-test>
      <button>추가</button>
    `;
  }

  setEvent() {
    this.$target.querySelector("button").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}
