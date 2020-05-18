function fpb(angka1, angka2) {
    let divisions = []
    let ok = angka1 
    if(angka1 > angka2) ok = angka2
    for(let i = 1 ; i <= ok ; i++){
        if(angka1%i == 0 && angka2%i == 0){
            divisions.push(i)
        }
    }
   return divisions[divisions.length - 1] 
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1