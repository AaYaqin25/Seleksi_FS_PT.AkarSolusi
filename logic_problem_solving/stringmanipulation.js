function stringManipulation(str) {
    let arr = []
    let temp = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
            arr = [...arr, temp]
            temp = ""
        } else if (i === str.length - 1) {
            temp += str[i]
            arr = [...arr, temp]
        } else {
            temp += str[i]
        }
    }

    let word = "terbaik IT bidang di bergerak yang perusahaan adalah Roots"
    let temp2 = ""
    let array = []

    for (let i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            array = [...array, temp2]
            temp2 = ""
        } else if (i === word.length - 1) {
            temp2 += word[i]
            array = [...array, temp2]
        } else {
            temp2 += word[i]
        }
    }

    let result = []

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (array[i] === arr[j]) {
                result = [...result, array[i]]
            }
        }
    }

    let outputStr = "";
    for (let i = 0; i < result.length; i++) {
        outputStr += result[i];
        if (i < result.length - 1) {
            outputStr += " ";
        }
    }

    console.log(outputStr);
}

stringManipulation("Roots adalah perusahaan yang bergerak di bidang IT terbaik")