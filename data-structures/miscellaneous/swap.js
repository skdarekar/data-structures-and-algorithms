// Swap two numbers without using third variable
function swap(a, b) {
    console.log("a:", a, " b: ", b);
    a = a + b;
    b = a - b;
    a = a - b;
    console.log("a:", a, " b: ", b);
}

swap(-120, 255);