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

    //best solution #1
    //transform the input string into array & define a string of alphabetical latin characters
    var arr = x.split(' ');
    var str = 'abcdefghijklmnopqrstuvwxyz';

    //Iterate through the array with input words to find the one with the greatest sum
    var newArr = arr.map(function(word){
    var sum = 0;
    for (var i = 0; i < word.length; i++) {
        sum += str.indexOf(word[i]);
    }
        return sum;
    });

    //Return the word with the greatest sum
    return arr[newArr.indexOf(Math.max(...newArr))];

    //best solution #2
    // let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
    // return s.split(' ')[as.indexOf(Math.max(...as))];
}

function main(param){
    if(param == undefined) return 
    BenchMark(high(param))
}

main('amislvjbwbdblfaxvhgjx dbeptprcvmdhywcaafvtb zexrzyztkfkkpwsmbpiou ijqhjgewjijrusmlzjjia')
main('man i need a taxi up to ubud')
main('what time are we climbing up the volcano')