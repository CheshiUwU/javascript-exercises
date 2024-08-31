let concatString = '';
let result = "";
const repeatString = function(string, num) {
    for (let i = 1; i <= num; i++) {
        concatString = concatString + `${string}`;
        if (i === num) {
            result = concatString;
            concatString = '';
            return result
        }
    };
    if (num === 0) {
        return ''
    }
    else 
    return "ERROR";
};
// Do not edit below this line
module.exports = repeatString;