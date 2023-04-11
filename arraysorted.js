function sorted(array) {
    let temp = 0
    let sorted = true
    let mainArray = []

    if (array.array1.length === 0 || array.array2.length === 0) {
        console.log("invalid input");
        return mainArray
    }

    mainArray = [...array.array1, ...array.array2];

    while (sorted) {
        sorted = false
        for (let i = 1; i < mainArray.length; i++) {
            if (mainArray[i - 1] > mainArray[i]) {
                temp = mainArray[i - 1]
                mainArray[i - 1] = mainArray[i]
                mainArray[i] = temp
                sorted = true
            }
        }
    }
    return mainArray
}


function mergeArray(array1, array2) {
    let merge = sorted({ array1, array2 })
    return merge
}

let array1 = [5, 3, 6, 7, 2]
let array2 = [9, 4, 0, 8, 1]
console.log(mergeArray(array1, array2))
