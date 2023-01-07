//[0, 0, 1, 0, 0],
//[2, 1, 3, 3, 5],
//[1, 2, 3, 4],
//[1, 2, 3, 4]
function matrixElementsSum(matrix) {
    debugger
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        const currRow = matrix[i];
        for (let col = 0; col < currRow.length; col++) {
            if (currRow[col] === 0) {
                if (i + 1 < matrix.length) {
                    matrix[i + 1][col] = 0;
                }
            } else {
                sum += currRow[col];
            }
        }
    }
    return sum;
}  
