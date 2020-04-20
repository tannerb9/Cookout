const hamburger = {
  name: "Hamburger",
  type: "beef",
  cooked: false,
};
const zucchini = {
  name: "Zucchini",
  type: "vegetable",
  cooked: false,
};
const chickenBreast = {
  name: "Chicken Breast",
  type: "chicken",
  cooked: false,
};
const corn = {
  name: "Corn",
  type: "vegetable",
  cooked: false,
};
const steak = {
  name: "Steak",
  type: "beef",
  cooked: false,
};

const foods = [hamburger, zucchini, chickenBreast, corn, steak];
const cookedFood = [];

function grill(currentObject) {
  currentObject.cooked = true;
  cookedFood.push(currentObject);
}

// // Your task is to iterate over the array of foods and invoke the function for each
// // item so that the cookedFood array contains all of the items after they are cooked.

for (let item of foods) {
  grill(item);
}
