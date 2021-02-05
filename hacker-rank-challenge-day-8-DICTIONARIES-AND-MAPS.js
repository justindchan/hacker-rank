// Task
// Given `n` names and phone numbers, assemble a phone book that maps friends' names to their respective phone numbers. 
// You will then be given an unknown number of names to query your phone book for.
// For each `name` queried, print the associated entry from your phone book on a new line in the form name=phoneNumber; if an entry for `name` is not found, print Not found instead.

// Note: Your phone book should be a Dictionary/Map/HashMap data structure. 

// Sample Input

// 3
// sam 99912222
// tom 11122222
// harry 12299933
// sam
// edward
// harry

// Sample Output

// sam=99912222
// Not found
// harry=12299933

// Solve
function processData(input) {
    const [entries, ...arr] = input.split('\n');
    const n = parseInt(entries);
    const data = {};
    for(let i = 0; i < n; i++){
        const [name, number] = arr[i].split(' ');
        data[name] = number;
    }
    let m = arr.length;
    for(let i = n; i < m; i++){
        const key = arr[i];
        const val = data[key];
        if (val) {
            console.log(`${key}=${val}`);
        } else {
            console.log('Not found');
        }
    }
} 
//
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});

// NOTE: good example of object/array destructuring assignment***