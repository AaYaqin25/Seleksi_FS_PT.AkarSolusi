function modulusOperator(n) {
    let number = []
    let result = []

    for (let i = 0; i < n; i++) {
        number = [...number, i + 1]
    }

    for (let j = 0; j < number.length; j++) {
        if (number[j] % 3 === 0 && number[j] % 5 === 0) {
            result = [...result, 'Roots Hebat!']
        } else if (number[j] % 3 === 0) {
            result = [...result, 'Roots']
        } else if (number[j] % 5 === 0) {
            result = [...result, 'Hebat']
        } else {
            result = [...result, number[j]]
        }
    }
    console.log(result);
}

modulusOperator(100)