const removeFromArray = function(array, ...args) {
    arrLen = array.length;
    argLen = args.length;
    for (i = 0; i < argLen; i++) {
        for (j = 0; j < arrLen; j++) {
            if (array[j] === args[i]) {
                array.splice(j, 1);
                j--;
            }
        }
    }
    return array;
}
// Do not edit below this line
module.exports = removeFromArray;
