# Library Fine

https://www.hackerrank.com/challenges/library-fine
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
  var d1_temp = readLine().split(' ');
  var d1 = parseInt(d1_temp[0]);
  var m1 = parseInt(d1_temp[1]);
  var y1 = parseInt(d1_temp[2]);
  var d2_temp = readLine().split(' ');
  var d2 = parseInt(d2_temp[0]);
  var m2 = parseInt(d2_temp[1]);
  var y2 = parseInt(d2_temp[2]);

  var fine = {
    "calendarMonth": 15,
    "calendarYear": 500,
    "notCalendarYear": 10000
  };
  var yearDiff = y1 - y2;
  var monthDiff = m1 - m2;
  var dayDiff = d1 - d2;
  if (yearDiff > 0) {
    console.log(fine.notCalendarYear);
  } else if (yearDiff == 0 && monthDiff > 0) {
    console.log(monthDiff * fine.calendarYear);
  } else if (yearDiff == 0 && monthDiff == 0 && dayDiff > 0) {
    console.log(dayDiff * fine.calendarMonth);
  } else {
    console.log(0);
  }

}
