# Sherlock and Squares

https://www.hackerrank.com/challenges/sherlock-and-squares

function processData(input) {
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        a = readLine().split(' ');
        a = a.map(Number);
        var count = Math.floor(Math.sqrt(a[1])) - Math.ceil(Math.sqrt(a[0])) +1;
        console.log(count);
    }
} 



process.stdin.resume();
process.stdin.setEncoding("ascii");
var input_stdin_array = "";
var input_currentline = 0;
var _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   input_stdin_array = _input.split("\n");
   processData(input_stdin_array);
});

function readLine() {
    return input_stdin_array[input_currentline++];
}
