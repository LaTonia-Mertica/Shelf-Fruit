let fruit = [
  "🍎",
  "🍊",
  "🍎",
  "🍎",
  "🍎",
  "🍐",
  "🍎",
  "🍊",
  "🍋",
  "🍉",
  "🍉",
  "🍉",
  "🍉",
  "🍋",
  "🍋"
];

let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");
let pearShelf = document.getElementById("pear-shelf");
let lemonShelf = document.getElementById("lemon-shelf");
let watermelonShelf = document.getElementById("watermelon-shelf");

function sortFruit() {
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "🍎") {
      appleShelf.textContent += "🍎";
    } else if (fruit[i] === "🍊") {
      orangeShelf.textContent += "🍊";
    } else if (fruit[i] === "🍐") {
      pearShelf.textContent += "🍐";
    } else if (fruit[i] === "🍋") {
      lemonShelf.textContent += "🍋";
    } else if (fruit[i] === "🍉") {
      watermelonShelf.textContent += "🍉";
    }
  }
}

sortFruit();
