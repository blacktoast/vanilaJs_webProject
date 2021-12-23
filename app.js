import Items from "./src/Components/items.js";

class App {
  constructor() {
    const $app = document.querySelector("#app");
    new Items($app);
  }
}

new App();
