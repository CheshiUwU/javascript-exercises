let strLength = 0;
let result = ''
const reverseString = function(string) {
    result = '';
   strLength = string.length;
    for (let i = strLength; i > -1; i--) {
        if (i === 0)
            return result;
        let char = string.at(i -1);
        result += `${char}`;

    }
};
// Do not edit below this line
module.exports = reverseString;
