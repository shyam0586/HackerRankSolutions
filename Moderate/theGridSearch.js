# The Grid Search

https://www.hackerrank.com/challenges/the-grid-search

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
    var R_temp = readLine().split(' ');
    var R = parseInt(R_temp[0]);
    var C = parseInt(R_temp[1]);
    var G = [];
    for (var G_i = 0; G_i < R; G_i++) {
      G[G_i] = readLine();
    }
    var r_temp = readLine().split(' ');
    var r = parseInt(r_temp[0]);
    var c = parseInt(r_temp[1]);
    var P = [];
    for (var P_i = 0; P_i < r; P_i++) {
      P[P_i] = readLine();
    }

    var flag = false;
    for (var i = 0; i < G.length; i++) {
      for (var j = 0; j < G[i].length; j++) {
        if (G[i].indexOf(P[0][0]) < 0) {
          break;
        }
        if (G[i][j] == P[0][0]) {
          if ((i + r <= R) && (j + c <= C)) {
            var result = checkPattern(i, j);
            if (result) {
              flag = true;
            }
          }
        }
      }
    }

    function checkPattern(m, n) {
      for (var i = m, k = 0; i < m + r; i++, k++) {
        for (var j = n, l = 0; j < n + c; j++, l++) {
          if (P[k][l] != G[i][j]) {
            return false;
          }
        }
      }
      return true;
    }
    if (flag) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  }
}
