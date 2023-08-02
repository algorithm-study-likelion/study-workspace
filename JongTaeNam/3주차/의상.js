//[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42578)
function solution(clothes) {
  const myMap = new Map();
  let number = 1;
  for (item of clothes) {
    if (myMap.get(item[1])) {
      myMap.set(item[1], [...myMap.get(item[1]), item]);
    } else {
      myMap.set(item[1], [item]);
    }
  }

  for (const value of myMap) {
    number *= value[1].length + 1;
  }
  return number - 1;
}
