function rotateArray(arr) {
    let rotations = Number(arr.pop());
    rotations = rotations % arr.length
    for (let i = 0; i < rotations; i++) {
        arr.unshift(arr.pop());
    }
    
    console.log(arr.join(' '));
}