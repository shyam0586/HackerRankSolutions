# Cut the sticks

https://www.hackerrank.com/challenges/cut-the-sticks

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    cut(arr);    
}

function cut(arr){
    var min = Math.min(...arr);
    console.log(arr.length);
    arr = arr.filter(function(a){
       a = a - min;
       if(a>0){
           return a;
       }
    });
    if(arr.length >= 1){
        cut(arr);
    }
}
