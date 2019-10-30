const benchMark = require("./speedLIbrary")

function findUniq(arr) {
   //mysolution
   for(let i = 0 ; i< arr.length ; i ++){
    let oke = arr[i]
    let count = 0 
    for(let j = 0 ; j < arr.length ; j++){
      if(oke == arr[j]){
        count++
      }
      if(count > 1){
        break
      }
    }
    if(count == 1){
      return oke
    }
  }

    //best solution #1
    arr.sort((a,b)=>a-b);
    return arr[0]==arr[1]?arr.pop():arr[0]

    //best solution #2
    let [a,b,c] = arr.slice(0,3);
    if( a != b && a!=c ){
        return a;
    } 
    for( let x of arr ) {
        if( x!=a ) {
            return x
        }
    }
}
  
function main(param){
    benchMark(findUniq(param))
}

main([ 0, 1, 0 ]) // 1 
main([ 1, 1, 1, 2, 1, 1 ]) // 2
main([ 3, 10, 3, 3, 3 ]) //10