// Exercise 1. Fruit

function fruit (fruit, weightInGrams, pricePerKilogram) {
    let totalWeightInKg = (weightInGrams / 1000).toFixed(2);
    let totalPrice = (pricePerKilogram * (weightInGrams / 1000)).toFixed(2)
    return `I need $${totalPrice} to buy ${totalWeightInKg} kilograms ${fruit}.`;
}

// Exercise 2. Greatest Common Divisor – GCD

function gcdOfTwoNumbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  // Exercise 3. Same Numbers

  function sameNumbers (number) {
    let digitList = number.toString().split('');
    let allTrue = true;
    let sum = 0;
    for(let i = 0; i < digitList.length; i++){
        if(allTrue){
            allTrue = digitList[i] === digitList[0];
        }

        sum += +digitList[i];
    }

    console.log(allTrue);
    console.log(sum);
  }

  // Exercise 4. Time To Walk

  function timeToWalk (steps, stepLength, speed){
    let distance = steps * stepLength;
    let totalRestInMinutes = Math.floor(distance / 500);
    let totalTime = distance / speed / 1000 * 60;
    let totalTimeInSeconds = Math.ceil((totalRestInMinutes + totalTime) * 60);
    let result = new Date(null, null, null, null, null, totalTimeInSeconds);
    return result.toTimeString().split(' ')[0];
}