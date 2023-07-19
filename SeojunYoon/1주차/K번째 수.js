//문제 링크 : https://school.programmers.co.kr/learn/courses/30/lessons/42748
function solution(array, commands) {
  return commands.map(([start, end, k]) => {
    const answer = array.slice(start - 1, end);
    answer.sort((a, b) => a - b);
    return answer[k - 1];
  });
}
