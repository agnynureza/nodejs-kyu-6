function starcase(n) {
    for(let i = n ; i > 0 ; i--){
        let temp = ''
        for(let j = 1 ; j <= n ; j++){
            if(i <= j){
                temp += '*'
            }else{
                temp += ' '     
            }
        }
        console.log(temp)
    }
}


starcase(5)