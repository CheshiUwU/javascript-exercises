let concatString = '';
let result = "";
const repeatString = function(string, num) {
    for (let i = 1; i <= num; i++) {
        concatString = concatString + `${string}`;
        if (i === num) {
            result = concatString;
            concatString = '';
            return result
        };
    };
};
// Do not edit below this line
module.exports = repeatString;