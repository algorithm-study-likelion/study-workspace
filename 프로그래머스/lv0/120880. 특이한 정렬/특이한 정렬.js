function solution(numlist, n) {
  return numlist.sort((a, b) => {
    // 만약 절대값이 같다면 더 큰 값을 앞에다 두기
    if (Math.abs(a - n) === Math.abs(b - n)) {
      return a < b ? 1 : -1
    }
    // 절대값 차이를 기준으로 오름차순 정렬
    return Math.abs(a - n) - Math.abs(b - n)
  })
}

function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a)
}