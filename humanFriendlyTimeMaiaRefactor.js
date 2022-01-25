const timeUnits = [
    ['year', 31536000],
    ['day', 86400,],
    ['hour', 3600],
    ['min', 60],
    ['second', 1]
]

var timeCalc = (num, unitOfTimeInSeconds) => {
    var unitOfTime = Math.floor(num/unitOfTimeInSeconds)
    return [unitOfTime, unitOfTime * unitOfTimeInSeconds]
}

function formatDuration(num) {
    var compiledTime = []

    for(var timeUnit of timeUnits) {
        if(num >= timeUnit[1]) {
            var time = timeCalc(num, timeUnit[1])
            num -= time[1]
            var timeLabel = timeUnit[0] + (time[0] > 1 ? 's' : '')
            compiledTime.push([time[0], timeLabel].join(' '))
        }
    }
   // console.log(compiledTime.join(', '))
   return compiledTime.join(', ')
}


console.log(formatDuration(1861))