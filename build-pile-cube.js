/*
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n^3, the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb) will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
*/

const BenchMark = require('./speed-library')

function findNb(m) {
    //my solution 
    // let sum = 0
    // let i = 0 
    // while (sum < m){
    //     sum += Math.pow(i,3)
    //     if(sum == m){
    //         return i
    //     }else if(sum > m){
    //         return -1
    //     }
    //     i++
    // }

    //best solution #1
    // var n = 0
    // while (m > 0) m -= ++n**3
    // return m ? -1 : n

    //best solution #2
    let n = 0;
    let sum = 0;
    while (sum < m) {
      n++;
      sum += Math.pow(n, 3);
    }
    return sum === m ? n : -1;
}

function main(param){
    BenchMark(findNb(param))
}

main(4183059834009) //2022
main(24723578342962) //-1
main(135440716410000) //4824
main(40539911473216) //3568

  
'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'
'India Foxtrot Yankee Oscar Uniform Charlie Alpha November Romeo Echo Alpha Delta'

'Romeo Charlie Charlie Hotel November Romeo Tango Xray .'
'Romeo Charlie Charlie Hotel November Romeo Tango XRay .'