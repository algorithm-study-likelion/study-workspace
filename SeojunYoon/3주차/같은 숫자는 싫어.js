function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] !== arr[i - 1]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

const arr1 = [1, 1, 3, 3, 0, 1, 1];
const arr2 = [4, 4, 4, 3, 3];

console.log(solution(arr1)); // [1, 3, 0, 1]
console.log(solution(arr2)); // [4, 3]
