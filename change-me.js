function changeMe(array){
    
    for(let i = 0 ;i < array.length ; i++){
        let obj = {}
        let fullName = array[i][0] + array[i][1]
        obj.firstName = array[i][0]
        obj.lastName = array[i][1]
        obj.gender = array[i][2]
        obj.age = array[i][3]
        console.log(`${i+1}. ${fullName}: ${JSON.stringify(obj)}`)
    }
}

changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
