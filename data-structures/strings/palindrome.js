// Check if given string is palindrome
// for example - "madam" is palindrome
function isPalindrome(str) {
    console.log("Given string: ", str);
    let i = 0;
    let j = str.length - 1;
    let palindromeFlag = true;
    while (i < j) {
        if (str[i] === str[j]) {
            i++; j--;
        } else {
            palindromeFlag = false;
            break;
        }
    }
    if (palindromeFlag) {
        console.log("Output: " + str + " is palindrome.");
    } else {
        console.log("Output: " + str + " is not palindrome.");
    }
}

const str = "MADAM";
isPalindrome(str);