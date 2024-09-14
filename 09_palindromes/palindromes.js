const palindromes = function (palindrome) {
    let  arrPunctuation =  ["!", ",", "'", ".", " "]
    reversedPalindrome = '';
    palLength = palindrome.length;
    arrLength = arrPunctuation.length;
    editedPalindrome = palindrome.toLowerCase();
    for (i = palLength; i >= 0; i--) {
        for (j = arrLength -1; j >= 0; j--)
        if (editedPalindrome.at(i) === arrPunctuation[j]) {
            editedPalindrome = editedPalindrome.replace(arrPunctuation[j], "");
            j++;
        }
    }
    for (i = editedPalindrome.length -1; i >= 0; i--){
        reversedPalindrome = reversedPalindrome + editedPalindrome.substr(i, 1);
    }
    if (editedPalindrome === reversedPalindrome) {
        return true;
    }
    else {
        return false;
    } 
};

// Do not edit below this line
module.exports = palindromes;
