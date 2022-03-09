// Print duplicate characters from a string
function printDuplicate(str) {
    console.log("InputString: ", str);
    let duplicateChars = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                // include check to avoid repeated duplicates
                duplicateChars += !duplicateChars.includes(str[i]) ? str[i] : "";
                break;
            }
        }
    }
    console.log("DuplicateChars: ", duplicateChars);
}

let str = "input string";
printDuplicate(str);