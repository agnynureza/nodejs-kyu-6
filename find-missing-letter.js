const BenchMark = require('./speed-library')

function findMissingLetter(array){
    //mysolution
    // let dictionary = 'abcdefghijklmnopqrstuvwxyz'
    // let check = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // let temp = []
    // let oke = 0
    // for(let i = 0 ; i < array.length ; i++){
    //     let index = dictionary.indexOf(array[i].toLowerCase())
    //     temp.push(index)
    // }
    // for(let i = 0 ; i < temp.length - 1 ; i++){
    //     if(temp[i] + 1 !== temp[i+1]){
    //     oke = temp[i] +1 
    //     }
    // }
    // return dictionary.indexOf(array[0]) != -1 ?  dictionary[oke] : check[oke]

    //best solution #1
    let first = array[0].charCodeAt(0)
    for (let i = 1; i < array.length; i++) {
      if (first + i !== array[i].charCodeAt(0)) {
        return String.fromCharCode(first + i)
      }
    }
    throw new Error("Invalid input")

    //best solution #2
    // var i=array[0].charCodeAt();
    // array.map(x=>  x.charCodeAt()==i?i++:i);
    // return String.fromCharCode(i);
}

function main(param){
    BenchMark(findMissingLetter(param))
}
main(['a','b','c','d','f'])
main(['O','Q','R','S'])
main(['d','e','g','h','i'])
main(['K','L','M','P','Q'])