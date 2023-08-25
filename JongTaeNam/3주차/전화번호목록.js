//[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/42577)
function solution(phone_book) {
  const sortArr = phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (sortArr[i] === sortArr[i + 1].slice(0, sortArr[i].length)) {
      return false;
    }
  }
  return true;
}
