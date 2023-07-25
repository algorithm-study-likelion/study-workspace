function solution(array, commands) {
    const answer = [];
    for (let i = 0; i < commands.length; i++) {
        const [start, end, k] = commands[i];
        const slicedArray = array.slice(start - 1, end); 
        const sortedArray = slicedArray.sort((a, b) => a - b); 
        answer.push(sortedArray[k - 1]); 
    }
    return answer;
}