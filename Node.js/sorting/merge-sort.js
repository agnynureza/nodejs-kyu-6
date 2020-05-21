/*
merge sort unique , worst and avg same complexity 
O(N*log(N))
*/

function merge_sort(arr){
    if(arr.length <= 1){
        return arr
    }
    let mid_index = Math.floor(arr.length/2)
    let left_split = arr.slice(0,mid_index)
    let right_split = arr.slice(mid_index,arr.length)
    let left_sorted = merge_sort(left_split) 
    let right_sorted = merge_sort(right_split)
    return merge(left_sorted, right_sorted)
}

function merge(left,right){
    let result = []
    while(left.length > 0 && right.length > 0){
        if(left[0]>right[0]){
            result.push(right[0])
            right.shift()
        }else{
            result.push(left[0])
            left.shift()
        }
    }
    if(left.length > 0){
        result = result.concat(left)
    }else{
        result = result.concat(right)
    }
    return result
}

unordered_list1 = [356, 746, 264, 569, 949, 895, 125, 455]
unordered_list2 = [787, 677, 391, 318, 543, 717, 180, 113, 795, 19, 202, 534, 201, 370, 276, 975, 403, 624, 770, 595, 571, 268, 373]
unordered_list3 = [860, 380, 151, 585, 743, 542, 147, 820, 439, 865, 924, 387]

console.log(merge_sort([5, 9, 2, 1, 5, 6]))
// console.log(merge_sort(unordered_list1))
// console.log(merge_sort(unordered_list2))
// console.log(merge_sort(unordered_list3))
