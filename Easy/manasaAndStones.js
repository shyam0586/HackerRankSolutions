# Manasa and Stones

https://www.hackerrank.com/challenges/manasa-and-stones

function processData(input) {
    //Enter your code here
    var numbers = input.split("\n").map(function(i) {return parseInt(i); });
    var num = numbers[0];
    var index = 1;
    for(var j = 0; j < num; j++){
        var N = numbers[index];
        var A = numbers[index+1] <= numbers[index+2] ? numbers[index+1] : numbers[index+2] ;
        var B = numbers[index+2] > numbers[index+1] ? numbers[index+2] : numbers[index+1];
        index += 3;
        /*
        Out of all combinations, first element is always zero. Remaining elements in set is N-1
        So our solution lies in between (N-2)*A and (N-2)*B
        Remaining elements can be found from a pattern.. in (B-A) interval inside above range
        */
        var n = N - 1;
        var interval = B - A;
        var bottomRange = n*A;
        var topRange = n*B;
        var output = "";
        for(var i = bottomRange; i < topRange; i += interval){
            output += i;
            output += " ";
        }
        output += topRange;
        console.log(output);
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
