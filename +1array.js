const BenhMark = require('./speed-library')

function upArray(arr){
    //my solution
    // if(arr.length == 0){
    //   return null
    // }
    
    // for(let i = 0 ; i< arr.length ; i++){
    //   if(arr[i] < 0){
    //     return null
    //   }
    //   if(String(arr[i]).length > 1){
    //     return null
    //   }
    // }
    
    
    // let ok = arr.join('')
    // let temp = []
    // if(ok.length > 18){
    //   for(let i = 0 ; i < ok.length ;i++){
    //     if(ok.length -1 == i){
    //       temp.push(+(ok)[i] + 1)
    //     }else{
    //       temp.push(+ok[i])
    //     }
    //   }
    // }else{
    //   let string = String(Number(ok)+ 1)
    //   for(let i = 0 ; i < string.length ; i++){
    //     temp.push(+string[i])
    //   }
    // }
    // return temp

    //best solution #1
    // if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
    //     return null;
    // }

    // for (var i = 0; i < arr.length; i++) {
    //     if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
    //         return null;
    //     }
    // }
    // // if its 9 and more than one digit we have to check all previous digits
    // // whether they are also a 9
    // for (var j = arr.length - 1; j > -1; j--) {

    //     if (arr[j] !== 9) {
    //         arr[j] = arr[j] + 1;
    //         break;
    //     } else {
    //         arr[j] = 0;
    //     }

    //     if (j === 0) {
    //         arr.unshift(1);
    //     }
    // }


    // return arr;

    if( !arr.length || arr.some(function(v){return v<0||v>9}) ) return null;
    var inc=1, len=arr.length, v;
    while( v=arr[--len]+inc ){
      arr[len]=v%10;
      inc=~~(v/10)
    }
    return inc? [inc].concat(arr) : arr
}

function main(param){
    BenhMark(upArray(param))
}

main([5, 7, 5])
main([9,9,9])
main([2, 1, 4, 7, 4, 8, 3, 6, 4, 8])