const BenchMark = require('./speed-library')

function oke(string){
    let besar = 0 
    for(let i = 0; i < string.length - 1 ; i++){
        let yes = string[i] + string[i+1]
        if(besar < Number(yes)){
            besar = yes
        }
    }
    console.log(besar)
}

function main(param){
    BenchMark(oke(param))
}

main('67695846')