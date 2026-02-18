var results = [];
var continueLoop = true;

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (continueLoop) {

    var x = prompt("Enter first number (Cancel to stop):");
    if (x === null) break;

    var operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    var y = prompt("Enter second number:");
    if (y === null) break;

    var result;

    if (isNaN(x) || isNaN(y)) {
        result = "Error: Invalid Number";
    } else {
        x = Number(x);
        y = Number(y);

        if (operator === "+") {
            result = x + y;
        } else if (operator === "-") {
            result = x - y;
        } else if (operator === "*") {
            result = x * y;
        } else if (operator === "/") {
            result = y !== 0 ? x / y : "Error: Divide by 0";
        } else if (operator === "%") {
            result = x % y;
        } else {
            result = "Error: Invalid Operator";
        }
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");

    if (typeof result === "number") {
        results.push(result);
    }
}

document.write("</table>");

/* Summary Table */
if (results.length > 0) {

    var total = 0;
    var min = results[0];
    var max = results[0];

    for (var i = 0; i < results.length; i++) {
        total += results[i];
        if (results[i] < min) min = results[i];
        if (results[i] > max) max = results[i];
    }

    var avg = total / results.length;

    document.write("<h3>Summary</h3>");
    document.write("<table>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
