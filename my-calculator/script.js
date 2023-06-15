const screen = document.querySelector('.screen p');
// let screenValue = screen.textContent;
let result = '';

const btn = document.querySelectorAll('button');

btn.forEach((v, i) => {
  v.addEventListener('click', (e) => {
    const target = e.target;
    const targetValue = target.value; // 클릭한 버튼의 값

    const targetData = target.dataset.type; // 클릭한 버튼의 데이터 타입

    // 숫자 버튼 클릭 시
    if (targetData === 'number') {
      result += targetValue;

    }
    // 연산자 버튼 클릭 시
    if (targetData === 'operator') {
      const reg = /[+\-*/]/;
      if (result === '') {
        result;
        // 연산자 두번 연속으로 클릭할 경우
      } else if (reg.test(result.slice(-2)) === true) {
        result = result.slice(0, -1) + targetValue;
      } else {
        result += targetValue;
        // carculation =  Number(carculation) + (targetValue);
      }
    }
    // clear 버튼 클릭 시
    if(targetData === 'clear') {
      result = '';
    }
    // delete 버튼 클릭 시
    if(targetData === 'delete') {
      result = result.slice(0, -1);
    }
    // 결과 버튼 클릭 시
    if(targetData === 'equal') {
      result = eval(result);
      // Number(carculation);
    }



    screen.innerText = result;
  })
})

// 오류: result로 계산 결과 값이 나온 후, 곧바로 연산자를 클릭하면 오류가 뜨는 문제 해결 필요!
