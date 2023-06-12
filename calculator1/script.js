const btns = document.querySelectorAll("button");
let screenText = document.querySelector(".screen p");
let screenTextValue = document.querySelector(".screen p").value;
screenTextValue = "";

function calculator(v) {
  if (v === "ac") {
    // 클릭하면 값이 빈값이 되게 하는 코드
    screenTextValue = "";
    screenText.innerHTML = screenTextValue;
  } else if (v === "de") {
    // 클릭하면 값을 한칸씩 지워주는 코드
    screenTextValue = screenTextValue.slice(0, -1);
    screenText.innerHTML = screenTextValue;
  } else if (v === "=") {
    // let result = new Function(a, b)
    let result = eval(screenTextValue); // eval 함수는 보안 문제로 지양해야 한다.
    screenTextValue = result;
    screenText.innerHTML = result;
    console.log(result);
  } else {
    // 클릭한 값들을 (문자열)더해주는 코드.
    let sumValue = (screenTextValue += v);
    let b = (screenText.innerHTML = sumValue);
  }
}

btns.forEach((v, i) => {
  v.addEventListener("click", (e) => {
    const target = e.target.value; // 클릭한 계산기 버튼의 값
    console.log(target);

    calculator(target);
  });
});
