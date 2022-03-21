// Count number of vowels and consonants in string
// Assuming given string contains only alphabets
const vowels = "aeiou";
function countVowelsCons(str) {
    console.log("String:", str);
    let vowelsCnt = 0, consCnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            vowelsCnt++;
        } else {
            consCnt++;
        }
    }
    console.log("Number of vowels: ", vowelsCnt, " and consonants: ", consCnt);
}

const str = "abcdefg";
countVowelsCons(str);