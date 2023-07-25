function solution(numbers) {
    var answer = numbers.map(String).sort((a, b) => (b + a) - (a + b));
    if (answer[0] === '0' ) return "0";
    return answer.join('');    
}
