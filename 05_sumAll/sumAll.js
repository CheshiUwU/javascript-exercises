const sumAll = function(int1, int2) {
    result = 0;
    if (int1 < 0 ||
        int2 < 0 ||
        int1 % 1 !== 0 ||
        int2 % 1 !== 0 )  {
            return "ERROR";
        }
    else if (typeof int1 === 'string' || int1 instanceof String ||
        typeof int2 === 'string' || int2 instanceof String) {
            return "ERROR";
        }
        
        if (int1 > int2) {
        for (i = int2; int2 <= int1; int2++) {
            result += int2;
        }
        return result;
    }
    for (i = int1; int1 <= int2; int1++) {
        result += int1;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
