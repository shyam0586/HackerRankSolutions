# Angry Professor

https://www.hackerrank.com/challenges/angry-professor

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
  input_stdin += data;
});

process.stdin.on('end', function() {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
  var t = parseInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    var posCount = 0;
    a.map(function(a) {
      if (a <= 0) {
        posCount++;
      }
    })
    if (posCount >= k) {
      console.log("NO");
    } else {
      console.log("YES");
    }
  }
}

