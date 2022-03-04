// Check if given expression is valid
function checkExpression(exp) {
    let expStack = [];
    let supportedSymbols = {
        ")": "(",
        "}": "{",
        "]": "[",
    }
    let openingSymbols = Object.values(supportedSymbols);
    let closingSymbols = Object.keys(supportedSymbols);
    let valid = true;
    for (let i = 0; i < exp.length; i++) {
        if (openingSymbols.includes(exp[i])) {
            expStack.push(exp[i]);
        } else if (closingSymbols.includes(exp[i])) {
            let top = expStack.length - 1;
            if (expStack[top] == supportedSymbols[exp[i]]) {
                expStack.pop();
                console.log(expStack);
            } else {
                valid = false;
                break;
            }
        }
    }
    if (!valid || expStack.length) {
        console.log("Given expression: " + exp + " is not valid.");
    } else {
        console.log("Given expression: " + exp + " is valid.");
    }
}

let exp = "({)}";
checkExpression(exp);