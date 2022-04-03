// Check if two strings are anagrams of each other
// An anagram of a string is another string that contains the same characters,
// only the order of characters can be different. 
// For example, “abcd” and “dabc” are an anagram of each other

function checkAnagram(str1, str2) {
    if (str1.length != str2.length) {
        console.log("Strings are not anagram.");
        return;
    }
    let dict1 = {};
    let dict2 = {};
    for (let i = 0; i < str1.length; i++) {
        if (dict1[str1[i]]) {
            dict1[str1[i]] = dict1[str1[i]] + 1;
        } else {
            dict1[str1[i]] = 1;
        }
        if (dict2[str2[i]]) {
            dict2[str2[i]] = dict2[str2[i]] + 1;
        } else {
            dict2[str2[i]] = 1;
        }
    }
    let keys1 = Object.keys(dict1);
    let keys2 = Object.keys(dict2);
    if (keys1.length != keys2.length) {
        console.log("Strings are not anagram.");
        return;
    }
    for (let i = 0; i < keys1.length; i++) {;
        if (dict1[keys1[i]] == dict2[keys1[i]]) {
            continue;
        }
        console.log("Strings are not anagram.");
        break;
    }
    console.log("dict 1:", dict1);
    console.log("dict 2:", dict2);
}

checkAnagram("abcdf", "cabff");