// Check if given string contain only digits
function checkDigits(str) {
    console.log("String:", str);
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    let digitFlag = true;
    for (let i = 0; i < str.length; i++) {
        if (!digits.includes(parseInt(str[i]))) {
            digitFlag = false;
            break;
        }
    }
    return digitFlag;
}

const str = "122345";
const onlyDigits = checkDigits(str);
if (onlyDigits) {
    console.log("String contains only digits:", str);
} else {
    console.log("String does contains only digits:", str);
}