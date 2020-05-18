const BenchMark = require('./speed-library')

/*
desctiption
Float parameter "h" in meters must be greater than 0
Float parameter "bounce" must be greater than 0 and less than 1
Float parameter "window" must be less than h.

how many time the ball cross window ?

*/

function bouncingBall(h,  bounce,  window) {
    let count = 1
    let i = true
    if(h <= 0 || (bounce <= 0 && bounce >= 1) || window >= h){
        return  -1
    }
    while (i) {
        h *= bounce
        h > window ? count += 2 : i = false
    }
    return count
}




function main(h,  bounce,  window){
    BenchMark( bouncingBall(h,  bounce,  window))
}

main(2.0, 0.66, 1.5) //3
main(100000.0, 0.66, 1.5) //15