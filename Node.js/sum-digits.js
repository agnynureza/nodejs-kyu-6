const benchMark = require("./speed-library")

function digital_root(n) {
    //my solution
    if(n < 10){
      return n 
    }else {
     let ok = Array.from(String(n), Number)
     let plus = ok.reduce((accu,current)=>accu + current)
     return digital_root(plus)
    }

    //best solution #1
    // return (n - 1) % 9 + 1;

    //best solution #2
    // if (n < 10) return n;
    // return digital_root(
    //   n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
  }

  function main(param){
    benchMark(digital_root(param))
  }

main(16)
main(456)