//[문제링크]https://school.programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) { //함수정의 clothes라는 매개변수를 받음
    const countMap = new Map(); //countMap라는 해시맵 객체 생성
    
    // 의상의 종류별로 개수를 카운트
    for (const [name, type] of clothes) {
        countMap.set(type, (countMap.get(type) || 0) + 1); 
    //해시맵에 의상의 종류를 키로 사용하고 해당 종류의 의상 개수를 값으로 저장 이미 존재하는 경우 해당 값에 1을 더하고, 존재하지 않으면 0을 대신 사용 가져온 값에 1을 증가 시킴, 각 의상 종류별 개수를 기록하기 위해 해당 값에 1을 더해주는 것

    let answer = 1; //결과를 저장할 변수answer를 1로 초기화 곱셈 연산시 0이 되는 것 방지
    
    //해시맵의 값(의상개수)를 순회하며의상 종류별로 선택하지 않는 경우까지 포함하여 모든 경우의 수 계산
    for (const count of countMap.values()) {
        answer *= (count + 1); 
    }
    //각 의상 종류별로 선택할 수 있는 경우의 수를 모두 곱하여 answer에 저장 +1은 해당 의상을 선택하지 않는 경우를 포함시키기 위함    
  
    return answer - 1; // 모든 경우의 수에서 아무것도 선택하지 않은 경우 1을 빼고 반환
  }
}