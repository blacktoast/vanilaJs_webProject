export default class Component extends HTMLElement {
  $target;
  $state;
  constructor($target) {
    super();
    this.$target = $target;
    this.setup();
    this.render();
  }
  setup() {}
  template() {
    return "";
  }
  render() {
    this.innerHTML = this.template();
  }
  setEvent() {}
  setState(newState) {
    console.log(newState);
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
