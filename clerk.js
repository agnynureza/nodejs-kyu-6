/*
The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollar bill. An "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to every person and give change if he initially has no money and sells the tickets strictly in the order people queue?

Return YES, if Vasya can sell a ticket to every person and give change with the bills he has at hand at that moment. Otherwise return NO
*/

const BenchMark = require('./speed-library') 

function tickets(peopleInLine){
    let m25 = 1
    let m50 = 0
    for(let i = 1 ; i < peopleInLine.length ; i++){
      if(peopleInLine[i] == 25){
        m25 += 1
      }else if(peopleInLine[i] == 50){
        m25 -= 1
        m50 += 1
        if(m25 < 0){
          return "NO"
        }
      }else{
        if(m50 == 0){
          m25 -= 3
          if(m25 < 0){
            return "NO"
          }
        }else {
          m50 -= 1
          m25 -= 1
           if(m25 < 0 || m50 < 0){
            return "NO"
          }
        }
      }
    }
    return "YES"
}

function main(param){
    BenchMark(tickets(param))
}

main([25, 25, 50, 50, 100]) //YES
main([25, 100]) //NO
main([25, 25, 50]) //NO

// link test : https://www.codewars.com/kata/vasya-clerk/javascript
//powered by : codewars