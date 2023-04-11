function fibonacci(n) {
    let number = [0, 1];
    for (let i = 1; i < n; i++) {
        let row = number[i - 1] + number[i];
        number = [...number, row];
    }
    return number;
}
console.log(fibonacci(9));
