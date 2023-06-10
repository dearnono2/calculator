const btns = document.querySelectorAll("button");
let screenText = document.querySelector(".screen p");
let screenTextValue = document.querySelector(".screen p").value;
screenTextValue = '';

function takeValue(v) {
  let a = screenTextValue += v;
  let b = screenText.innerHTML = a;
  return b;
}

function clearInput(v) {
  if(v === 'ac') {
    const ac = screenTextValue = '';
    return screenText.innerHTML = ac;
  } else {
    const de = screenTextValue.slice(0, screenTextValue.length-1);
    return screenText.innerHTML = de;

  }
  
  
  
}

function calculatorResult(v) {
  // let result = new Function(a, b)
  let result = eval(screenTextValue); // eval함수는 보안 문제로 지양해야 한다.
  screenText.innerHTML = result;
}

btns.forEach((v, i) => {
  v.addEventListener("click", (e) => {
    const target = e.target.value; // 클릭한 계산기 버튼의 값
    console.log(target);

    if(target === 'ac' || target === 'de') {
      console.log('clear');
      clearInput(target); // 클릭하면 값이 빈값이 되게 하는 함수
    } else if (target === '=') {
      calculatorResult();
    } else {
      takeValue(target); // 클릭한 값들을 (문자열)더해주는 함수.
    }

  });
});

// console.log(document.querySelector(".screen p"));



/*
1.우선 비효율적이더라도 
2.비슷한 것끼리 묶기
*/