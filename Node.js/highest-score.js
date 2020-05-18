function highestScore (students) {
    let obj = {}
    for(let i = 0 ; i < students.length ; i++){
        let exists = Object.keys(obj)
        
        if(exists.indexOf(students[i].class) != -1) continue

        for(let j = 0 ; j <students.length ; j++){
            let max = students[i].score
            let student = students[i].name;
            if(i != j){
                if(students[i].class == students[j].class){
                    if(max < students[j].score){
                        max = students[j].score
                        student = students[j].name
                    }
                }
            }
            obj[students[i].class] = {
                "name": student,
                "score": max
            }
        }
    }
    return obj
}
  
  // TEST CASE
  console.log(highestScore([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
console.log(highestScore([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}