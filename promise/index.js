class _promise {
  constructor(callback) {
    console.log("test  " + callback);
    const resolve = (v) => {
      this.value = v;
    };
    callback(resolve);
  }
  then(t) {
    t(this.value);
    console.log(this);
    return this;
  }
}

// _promise 생성시 콜백함수를 넣고
let test = new _promise((resolve) => {
  resolve("my resolve");
});
//blog.hyunmin.dev/14 [hyunminblog]
console.log(
  test
    .then((a) => {
      console.log(a);
      return "ts";
    })
    .then((a) => {
      console.log(a);
    })
);
