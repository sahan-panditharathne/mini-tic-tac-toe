let matrix = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

function addMatrix(value, symbol) {

    if (matrix[value[0]-1][value[1]-1] == null) {

        matrix[value[0]-1][value[1]-1] = symbol;
    }else{
        return false;
    }

    return true;
}

function rowCheck(arr){
    for (let i = 0; i < arr.length; i++) {
            if(arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]){
                if(arr[i][0] !== null) {
                    console.log("true1");
                    return true;
                }
            }
    }
    console.log("false1");
    return false;
}

function columnCheck(arr){
    for (let i = 0; i < arr.length; i++) {
            if(arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]){
                if(arr[0][i] !== null) {
                    console.log("true2");
                    return true;
                }
            }
    }
    console.log("false2");
    return false;
}

module.exports = {
    addMatrix,
    matrix,
    columnCheck,
    rowCheck,
};