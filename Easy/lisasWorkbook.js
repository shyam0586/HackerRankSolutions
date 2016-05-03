# Lisa's Workbook

https://www.hackerrank.com/challenges/bear-and-workbook

function processData(input) {
  //Enter your code here
  var a = input.replace("\n", " ").split(' ');
  var n = parseInt(a[0]); //chapters
  var m = parseInt(a[1]); //max problems in a page
  var a = a.slice(2, a.length); //problems per page
  var spclCount = 0;
  var problemNo = 1;
  var pageNo = 1;
  for (var i = 0; i < n; i++) {
    for (var k = 1; k <= parseInt(a[i]); k++) {
      if (k == pageNo) {
        spclCount++;
      }
      if (k % m === 0 || k == parseInt(a[i])) {
        pageNo++;
      }
    }

  }
  console.log(spclCount);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function(input) {
  _input += input;
});

process.stdin.on("end", function() {
  processData(_input);
});
