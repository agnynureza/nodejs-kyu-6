function targetTerdekat(arr) {
    let o = arr.indexOf('o')
    let x = [] 
    let temp = []
    for(let i = 0 ; i < arr.length; i ++){
        if(arr[i] == 'x'){
            x.push(i)
        }
    }
    if(x.length == 0){
        return 0
    }
    for(let i = 0 ; i < x.length ; i ++){
        temp.push(Math.abs(o-x[i]))
    }
    let haha = temp.sort((a,b)=>{return a-b})
    return haha[0]
}
  
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2