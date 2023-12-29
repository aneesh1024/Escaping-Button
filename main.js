const Box1 = document.querySelector(".inner1");
const Box2 = document.querySelector(".inner2");
const Button = document.querySelector("button");
const ResetButton = document.querySelector(".reset");
let sign = ["+", "-"];
let btnText = [
  "Almost got me 😲",
  "Over Here",
  "Oopsie 🤭",
  "Hahahahaha 🤣",
  "Try again",
  "LMAO 😂",
  "LOL",
  "Noob"
];
let flag = false;
let index1 = Math.floor(Math.random() * 2);
let index2 = Math.floor(Math.random() * 2);
let rand = Math.floor(Math.random() * 10);
Button.addEventListener("pointerenter", () => {
  if (!flag) {
    rand = Math.floor(Math.random() * 10);
    index1 = Math.floor(Math.random() * 2);
    index2 = Math.floor(Math.random() * 2);
    Button.innerHTML = btnText[Math.floor(Math.random() * 5)];
    console.log(rand);
    if (rand < 6) {
      console.log(`make rand = ${rand + 10}`);
      rand += 10;
    } else {
      console.log(`let rand be ${rand}`);
    }
    Button.style.transform = `translateX(${sign[index1]}${
      rand == 0 ? rand + 10 : rand
    }rem) translateY(${sign[index2]}${rand == 0 ? rand + 10 : rand}rem)`;
    console.log(
      `translateX(${sign[index1]}${
        rand == 0 ? rand + 10 : rand
      }rem) translateY(${sign[index2]}${rand == 0 ? rand + 10 : rand}rem)`
    );
  }
});

Button.addEventListener("click", () => {
  flag = true;
  Button.innerHTML = "Good Job";
  Button.style.transform = `translateX(0) translateY(0)`;
  Button.style.background = "#22c55e";
});

ResetButton.addEventListener("click", () => {
  Button.style.background = "transparent";
  Button.innerHTML = "Click Me !";
  Button.style.transform = `translateX(0) translateY(0)`;
  flag = false;
});
