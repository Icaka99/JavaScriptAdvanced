function addRemove(arr) {
    let initialNum = 1;
    let result = [];

    arr.forEach(el => {
        el === 'add' ? result.push(initialNum) : result.pop();
        
        initialNum++;
    });

    return result.length === 0 ? 'Empty' : result.join('\n');
}