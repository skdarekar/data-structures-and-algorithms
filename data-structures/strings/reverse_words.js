/* 
    Given a String S, reverse the string without reversing its individual words. Words are separated by dots.
    For example - 
        Input - JS.is.Best 
        Output - Best.is.JS
*/

// using inbuild split method
function reverseWords(words) {
    let wordsSplit = words.split(".");
    let reversedWords = [];
    for (let i = wordsSplit.length - 1; i >= 0; i--) {
        // console.log(wordsSplit[i]);
        reversedWords.push(wordsSplit[i]);
    }
    console.log(reversedWords.join("."));
}

let words = "hello.world";
reverseWords(words);