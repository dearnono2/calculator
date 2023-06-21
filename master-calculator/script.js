const btn = document.querySelectorAll("button");

let prevValue = "";
let nextValue = "";
let currentValue;

let cal = "";

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
      value;
    }

    if (type === "equal") {
      result(value);
    }
  });
});

function number(v) {
  if (currentValue === undefined) {
    currentValue = "";
  }
  currentValue += v;

  console.log(currentValue);
}

function operator(v) {
  // 만약 첫 입력이 연산자면? => 무시
  // 만약 숫자가 입력된 후 연산자를 입력하면? => current 값을 prevValue에 옮겨준다.
  // 만약 nextValue값이 없다면? => 연산 안함.
  // 연산자를 연속으로 두번 입력하면? => 가장 최근에 입력한 연산자로 바꿔준다.
  // 만약 prevValue에 값이 있고 연산자가 입력된다면? 그 후에 입력되는 숫자는 nextValue에 저장

  // 만약 첫입력이 연산자라면?
  if (currentValue === undefined) {
    console.log("첫입력이 연산자");

    // 첫 입력이 연산자가 아니라면
  } else {
    const checkDoubleOperator = currentValue[currentValue.length - 1];

    prevValue = currentValue;

    // 만약 이전값이 있다면?
    if (prevValue !== undefined) {
      currentValue = prevValue + v;
      console.log("prev값 있음");

      // 이전값이 없다면?
    } else {
      currentValue += v;
      console.log("prev값 없음");
    }

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
      switch (v) {
        case "+":
          prevValue = currentValue + nextValue;
          break;
        case "-":
          prevValue = currentValue - nextValue;
          break;
        case "*":
          prevValue = currentValue * nextValue;
          break;
        case "/":
          prevValue = currentValue / nextValue;
          break;
      }
    }

    console.log(currentValue);
  }

  // console.log(cal);

  // 연산자가 들어오면 즉시, 지금까지 입력되었던 숫자값이 prevValue로 들어감.
  // 만약 바로 앞 문자가 연산자라면 연속되는 두번째 연산자는 무시
}

function result(v) {
  if (prevValue !== undefined) {
    prevValue = eval(currentValue);
    currentValue = prevValue;
  }
  console.log(prevValue);
}
