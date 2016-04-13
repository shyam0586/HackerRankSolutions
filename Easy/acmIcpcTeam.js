# ACM ICPC Team

https://www.hackerrank.com/challenges/acm-icpc-team

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
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    var topic = [];
    for(var topic_i = 0; topic_i < n; topic_i++){
       topic[topic_i] = readLine();
    }
    var max = 0;
    var maxTeam = 0;
    for(var i = 0; i < topic.length; i++){
	   var sub = topic[i].split("");
       for(var j = i +1; j < topic.length; j++){
  	   var comp = topic[j].split("");
       var temp = topic[i].match(/[1]/g).length;
           for(var k = 0; k < sub.length; k++){
      	   if(sub[k] == 0 && comp[k] == 1){
          	 temp++;
           }
       }
       if(max == temp){
           maxTeam++;
       }else if(max < temp){
      	   max = temp;
           maxTeam = 1;
      }
   }
}
console.log(max);
console.log(maxTeam);
}
