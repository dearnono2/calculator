// screen
const screen = document.querySelector(".screen p");

// selectors
const numBtn = document.querySelectorAll(".number");
const operBtn = document.querySelectorAll(".operator");

const clear = document.querySelector("#allClear");
const del = document.querySelector("#delete");
const decimal = document.querySelector("#decimal");
const equal = document.querySelector("#equal");

// variables for calculating
let prevValue = 0;
let nextValue = 0;

screen.textContent = 0;

numBtn.forEach((v) => {
  v.addEventListener("click", (e) => {
    prevValue += e.target.value;

    // 0다음에 자연수 못오게 하기 && 숫자 다음에 0은 가능.
    if (
      screen.textContent[screen.textContent.length - 1] > 0 ||
      typeof screen.textContent[screen.textContent.length - 1] !== "number"
    ) {
      screen.textContent += e.target.value;
    }
    if (screen.textContent[0] === "0") {
      screen.textContent = "";
      screen.textContent += e.target.value;
    } else {
      if (screen.textContent[screen.textContent.length - 1] === "0") {
        console.log("its 0");
      }
    }
  });
});

operBtn.forEach((v) => {
  v.addEventListener("click", (e) => {
    console.log(e.target.value);
    screen.textContent += e.target.value;
  });
});

// delete
del.addEventListener("click", (e) => {
  console.log(e.target.value);
  if (
    // text값이 0이거나 값이 없게되면 0을 초기화 시키기
    screen.textContent.length === 1
  ) {
    screen.textContent = 0;
  } else if (
    screen.textContent.length === 1 &&
    screen.textContent[screen.textContent.length - 1] === "0"
  ) {
    screen.textContent = 0;
  } else {
    screen.textContent = screen.textContent.slice(
      0,
      screen.textContent.length - 1
    );
  }
});

// all clear
clear.addEventListener("click", (e) => {
  console.log(e.target.value);
  screen.textContent = 0;
});

//  decimal point
decimal.addEventListener("click", (e) => {
  console.log(e.target.value);
  screen.textContent += e.target.value;
});

equal.addEventListener("click", (e) => {
  console.log(e.target.value);
  screen.textContent = eval(screen.textContent);
});

// decimal, 연산자 연속입력 막기 미완성
