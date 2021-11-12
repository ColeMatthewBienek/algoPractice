const timeCodes = [
    ['year', 31536000],
    ['day', 86400],
    ['hour', 3600],
    ['minute',60],
    ['second',1]
]
var calculateTime = (timeNum, timeSeconds) => {
    var timeUnit = Math.floor(timeNum/timeSeconds)
    return [timeUnit, timeUnit * timeSeconds]
}

function formatDuration(timeNum){
    if (timeNum < 1){
        return "now"
    } else
    var compiledTime = []
    for (var timeCode of timeCodes) {
        if (timeNum >= timeCode[1]) {
            var processTime = calculateTime(timeNum, timeCode[1])
            timeNum -= processTime[1]
            var timeCat = timeCode[0] + (processTime[0] > 1 ? 's' : '')
            compiledTime.push([processTime[0], timeCat].join(' '))
        }
    } 
    
    var result = punctuateTime(compiledTime)
    return result
}   
    
    
  function punctuateTime (arr) {
    var len = arr.length  
   console.log(arr)
    switch (arr.length) {
        case 5:
            arr[0]+=', '
            arr[1]+=', '
            arr[2]+=', '
            arr[3]+=' and '
            //console.log(arr)
            break
        case 4:
            arr[0]+=', '
            arr[1]+=', '
            arr[2]+=' and '
            break
        case  3:
            arr[0]+=', '
            arr[1]+=' and '
            break
        case 2:
            arr[0]+=' and '
            break
        case 1:
            break
        
      } console.log('arr:... ',arr.join(''))
      return arr.join('')
  }  
    
 
console.log(formatDuration(637452735463785265))
