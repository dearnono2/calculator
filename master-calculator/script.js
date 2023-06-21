const btn = document.querySelectorAll("button");
const screen = document.querySelector(".screen p");

let prevValue = "";
let nextValue = "";
let currentValue;

btn.forEach((v, i) => {
  v.addEventListener("click", (e) => {
    let type = e.target.dataset.type;
    let value = e.target.value;

    if (type === "number") {
      number(value);
    }

    if (type === "operator") {
      operator(value);
    }

    if (type === "delete" || type === "clear") {
      erase(value);
    }

    if (type === "equal") {
      result(value);
    }

    // 아무런 값이 입력되지 않은 상태일 때 화면
    if (currentValue === undefined) {
      screen.innerHTML = "";

      // 값이 입력된 상태일 때 화면
    } else {
      screen.innerHTML = currentValue;
    }
    // console.log(currentValue);
  });
});

// 숫자 입력 함수
function number(v) {
  if (currentValue === undefined) {
    currentValue = "";
  }
  currentValue += v;
}

// 연산자 입력 함수
function operator(v) {
  // 만약 첫입력이 연산자라면?
  if (currentValue === undefined) {
    console.log("첫입력이 연산자");

    // 첫 입력이 연산자가 아니라면
  } else {
    let checkDoubleOperator = currentValue[currentValue.length - 1];

    prevValue = currentValue;

    // 만약 이전 값이 있다면?
    if (prevValue !== undefined) {
      console.log("prev값 있음");
      // 만약 연산자를 연속 입력 한다면?
      if (
        checkDoubleOperator === "+" ||
        checkDoubleOperator === "-" ||
        checkDoubleOperator === "*" ||
        checkDoubleOperator === "/"
      ) {
        currentValue = currentValue.replace(checkDoubleOperator, v);
        console.log("연속임");
      } else {
        currentValue = prevValue + v;
      }

      // 이전 값이 없다면?
    } else {
      currentValue += v;
      console.log("prev값 없음");
    }

    // console.log(currentValue);
  }
}

// 지우기, clear 전체 지우기 함수
function erase(v) {
  console.log(v);
  if (v === "de") {
    currentValue += "";
    currentValue = currentValue.slice(0, -1);
  }
  if (v === "ac") {
    currentValue = undefined;
  }
}

// 결과 함수
function result(v) {
  if (prevValue !== undefined) {
    prevValue = eval(currentValue);
    currentValue = prevValue;
  }
  // console.log(prevValue);
}

//
//
//
//
// 만약 첫 입력이 연산자면? => 무시
// 만약 숫자가 입력된 후 연산자를 입력하면? => current 값을 prevValue에 옮겨준다.
// 만약 nextValue값이 없다면? => 연산 안함.
// 연산자를 연속으로 두번 입력하면? => 가장 최근에 입력한 연산자로 바꿔준다.
// 만약 prevValue에 값이 있고 연산자가 입력된다면? 그 후에 입력되는 숫자는 nextValue에 저장

// else {
//   switch (v) {
//     case "+":
//       prevValue = currentValue + nextValue;
//       break;
//     case "-":
//       prevValue = currentValue - nextValue;
//       break;
//     case "*":
//       prevValue = currentValue * nextValue;
//       break;
//     case "/":
//       prevValue = currentValue / nextValue;
//       break;
//   }
// }
