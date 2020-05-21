/*
- The time complexity for linear search in its best case is O(1).
- The time complexity for linear search in its worst case is O(N).

linear search O(N)
x = number of element 
y = number of comparisons 
gradiennya linear O(N)

linear search => algoritma pencarian , mencari sesuatu secara berurutan  scanning element satu2 setiap indexnya 

good for :
1. expect position dekat dengan yang dicari
2. bagus untuk yg unsorted , soalnya kan di mencari dari awal sampe akhir , terlepas dari urutannya 
*/

// let linear_search = (arr,target)=>{
//     for(let i = 0 ; i < arr.length ;i++){
//         if(arr[i] === target){
//             return i
//         }
//     }
//     return 'data not in the list'
// }




//find duplicate 
// let linear_search = (arr,target)=>{
//     let temp = []
//     for(let i = 0 ; i < arr.length ;i++){
//         if(arr[i] === target){
//             temp.push(i)
//         }
//     }
//     if(temp.length > 1){
//         return temp
//     }
//     return 'data not in the list'
// }


//finding maximum vlaue 
let linear_search = (arr)=>{
    let max = arr[0]
    let min = arr[0]
    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return {max,min}
}


console.log(linear_search([88, 93, 75, 100, 80, 67, 71, 92, 90, 83]))
//console.log(linear_search([-1, -1, -1, -2, -1, -1, -1, -1, -1, -1]))