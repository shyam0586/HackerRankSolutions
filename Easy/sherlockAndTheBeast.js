# Sherlock and The Beast

https://www.hackerrank.com/challenges/sherlock-and-the-beast/submissions/code/18467100

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
    var t = parseInt(readLine());
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        var str = "";
         for(var i = 0; i <= n ; i++){
             if((n-i) % 3 == 0 && i % 5 == 0){
                str = "";
                for(var j = 0; j < n-i; j++){
                    str += "5";
                }
                for(var k = 0; k < i; k++){
                    str += "3";
                }
                 break;
             }     
        }

        if(str == ""){
            console.log(-1);
        }else{            
            console.log(str); 
        }
           
    }
}
