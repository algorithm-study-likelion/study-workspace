// https://school.programmers.co.kr/learn/courses/30/lessons/42746
function solution(numbers) {
    let answer = '';
    numbers = numbers.map((n)=> n+'') //문자열화
    numbers.sort((a,b)=>(b+a)-(a+b)); //붙여서 내림차순
    answer = numbers.join('');
    
    if(answer[0]==='0'){
        answer = '0';
    }
    return answer;
}