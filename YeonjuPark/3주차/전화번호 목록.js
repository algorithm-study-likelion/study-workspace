//[문제링크]https://school.programmers.co.kr/learn/courses/30/lessons/42577

function solution(phone_book) {
    const phoneMap = new Map(); //해시맵 생성  
    
    for (const phoneNumber of phone_book) { //배열을 순회하며 전화번호를 해시맵에 저장
        phoneMap.set(phoneNumber, true); //전화번호를 키로 사용, 값은 true로 저장하여 전화번호가 존재하는지 여부 표시 
    }
    //phone_book배열을 다시 순회하며 각 전화번호의 접두어 여부를 확인    
    for (const phoneNumber of phone_book) { 
        for (let i = 1; i < phoneNumber.length; i++) {
            if (phoneMap.has(phoneNumber.slice(0, i))) { 
                return false;
    //has로 특정키가 있는지 확인 slice 처음 인덱스부터 i-1까지 확인 부분 문자열을 키로 사용하여 키 존재 확인, phoneMap해시맵에 부분 문자열이 존재한다면 해당 전화번호는 다른 전화번호의 접두어 이므로 false 반환
            }
        }
    }
    return true; //모든 전화번호의 접두어를 확인한 후 접두어가 없는 경우는 true를 반환
}