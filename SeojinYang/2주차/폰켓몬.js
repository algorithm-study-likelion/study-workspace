function solution(nums) {
    var answer = 0;
    const pick = nums.length/2; //  N/2개만큼의 길이([1,2,3,4,5,6]->3)
    const unique = [...new Set(nums)]  //중복되지않는 배열요소만 남겨두기[2,2,3,3,4,4]->[2,3,4]

// n/2마리 선택 개수보다 중복되지 않은 배열 요소의 길이가 길면 → n/2마리 선택 개수 리턴
//중복되지 않은 배열 요소의 길이가 더 짧으면 → 그 배열 요소의 길이 리턴
//[2,2,3,3,4,5]-> 3(n/2개수) <= 4(중복되지 않은 개수) ->3(최대 n/2개)
// [2,2,3,3,3,3]-> 3(n/2개수) >= 2(중복되지 않은 개수) ->2(중복되지 않은 개수=배열요소 길이)
  if(unique.length >= pick) { //
        return pick;
    }else {
        return unique.length;
    }
}