function solution(nums) {
    let answer = 0;
    
    
    let myBag = new Map();

    //forEach 메서드를 사용하여 nums라는 배열을 반복
    nums.forEach((monster) => {
        if(myBag.get(monster)) myBag.set(monster, myBag.get(monster) + 1);//해당 키가 이미 존재한다면, 해당 키와 연결된 값을 1 증가
        else myBag.set(monster, 1);//그렇지 않으면, 새로운 키-값 쌍을 맵에 추가하며 "monster"를 키로 하고 값으로 1을 설정
    });
    
    //폰켓몬의 종류가 N/2 보다 크면, 최댓값인 N/2가 정답.
    //폰켓몬의 종류가 N/2 보다 작다면, 최댓값은 폰켓몬 종류의 수가 됨.
    if(myBag.size < nums.length / 2) answer = myBag.size;
    else answer = nums.length / 2;
    
    return answer;
}