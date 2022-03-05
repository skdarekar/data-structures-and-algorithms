//Write a code to reverse a given string with recursion
function reverse_string(str, len) {
    if (len === 1) {
        return str[0];
    }
    return str[len - 1] + reverse_string(str, len - 1);
}

let str = "abcdefghijklmnopqrstuvwxyz";
const reversedString = reverse_string(str, str.length);
console.log(reversedString);