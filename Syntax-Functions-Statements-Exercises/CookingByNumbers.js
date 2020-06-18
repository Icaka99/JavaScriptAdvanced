function cooking(input) {
    let num = input.shift();

    for (let cmd of input) {
        switch (cmd) {
            case 'chop':
                num /= 2;
                break; 
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num += 1;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.8;
                break;
        }
        console.log(num)
    }
}

cooking(['32', 'chop', 'chop', 'chop', 'chop', 'chop'])