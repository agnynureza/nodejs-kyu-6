function groupAnimals(animals) {
    let hoho = []
    for(let i = 0 ; i < animals.length ; i ++){
        let haha = []
        haha.push(animals[i])
        for(let j = 0 ; j< animals.length ; j++){
            let initial1 = animals[i][0]
            let initial2 = animals[j][0]
            if( i != j){
                if(initial1 == initial2){
                    haha.push(animals[j])
                    animals.splice(j,1)
                }
            }
        }
        hoho.push(haha)   
    }
    return hoho.sort((a,b)=>{return a[0] > b[0]})
}
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  //[ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]