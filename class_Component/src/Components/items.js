import Component from "../core/component.js";

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
      <button class="addBtn">추가</button>
    `;
  }

  setEvent() {
    // 모든 이벤트를 this.$target에 등록하여 사용하면 된다.
    this.addEvent("click", ".addBtn", ({ target }) => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
    });
  }
}
