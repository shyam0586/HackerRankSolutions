# Cavity Map

https://www.hackerrank.com/challenges/cavity-map

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
  var n = parseInt(readLine());
  var grid = [];
  for (var grid_i = 0; grid_i < n; grid_i++) {
    grid[grid_i] = readLine();
  }
  var arr = [],
    arr2 = [];
  
  grid.map(function(a) {
    var temp = a.split("")
    arr.push(temp);
    arr2.push(temp);
  });
  
  for (var i = 0; i < grid.length; i++) {
    for (var j = 1; j < arr[i].length - 1; j++) {
      if (i != 0 && i != arr.length - 1) {
        if (arr[i][j - 1] < arr[i][j] && arr[i][j + 1] < arr[i][j] && arr[i - 1][j] < arr[i][j] && arr[i + 1][j] < arr[i][j]) {
          arr2[i][j] = "X";
        }
      }
    }
    console.log(arr2[i].join(""));
  }
}
