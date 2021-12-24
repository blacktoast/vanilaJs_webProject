import Component from "../core/component.js";

export default class Items extends Component {
  $state;
  constructor() {
    super();
    this.setup();
    this.innerHTML = this.template();
    console.log("con");
  }
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  template() {
    const { items } = this.$state;
    return `
      <ul>
        ${items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <button>추가</button>
    `;
  }
  setEvent() {
    this.addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

customElements.define("item-list", Items);
