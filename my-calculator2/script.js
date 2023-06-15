const screen = document.querySelector('.screen p');
const btn = document.querySelectorAll('button');

// let screenValue = screen.textContent;
let result = '';

// 연산자가 클릭되기 전의 값
let prevValue = [];
// 연산자
let operator = [];
// 연산자가 클릭된 후의 값
let nextValue = [];


btn.forEach((v, i) => {
  v.addEventListener('click', (e) => {
    const target = e.target;
    const targetValue = target.value; // 클릭한 버튼의 값

    const targetData = target.dataset.type; // 클릭한 버튼의 데이터 타입

    // 숫자 버튼 클릭 시
    if (targetData === 'number') {

      if(operator[0] !== undefined) {
        nextValue.push(targetValue);
        result = prevValue.join('') + operator + nextValue.join('');
      } else {
        prevValue.push(targetValue);
        result = prevValue.join('');
      }
    }
    // 연산자 버튼 클릭 시
    if (targetData === 'operator') {
      const reg = /[+\-*/]/;
      // 연산자를 클릭하기 전 숫자 값이 없을 경우
      if (prevValue[0] === undefined) {
        result;

        // 연산자 두번 연속으로 클릭할 경우 (연산자 클릭 후 두번째 값이 없는 경우)
      } else if (nextValue[0] === undefined && operator[1] !== undefined) {
        result = result.slice(0, -1) + targetValue;
      } else {
        // result += targetValue;
        operator.push(targetValue);
        result = result + operator;
      }
    }
    // clear 버튼 클릭 시
    if(targetData === 'clear') {
      if(nextValue[0] === undefined) {
        prevValue = [];
        result = prevValue.join('');
      } else {
        nextValue = [];
        result = nextValue.join('');
      }
    }
    // delete 버튼 클릭 시
    if(targetData === 'delete') {
      if(nextValue[0] === undefined) {
        prevValue = prevValue.slice(0, -1)
        result = prevValue.join('');

      } else {
        nextValue = nextValue.slice(0, -1)
        result = nextValue.join('');
      }
      
    }
    // 결과 버튼 클릭 시
    if(targetData === 'equal') {
      // operator를 어떻게 하면 문자열이 아닌 상태로 꺼내올까? eval 함수를 안쓰고 싶다
      // switch 조건문으로 +,-,*,/ 의 경우를 모두 만들면 코드가 길어지는데
      result = eval(prevValue.join('') + operator + Number(nextValue.join('')))
      
      prevValue = [];
      prevValue.push(result);
      operator = [];
      nextValue = [];
      console.log(prevValue, operator, nextValue);

    }



    screen.innerText = result;
  })
})

