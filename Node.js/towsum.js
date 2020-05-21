function twoSum(numbers, target) {
    for(let i = 0 ; i < numbers.length ;i++){
        for(let j = 0 ; j < numbers.length ; j++){
            if(i != j){
                let temp = numbers[i] + numbers[j]
                if(temp == target){
                    return [i,j]
                }
            }
        }
    }
}

console.log(twoSum([1,2,3], 4)) // [0,2]);
console.log(twoSum([1234,5678,9012], 14690)) // [1,2]);
console.log(twoSum([2,2,3], 4)) // [0,1]);
