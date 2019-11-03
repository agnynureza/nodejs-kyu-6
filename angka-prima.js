function angkaPrima(angka) {
    if(angka == 2 || angka == 3){
        return true
    }
    if(angka%2 != 0 && angka%3 !== 0){
        return true
    }
    return false

  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false_
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false