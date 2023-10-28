function isValidSudoku(board) {
    // Helper function to check if an array of values has duplicates
    const hasDuplicates = (arr) => {
        const seen = new Set();
        for (const val of arr) {
            if (val !== '.' && seen.has(val)) {
            return true;
            }
            seen.add(val);
        }
        return false;
        }
    
        // Check each row
        for (let i = 0; i < 9; i++) {
        if (hasDuplicates(board[i])) {
            return false;
        }
        }
    
        // Check each column
        for (let j = 0; j < 9; j++) {
        const column = [];
        for (let i = 0; i < 9; i++) {
            column.push(board[i][j]);
        }
        if (hasDuplicates(column)) {
            return false;
        }
        }
    
        // Check each 3x3 sub-box
        for (let boxRow = 0; boxRow < 3; boxRow++) {
        for (let boxCol = 0; boxCol < 3; boxCol++) {
            const box = [];
            for (let i = 3 * boxRow; i < 3 * boxRow + 3; i++) {
            for (let j = 3 * boxCol; j < 3 * boxCol + 3; j++) {
                box.push(board[i][j]);
            }
            }
            if (hasDuplicates(box)) {
            return false;
            }
        }
        }
    
        return true;
    }
    
    // Example input
    const board = [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ];
    
    // Check if the Sudoku board is valid
    console.log(isValidSudoku(board));
    