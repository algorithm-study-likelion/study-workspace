//[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/1845)
function solution(nums) {
  const myMap = new Map();
  for (const num of nums) {
    if (!myMap.get(num)) {
      myMap.set(num, 1);
    }
  }
  if (nums.length / 2 > myMap.size) {
    return myMap.size;
  }
  return nums.length / 2;
}
