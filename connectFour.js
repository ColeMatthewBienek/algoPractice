const STATUS = Object.freeze({
    P1: 1,
    P2: 2,
    OVER: 0
});
const DIRECTION = Object.freeze({
    U: { r: -1, c: 0 },
    UR: { r: -1, c: 1 },
    R: { r: 0, c: 1 },
    DR: { r: 1, c: 1 },
    D: { r: 1, c: 0 },
    DL: { r: 1, c: -1 },
    L: { r: 0, c: -1 },
    UL: { r: -1, c: -1 }
});
const ROWS = 6;
const COLS = 7;
const WINNING_STREAK = 4;

class Connect4 {

    constructor() {
        this.board = new Array(ROWS).fill().map(() => new Array(COLS).fill(0));
        this.status = STATUS.P1;
    }

    play(col) {
        const board = this.board;

        if (this.status === STATUS.OVER) {
            return 'Game has finished!';
        }

        // check if move is valid
        if (board[0][col] !== 0) {
            return 'Column full!'; // no change of turn
        }

        // place disc in the column
        let row;
        for (row = ROWS - 1; row >= 0; row--) {
            if (board[row][col] === 0) {
                board[row][col] = this.status;
                break;
            }
        }

        // check if it is a win move
        let msg = `Player ${this.status} has a turn`;
        if (this.checkBoard(row, col, this.status)) {
            msg = `Player ${this.status} wins!`;
            this.status = STATUS.OVER;
        } else {
            this.status = this.status % 2 + 1;
        }
        return msg;
    }

    checkBoard(row, col, player) {
        const board = this.board;
        const _check = (r, c, dir, num) =>
            (r < 0 || r >= ROWS || c < 0 || c >= COLS || board[r][c] !== player) ?
                0 : (1 + _check(r + dir.r, c + dir.c, dir, num - 1));
        return (
            (_check(row, col, DIRECTION.R, 3) + _check(row, col, DIRECTION.L, 3) - 1 >= WINNING_STREAK) ||
            (_check(row, col, DIRECTION.U, 3) + _check(row, col, DIRECTION.D, 3) - 1 >= WINNING_STREAK) ||
            (_check(row, col, DIRECTION.UR, 3) + _check(row, col, DIRECTION.DL, 3) - 1 >= WINNING_STREAK) ||
            (_check(row, col, DIRECTION.UL, 3) + _check(row, col, DIRECTION.DR, 3) - 1 >= WINNING_STREAK)
        );
    }
}