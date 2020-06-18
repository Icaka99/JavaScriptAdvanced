function timeToWalk (steps, stepLength, speed){
    let distance = steps * stepLength;
    let totalRestInMinutes = Math.floor(distance / 500);
    let totalTime = distance / speed / 1000 * 60;
    let totalTimeInSeconds = Math.ceil((totalRestInMinutes + totalTime) * 60);
    let result = new Date(null, null, null, null, null, totalTimeInSeconds);
    return result.toTimeString().split(' ')[0];
}