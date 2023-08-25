//[문제링크] https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    const participantMap = new Map();
    
    // 참가자 목록을 해시맵에 기록 참가자의 이름을 키로 사용,해당 참가자의 참여 여부를 값으로 저장
    for (const name of participant) {
        participantMap.set(name, (participantMap.get(name) || 0) + 1);
    }
    //participant 배열을 순회하며 각 참가자의 이름을 해시맵에 기록 이미 존재하는 이름은 해당 값에 1을 더하고, 존재하지 않는 경우 0을 사용, 참가자의 등장 횟수를 기록하기 위해 해당 값에 1을 더해줌(동일한 이름의 참가자 고려) 
    
    for (const name of completion) {
        participantMap.set(name, participantMap.get(name) - 1);
    }
    //완주자 목록인 completion 배열을 순회하며 각 완주자의 이름을 해시맵에서 찾아 해당 값에 1을 뺌, 완주한 선수의 경우 해당 값은 0이 된다 

    
    for (const [name, count] of participantMap) {
        if (count === 1) {
            return name;
    // 해시맵을 순회하며 값이 1인 참가자(완주하지 못한 선수) 찾기
        }
    }
}