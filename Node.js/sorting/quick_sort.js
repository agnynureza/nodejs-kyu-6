/*
*/

function quick_sort(arr,start,end){
    if(start >= end){
        return  
    }
    pivot_index = Math.floor(Math.random()*end)
    pivot_element = arr[pivot_index]

    //Create the lesser_than_pointer
    let lesser_than_pointer = start

    for(let i = start ; i < end ; i++){
        if(arr[i] < pivot_element){
            let temp = arr[lesser_than_pointer]
            arr[lesser_than_pointer] = arr[index]
            arr[index] = temp 
            lesser_than_pointer++
        }
    }
}

let test = [6,5,7,3,9,8,4,2,1]
quick_sort(test, 0 , test.length)