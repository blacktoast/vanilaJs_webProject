import Component from "../core/component.js";

export default class Item extends Component {
  $state;
  constructor() {
    super();
    this.setup();
    console.log("item:  ", this);
    this.innerHTML = this.template();
    console.log("con");
  }
  static get observedAttributes() {
    // 모니터링 할 속성 이름
    return ["item"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.$props = { [name]: newValue };
  }
  setup() {}
  template() {
    return `
     <li>${this.$props}</li>
    `;
  }
}

customElements.define("item-item", Item);
