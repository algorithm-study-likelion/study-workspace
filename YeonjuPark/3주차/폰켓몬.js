//[문제링크] https://school.programmers.co.kr/learn/courses/30/lessons/1845

풀이1 
function solution(nums) {
    const countMap = new Map();
    //countMap이라는 해시맵 객체를 생성 폰켓몬 종류 번호를 키로 사용하고, 해당 종류의 개수를 값으로 저장할 것 
    for (const num of nums) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    } 
    //nums 배열을 순회 num은 현재 순회 중인 폰켓몬의 종류 번호를 나타냄, countMap에서 해당 종류의 개수를 가져오거나, 종류가 처음 나타나는 것이라면 0으로 초기화, 그리고 가져온 값에 1을 더하여 해당 종류의 개수를 업데이트
    const maxCount = nums.length / 2; //가져갈 수 있는 폰켓몬의 최대 개수를 전체 폰켓몬 개수를 2로 나눈 것
    return Math.min(countMap.size, maxCount); //countMap의 크기(서로 다른 폰켓몬의 종류 개수와 최대개수(maxCount)중에서 작은 값을 선택하여 종류의 최대 개수를 계산

}

풀이2
function solution(nums) {
	let max = nums.length/2;
	let setArr = [ ...new Set(nums)];
	if(setArr.length > max) return max;
	return setArr.length;
}