// const pt = {};
// pt.x = 3;
// 이게 보통의 자바스크립트라면 됐을 코드인데 타입스크립트는 똑똑하게 막아버린다.
// 따라서 애초에 이렇게 할거면 아래와 같이 코드를 작성하도록 하자.

const pt = {
  x: 3,
  y: 3,
}

//참고로 안전한 타입으로 속성을 추가하려면 객체 전개를 사용하면 된다.
//다음과 같이 {...a, ...b} 이렇게 작성하면 된다.