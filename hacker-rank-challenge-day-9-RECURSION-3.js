// Function Description
// Complete the factorial function in the editor below. Be sure to use recursion.

// factorial has the following paramter:

//     int n: an integer

// Returns

//     int: the factorial of n

// Sample Input

// 3

// Sample Output

// 6


'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}
// SOLVE
// Complete the factorial function below.
function factorial(n) {
    let acc = n;
    if (n === 0 || n === 1) {
        return 1;
    }
    while(n > 1) {
        n--;
        acc *= n;
    }
    return acc;
}
//
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let result = factorial(n);

    ws.write(result + "\n");

    ws.end();
}

// NOTE: used WHILE loop for to recursively compute factorial of n.