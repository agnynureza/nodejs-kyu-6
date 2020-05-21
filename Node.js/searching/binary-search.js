/*
- untuk data yang sudah di sorted lebih pakai binary search 
1. mencari nilai data tengah 
2. apakah yg dicari itu lebih besar atau lebih kecil 
3. balik ke step 1

time complexity 
O(log N)
misal ada 64 element, cmn yang di sortinya ada 6 kali 
log 64 = 6

*/

//recursive binary 
// function binary_search(arr, left_index, right_index,target){
//     // console.log(left_index)
//     // console.log(right_index)
//     // console.log('============')
//     if (left_index > right_index){
//         return 'value not found'
//     }
//     mid_index = Math.floor((left_index + right_index) / 2)
//     mid_value = arr[mid_index]

//     if (mid_value == target){
//         return mid_index 
//     }
//     if(target > mid_value){
//       return binary_search(arr,mid_index+1 ,right_index, target)
//     }else{
//        return binary_search(arr,left_index,mid_index-1,target)
//     }
//  }


function binary_search(arr,target){
    let left_target = 0 
    let right_target = arr.length
    while(left_target < right_target){
        let mid_index = Math.floor((left_target + right_target)/2)
        let mid_value = arr[mid_index]
        if(mid_value == target){
            return mid_index
        }

        if(target < mid_value){
            right_target = mid_index
        }

        if(target > mid_value){
            left_target = mid_index + 1
        }
    }
    return "Value not in list"
}



let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let start = 0
let end =  arr.length
console.log(binary_search(arr,3))