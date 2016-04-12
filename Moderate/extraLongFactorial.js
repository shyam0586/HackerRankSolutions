#  Extra Long Factorials

Link : https://www.hackerrank.com/challenges/extra-long-factorials


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
    var result = [1];
    var fact = n;
    if (n != 1 || n != 0) {
        for (var i = 2; i <= n; i++) {
            result = mul(result, [i]);
        }
    }
  console.log(result.join(""));
}

//multiplies and stores results in 2D array
function mul(s1, s2) {
  var c1 = s1.length >= s2.length ? s1 : s2;
  var c2 = s1.length < s2.length ? s1 : s2;
  var result = [];
  var count = 0;
  for (var i = c1.length - 1; i >= 0; i--) {
    result[i] = [];
    for (var k = 0; k < count; k++) {
      result[i].push(0);
    }
    count++;
    var carry = 0;
    for (var j = c2.length - 1; j >= 0; j--) {
      var product = ((c2[j] * c1[i]) + carry);
      carry = Math.trunc(product / 10);
      var digit = product % 10;
      result[i].push(digit);
      if (j == 0 && carry != 0) {
        result[i].push(carry);
      }
    }
  }
  return add(result);
}

//final addition
function add(arr) {
  var finalResult = [];
  var limit = 0;
  var carry = 0;
  do {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i][limit] === undefined) {
        arr[i][limit] = 0;
      }
      sum += arr[i][limit];
    }
    sum += carry;
    carry = Math.trunc(sum / 10);
    var digit = sum % 10;
    finalResult.push(digit);
    limit++;
  } while (limit <= arr[0].length - 1);
  if (carry !=0 ) {
     finalResult.push(carry); 
  }
  return finalResult.reverse();
}
