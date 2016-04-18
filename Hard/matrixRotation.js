# Matrix Rotation

https://www.hackerrank.com/challenges/matrix-rotation-algo

function processData(input) {
    //Enter your code here
    var rows = input.split("\n")
    var firstLine = rows[0].split(' ').map(Number);
    var m = firstLine[0];
    var n = firstLine[1] ;
    var r = firstLine[2];  
    var matrix = [];
    for(var i=1 ; i < rows.length; i++){
        matrix[i-1] = rows[i].split(' ').map(Number)
    }
    var initm = 0;
    var initn = 0;
    var posArr = [];
    var rotMatrix = [];
    var circles = Math.ceil(m < n ? m : n / 2);
    for (var i = 0; i < circles; i++) {
        var count = 0;
        var tempm = initm;
        var tempn = initn;
        var limit = ((m - initm - 1) + (n - initn - 1)) * 2;
        var innerArr = [];
        do {
            var l = {};
            l.x = tempm;
            l.y = tempn;
            innerArr.push(l);
            if (tempm == initm && tempn == initn) {
                tempm++;
            } else if (tempm > tempn && tempn == initn && tempm < m - 1) {
                tempm++
            } else if (tempm == m - 1 && tempn < n - 1 || tempn == initn) {
                tempn++;
            } else if (tempn == n - 1 && tempm < tempn && tempm > initm || tempm == m - 1) {
                tempm--;
            } else if (tempm == initm && tempn > tempm && tempn > initn) {
                tempn--;
            }
            count++;
        } while (count < limit);
        posArr.push(innerArr);
        m = m - 1;
        n = n - 1;
        initm = initm + 1;
        initn = initn + 1;
    }

    for (var i = 0; i < posArr.length; i++) {
        for (var j = 0; j < posArr[i].length; j++) {
            var points = findNewPos(j, posArr[i].length);
            if (rotMatrix[posArr[i][points].x] == undefined) {
              rotMatrix[posArr[i][points].x] = [];
            }
        rotMatrix[posArr[i][points].x][posArr[i][points].y] = matrix[posArr[i][j].x][posArr[i][j].y];
        }
    }


    function findNewPos(pos, arrLength) {
        if (pos + r < arrLength) {
            return pos + r;
        }
        return (pos + r) % arrLength;
    }

    for(var k = 0; k < rotMatrix.length; k++){
        console.log(rotMatrix[k].join(" "));
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
