# Modified Kaprekar Numbers

https://www.hackerrank.com/challenges/kaprekar-numbers/submissions/code/19306923

function processData(input) {
    //Enter your code here
    var arr = input.split("\n");
    var p = parseInt(arr[0]);
    var q = parseInt(arr[1]);
    var kapArr = [];
    for(var i = p; i <= q; i++){
       var sq = i*i;
	   var length = Math.log(i) * Math.LOG10E + 1 | 0;
       var firstPart = sq%(Math.pow(10,length));
       var secondPart = Math.trunc(sq/(Math.pow(10,length)));
       var sum = firstPart + secondPart;
       if(sum === i){
   	        kapArr.push(i);
       }
    }
    if(kapArr.length != 0){
        console.log(kapArr.join(" "));        
    }else{
        console.log("INVALID RANGE");
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
