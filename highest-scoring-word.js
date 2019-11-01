const BenchMark = require('./speed-library')

function high(x){
    //mysolution
    // let temp = []
    // let max = 0
    // let indexing = 0
    // let loop = true
    // let dictionary = 'abcdefghijklmnopqrstuvwxyz'
    // let split = x.split(' ')
    
    // for(let i = 0 ; i < split.length ; i++){
    // let calculation = 0
    //   for(let j = 0 ; j < split[i].length ; j++){
    //     let index = dictionary.indexOf(split[i][j])
    //     calculation += index 
    //   }
    //   temp.push(calculation)
    // }
    
    // while(loop){
    //   if(max < temp[indexing]){
    //     max = temp[indexing]
    //   }
    //   indexing++
    //   if(indexing == temp.length){
    //     loop = false
    //   }
    // }
    
    // let result = temp.indexOf(max)
    // return split[result]
}

function main(param){
    if(param == undefined) return 
    BenchMark(high(param))
}

main('amislvjbwbdblfaxvhgjx dbeptprcvmdhywcaafvtb zexrzyztkfkkpwsmbpiou ijqhjgewjijrusmlzjjia')
main('man i need a taxi up to ubud')
main('what time are we climbing up the volcano')