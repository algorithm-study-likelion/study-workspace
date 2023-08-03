function solution(participant, completion) {
    participant.sort(); //participant 사전순 정렬
    completion.sort(); //completion 사전순 정렬
    let count = 0;
    for(let i=0; i<participant.length; i++){
    if(participant[i] !== completion[i]){ 
		//일치하지 않는 인덱스에 해당하는 선수 이름 리턴
            return participant[i];
        }
        count++;
    }
}
//participant 사전순 정렬, completion 사전순 정렬한 후 두 배열을 비교해서 
//일치하지 않는 인덱스에 해당하는 선수 이름 리턴