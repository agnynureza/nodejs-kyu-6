function race(v1, v2, g) {
    // v1 = v1/3600
    // v2 = v2/3600
    // if(v1 >= v2){
    //     return null
    // }
    // let t = Math.floor(g/(v2-v1))
    // let second =Math.round(t%60) 
    // let minute = Math.floor(t/60) > 60 ? Math.floor(t/60)%60 : Math.floor(t/60)
    // let hour = Math.floor(t/3600)
    // return [hour, minute, second]

    //another solution
    if (v2 < v1) { return null; }
  
    var seconds = Math.floor(g / (v2 - v1) * 3600);
    var h = Math.floor(seconds / 3600);
    var m = Math.floor((seconds - h * 3600) / 60);
    var s = seconds - h * 3600 - m * 60;
    
    return [h, m, s];
}




console.log(race(720, 850, 70) )//[0, 32, 18]
console.log(race(80, 91, 37)) //[3, 21, 49]
console.log(race(80, 100, 40))// [2, 0, 0]