//[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42746)
function solution(numbers) {
  let answer = numbers
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join("");
  if (!Number(answer)) return "0";
  return answer;
}
