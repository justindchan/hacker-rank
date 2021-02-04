// Task
// Given an integer, `n`, print its first `10` multiples. Each multiple `n` x `i` (where `1 <= i <= 10`) should be printed on a new line in the form: n x i = result.

'use strict';

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


// Solve
function main() {
    const n = parseInt(readLine(), 10);
    // Solution
    for (let i = 1; i <= 10; i++) {
        let multiple = n * i;
        console.log(n + ` x ` + i + ` = ` + multiple);
    }
}
//