import Component from "../core/component.js";

export default class Item extends Component {
  $state;
  constructor() {
    super();
    console.log("item:  ", this);
    this.innerHTML = this.template();
    console.log("con");
  }

  setup() {
    console.log("item-setup ", this.$props);
    this.$props = {
      item: "",
    };
  }
  template() {
    console.log("template  ", this.$props);
    return `
     <li>${this.$props.item}</li>
    `;
  }
}

customElements.define("item-item", Item);
