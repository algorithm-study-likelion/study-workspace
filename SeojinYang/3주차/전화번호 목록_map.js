function solution(phoneBook) {
    let answer = true;
    phoneBook.map((value, index)=>{
				//phoneBook 배열의 각 항목을 반복하면서, 현재 항목의 값을 value, 인덱스를 index로 받아옵니다.
        phoneBook.map((value2, index2)=>{
					//중첩된 phoneBook 배열의 각 항목을 다시 반복하면서, 현재 항목의 값을 value2, 인덱스를 index2로 받아옵니다.
            if(value.indexOf(value2) == 0 && index != index2){
							//if 문에서는 현재 항목 value2가 접두사로 value에 포함되어 있고, 인덱스가 서로 다른 경우에 answer를 false로 변경합니다. 

                answer = false;
            }
        })
    })
    return answer;
}