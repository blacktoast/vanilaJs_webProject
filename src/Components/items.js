import Component from "../core/component.js";
import Item from "./item.js";

export default class Items extends Component {
  constructor() {
    super();
    console.log("con");
  }
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }

  template() {
    const { items } = this.$state;
    return `
      <ul>
        ${items
          .map((item) => `<item-item item="${item}" name="test"></item-item>`)
          .join("")}
      </ul>
      <button>추가</button>
    `;
  }
  setEvent() {
    this.addEventListener("click", () => {
      console.log(this);
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}

customElements.define("item-list", Items);
