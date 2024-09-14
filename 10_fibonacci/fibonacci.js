const fibonacci = function(int) {
    (parseInt(int, 10));
    int = int * 1;
    let fibo = 0;
    let fibo1 = 1;
    let fibo2 = 1;
    if (int < 0) {
        return "OOPS";
    }
    if (int == 0) {
        fibo = 0;
        return fibo;
    }
    if (int < 3){
        fibo = 1;
        return fibo;
    }
    for (i = 3; i <= int; i++) {
        fibo = 0;
        fibo = fibo1 + fibo2;
        fibo1 = fibo2;
        fibo2 = fibo;
    }
    return fibo;
};

// Do not edit below this line
module.exports = fibonacci;
