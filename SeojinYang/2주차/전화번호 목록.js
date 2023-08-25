//이중 for문으로 돌아서 첫번쨰 for문은 현재값, 두번쨰 for문은 비교값을 돌아서 두 전화번호를 
//서로 비교
function solution(phoneBook) {
    let result = true; //초기화->중복된 접두사 발견시 false로 변경
     for(let idx in phoneBook){ //첫번째 for문: 번호목록에서 현재값 for문으로 돎
         let phone = phoneBook[idx]; //phone은 현재값
         for (let idx2 in phoneBook){ //두번째 for문:현재값과 비교되는 값에 대한 for문
           if(idx2 !== idx && phone.indexOf(phoneBook[idx2]) === 0) //현재값과 비교값이 
 //다른 인덱스에 위치해있고 && 현재값과 비교되는 값이 indexOf() 0을 반환하면 ->접두사 중복  
              result = false;
         }
     }
 
     return result;
 }