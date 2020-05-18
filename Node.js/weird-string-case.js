const benchMark = require("./speed-library")

function toWeirdCase(string){
    //mysolution
    // let baru = '' 
    // let count = 0
    //     for(let i = 0 ; i < string.length ; i ++){
    //     if(string[i] == ' '){
    //         baru += ' '
    //         count = 0
    //     }else{
    //         if(count%2 != 0){
    //             baru += string[i].toLowerCase()
    //         }else{
    //             baru += string[i].toUpperCase()
    //         }
    //     count++
    //     }
    // }
    // return baru

    //best solutin #1
    return string.split(' ').map(function(word){
        return word.split('').map(function(letter, index){
          return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
        }).join('');
      }).join(' ');
    
    //best solution #2
    // return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}

  
function main(param){
    benchMark(toWeirdCase(param))
}

//output must be characterup and low by turns 
main('this is a test')
// main('Looks liKe you passed')
// main('this is the finaL test case')
// main('this')
// main('passed')
// main('ok fine yoU are done now')