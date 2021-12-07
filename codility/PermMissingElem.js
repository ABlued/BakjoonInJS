// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/trainingNQ262P-G49/
function solution(A) {
  let array = new Array(A.length + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    array[A[i] - 1] = 1;
  }
  return array.indexOf(0) + 1;
}

console.log(solution([2, 3, 1, 5]));
// console.log(solution());
