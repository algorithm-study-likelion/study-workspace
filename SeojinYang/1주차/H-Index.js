// https://school.programmers.co.kr/learn/courses/30/lessons/42747
function solution(citations) {
    let answer = 0;
    citations.sort((a,b)=>{ return b-a});
    for(let i=0; i<citations.length; i++){
        if(citations[i]<=i+1){
            answer++;
        }
    }
    return answer;
}
