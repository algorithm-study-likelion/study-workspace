function solution(participant, completion) {
    let map= new Map();
  	
  	//(참가자 선수들을 처리하면서 이름과 출전 횟수를 맵에 저장)
    participant.forEach((e)=>{
        map.set(e, map.get(e)+1 || 1);
//get메소드로 현재 선수의 출전 횟수에 1을 더한 값이 존재한다면 그 값을 택, 존재하지 않으면 1을 택
//set메소드로 map에 선수이름 e를 key값, get함수를 통해 계산된 값을 value값으로 설정
    });
  	//(완주한 선수들을 처리하면서 출전 횟수를 감소)
    completion.forEach((e)=>{
        map.set(e, map.get(e)-1);
//get메소드로 현재 선수의 출전 횟수에 1을 뺀 값을 구함
//set메소드로 map에 선수이름 e를 key값, get함수를 통해 계산된 값을 value값으로 설정
    })
  	//완주하지 못한 선수 찾기. vaule값이 0이 아니라면 완주X(출전 횟수가 1인 선수를 찾아서 반환)
    for ([k, v] of map.entries()){
        if(v===1)
            return k;
    }
}
