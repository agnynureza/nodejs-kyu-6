const BenchMark = require('./speed-library')

function solution(number){

    //mysolution
    const numeral = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
    const roman = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
    let i = 0
    let oke = ''
    while(number > 0){
      if(numeral[i] <= number){
        oke += roman[i]
        number -= numeral[i]
      }else{
        i++    
      }
    }
    return oke

    //best solution #1
    // var  roman = {M:1000,CM:900, D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1 }

    // var ans = '';
    // while(number>0){
    //     for(a in roman){ 
    //      if(roman[a]<=number){ ans += a; number-=roman[a]; break;}      
    //     }
    // }
    // return ans;
}


function main(param){
    BenchMark(solution(param))
}

main(1990)
main(1323)
main(5392)
main(3251)