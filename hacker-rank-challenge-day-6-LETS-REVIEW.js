// Task
// Given a string, `S`, of length `N` that is indexed from 0 to N-1, print its even-indexed and odd-indexed characters as space-separated strings on a single line (see the Sample below for more detail). 

// Sample Input

// 2
// Hacker
// Rank

// Sample Output

// Hce akr
// Rn ak

// Solve
function processData(input) {
    //Enter your code here
    let str = input.split('\n').slice(1);    
    str.forEach((s) => {
    let strEven = '';
    let strOdd = '';
        const m = s.length;
        for (let i = 0; i < m; i++) {
            if (i % 2 === 0) {
                strEven += s[i];
            } else {
                strOdd += s[i];
            }
        }
        console.log(strEven, strOdd)
    })
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


// Note: good lesson on why to use a nest forEach/forLoop***