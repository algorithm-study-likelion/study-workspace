// https://school.programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    // [[2,5,3],
    // [2,5,3],
    // [2,5,3]]
        let answer = [];
        for(let i = 0; i<commands.length; i++){
            let list = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=>{return a-b});
            answer.push(list[commands[i][2]-1])
        }
        return answer;
    }