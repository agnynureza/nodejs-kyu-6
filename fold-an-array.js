const BenchMark = require('./speed-library')

function foldArray(array, runs){
    //mysolution
    let ok = true
    let newArray = []
    let i = 0
    while(ok){
        if(array.length%2 == 0){//genap
            let floor = Math.floor(array.length/2)
            for(let i = 0 ; i < floor; i++){
                let sum = array[i] + array[array.length - (i+1)]
                newArray.push(sum)
            }
        }else{//ganjil
            let floor = Math.floor(array.length/2)
            for(let i = 0 ; i < floor; i++){
                let sum = array[i] + array[array.length - (i+1)]
                newArray.push(sum)
            }
        newArray.push(array[floor])
        }
        array = newArray
        newArray = []
        i++
        if(i == runs){
           return array
        }
    }

    //best solutin #1
    // const r = [], c = a.slice();
    // while (c.length) r.push(c.pop() + (c.shift() || 0));
    // return n - 1 ? foldArray(r, n - 1) : r;

    //best solution #2
    // if (!runs) return array;

    // var result = [];
    // // new Array
    // for (var i = 0; i < Math.ceil(array.length / 2); i++) {
    //   result[i] = array.length -i - 1 === i ? array[i] : array[i] + array[array.length - i - 1];
    // }
    
    // return foldArray(result, runs - 1);
}
    
function main(param,runs){
    BenchMark(foldArray(param,runs))
}

main([ 1, 2, 3, 4, 5 ], 1) // [ 6, 6, 3 ];
main([ 1, 2, 3, 4, 5 ], 2) // [ 9, 6 ];
main([ 1, 2, 3, 4, 5 ], 3) // [ 15 ]
main([ -9, 9, -8, 8, 66, 23 ], 1) // [ 14, 75, 0 ]
main([ -9, 9, -8, 8, 66, 23 ], 2) //