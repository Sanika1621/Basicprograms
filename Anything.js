const operationFactory = (operation) => {
    switch (operation) {
        case 'addition':
            return addition;
        case 'subtraction':
            return subtraction;
        case 'multiplication':
            return multiplication;
        case 'division':
            return division;
        case 'factorial':
            return factorial;
        case 'sum':
            return sum;
        case 'ceil':
            return ceil;
        case 'floor':
            return floor;
        default:
            console.log('no such operations');
    }
};


const addition = (...n) => {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        if (typeof n[i] !== 'number') {
            return ['error'];
        }
        sum += n[i];
    }

    return [sum];
};



const subtraction = (...n) => {
    for (let i = 0; i < n.length; i++) {
        if (typeof n[i] !== 'number') {
            return ['error: Invalid input'];
        }
    }

    let sub = n[0];
    for (let i = 1; i < n.length; i++) {
        sub -= n[i];
    }

    return [sub];
};

const multiplication = (...n) => {
    let multi = 1; 
    for (let i = 0; i < n.length; i++) {
        if (typeof n[i] !== 'number') {
            return ['error'];
        }
        multi *= n[i];
    }
    return [multi];
};


const division = (...n) => {
    if (n.length === 0) {
        return ['error']; 
    }
    
    let div = n[0];
    
    for (let i = 1; i < n.length; i++) { 
        if (typeof n[i] === 'number' && n[i] !== 0) {
            div /= n[i];
        } else {
            return ['error'];
        }
    }
    
    return [div];
};
    
const factorial = (...n) => {
    if (n.length !== 1 || typeof n[0] !== 'number' || n[0] < 0) {
        return ['error']; 
    }

    let fact = 1;
    for (let i = 2; i <= n[0]; i++) {
        fact *= i;
    }

    return [fact];
};

const sum = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] !== 'number') {
            return ['error'];
        }
    }

    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    return [total];
};

const ceil = (...num) => {
    const total = {
        ceil: []//return an array
    };
    
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') {
            total.ceil.push('error');
        } else {
            total.ceil.push(Math.floor(num[i]));
        }
    }
    
    return [total];
};

const floor = (...num) => {
    const total = {
        floor: []
    };
    
    for (let i = 0; i < num.length; i++) {
        if (typeof num[i] !== 'number') {
            total.floor.push('error');
        } else {
            total.floor.push(Math.floor(num[i]));
        }
    }
    
    return [total];
};










 