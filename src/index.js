let a = { a: 1 };
let b = { ...a };
let c = () => {
  console.log(1);
  for (const value of [1, 2, 3].entries()) {
    console.log(value);
  }
};
