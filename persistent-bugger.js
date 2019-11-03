/*
 persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
                       // and 4 has only one digit

 persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
                        // 1*2*6 = 12, and finally 1*2 = 2

 persistence(4) === 0 // because 4 is already a one-digit number
*/

const BenchMark = require('./speed-library')
let total = 0

function persistence(num) {

    //mysolution
  let string = String(num)
  if(string.length == 1){
    let duplicate = total
    total = 0 
    return duplicate
  } else {
    let split = string.split('')
    let ok = split.reduce((acc,cur) => acc*cur,1)
    total += 1
    return persistence(ok)
  }

//   //best solution #1
//   var times = 0;
   
//    num = num.toString();
   
//    while (num.length > 1) {
//      times++;
//      num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//    }
   
//    return times;

//    //best solution #2
//    return `${num}`.length > 1 ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) : 0;
}

function main(param){
    BenchMark(persistence(param))
}

main(39) //3
main(999) //4
main(4) //0
