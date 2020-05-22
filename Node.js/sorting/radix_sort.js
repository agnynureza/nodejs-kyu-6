/*
radix = base number system 
O(wN)
kita anggap constan untuk W nya dengan nilai N yang sangat besar
jadi time complexitynya O(N)
*/

function radix_sort(arr){
    let max = Math.max(...arr)
    let maxDigit = String(max).length
  
    for(let j = 0 ; j<maxDigit ; j++ ){
        let position = j + 1
        let index = maxDigit - position

        //create bucket 
        let bucket = []
        for(let i = 0; i< 10 ; i++){
            bucket.push([])
        }

        for(let i = 0 ; i < arr.length ; i++){
            let str = String(arr[i])
            bucket[str[index]].push(arr[i])
        }
    
        //reassign 
        arr = []
        for(let i = 0 ;  i < bucket.length ; i++){
            arr = arr.concat(bucket[i])
        }
    }
    return arr
}

let num = [2010,2019,2743,2983,2018]
radix_sort(num)