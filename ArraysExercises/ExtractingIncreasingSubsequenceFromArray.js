function extract(arr) {
    let biggestNum = arr[0];
    let result = [];

    arr.map(x => {
        if (x >= biggestNum) {
            result.push(x);
            biggestNum = x;
        }
    });

    return result.join('\n');
}