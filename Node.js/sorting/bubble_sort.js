/*
bubble sort has runtime O(N^2)

*/


function swap(arr,index_1,index_2){
    let temp = arr[index_1]
    arr[index_1] = arr[index_2]
    arr[index_2] = temp
    return arr
}

function bubble_sort(arr){
    for(let i = 0 ; i < arr.length ; i ++){
        for(let j = 0 ; j < arr.length-i-1; j++){
            if(arr[j] > arr[j+1]){
                arr = swap(arr,j, j+1)
            }
        }
    }
    return arr
}

let nums = [5, 2, 9, 1, 5, 6]
console.log(bubble_sort(nums))