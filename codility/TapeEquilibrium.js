// 문제 링크( 코딜리티 회원가입 필요) : https://app.codility.com/c/run/trainingYFG4VE-PND/
function solution(A) {
  let result = [];
  let leftSum = 0;
  let rightSum = A.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  for (let i = 0; i < A.length - 1; i++) {
    leftSum += A[i];
    rightSum -= A[i];
    result.push(Math.abs(leftSum - rightSum));
  }
  return Math.min(...result);
}

console.log(solution([3, 1, 2, 4, 3]));
