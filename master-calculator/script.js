const btn = document.querySelectorAll("button");

let prevValue = [];
let nextValue = [];
let currentValue = [];

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
      value;
    }
  });
});

function number(v) {
  cal += v;
  console.log(cal);
}

function operator(v) {
  const checkDoubleOperator = cal[cal.length - 1];

  if (
    checkDoubleOperator === "+" ||
    checkDoubleOperator === "-" ||
    checkDoubleOperator === "*" ||
    checkDoubleOperator === "/"
  ) {
    cal = cal.replace(checkDoubleOperator, v);
    console.log("연속임");
  } else if (cal === "") {
    cal = cal;
    console.log("연산자가 처음임");
  } else {
    prevValue.push(cal);
    cal += v;
    console.log("연속 아님");
  }

  console.log(cal);

  // 연산자가 들어오면 즉시, 지금까지 입력되었던 숫자값이 prevValue로 들어감.
  // 만약 바로 앞 문자가 연산자라면 연속되는 두번째 연산자는 무시
  switch (v) {
    case "+":
      prevValue = prevValue[0] + v;
    case "-":
      prevValue = prevValue[0] - v;
    case "*":
      prevValue = prevValue[0] * v;
    case "/":
      prevValue = prevValue[0] / v;
  }
}

function result(v) {
  prevValue = resultValue;
}
