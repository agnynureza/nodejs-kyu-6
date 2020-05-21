function stat(strg) {
    if (strg === '') {
      return strg;
    }
    const teamStats = new teamStatistics(strg); 
    return 'Range: ' +  teamStats.getRange() + ' Average: ' + teamStats.getAverage() + ' Median: ' + teamStats.getMedian();
}

class teamStatistics {
  constructor(teamScores) {
    this.teamScoresInArray = teamScores.split(', ');
    this.teamTimesInSeconds = [];
    
    for(let singlePerson of this.teamScoresInArray) {
      const hoursToSeconds = Number(singlePerson.split('|')[0] * 60 * 60);
      const minutesToSeconds = Number(singlePerson.split('|')[1] * 60);
      const seconds = Number(singlePerson.split('|')[2]);
      this.teamTimesInSeconds.push(hoursToSeconds + minutesToSeconds + seconds);
    }
  }
  
  getFormatedTime(timeInSeconds) {
    const date = new Date(null);
    date.setSeconds(timeInSeconds);
    return date.toISOString().substr(11, 8).replace(/:\s*/g, '|');
  }
  
  getAverage() {
    let arraySum = 0;
    let average = 0;
    const arrayLength = this.teamTimesInSeconds.length;
    
    for (let number of this.teamTimesInSeconds) {
      arraySum += number;
    }
    
    return this.getFormatedTime(arraySum / arrayLength);
  }
    
  getMedian() {
    this.teamTimesInSeconds.sort( function(a,b) {return a - b;} );

    var half = Math.floor(this.teamTimesInSeconds.length/2);

    if(this.teamTimesInSeconds.length % 2) {
      return this.getFormatedTime(this.teamTimesInSeconds[half]);
    } else {
      return this.getFormatedTime((this.teamTimesInSeconds[half-1] + this.teamTimesInSeconds[half]) / 2.0);
    }
  }
  
  getRange() {
    const biggest = Math.max.apply(Math, this.teamTimesInSeconds);
    const smallest = Math.min.apply(Math, this.teamTimesInSeconds);
    return this.getFormatedTime(biggest-smallest);
  }

}

let test = "01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"
stat(test)
