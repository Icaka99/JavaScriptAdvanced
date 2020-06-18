function roadRadar(input) {
    let speed = Number(input[0]);
    let area = input[1];
    let speedLimit = 0;
    let output = '';

    if (area == 'motorway') {
        speedLimit = 130;
        speed -= speedLimit;
    } else if (area == 'interstate') {
        speedLimit = 90;
        speed -= speedLimit;
    } else if (area == 'city') {
        speedLimit = 50;
        speed -= speedLimit;
    } else if (area == 'residential') {
        speedLimit = 20;
        speed -= speedLimit;
    }

    if (speed > 40) {
        output = 'reckless driving';
    } else if (speed > 20) {
        output = 'excessive speeding';
    } else if (speed > 0) {
        output = 'speeding';
    }

    console.log(output)
}