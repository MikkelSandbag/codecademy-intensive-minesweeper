const board = [
	[' ', ' ', ' '],
	[' ', ' ', ' '],
	[' ', ' ', ' ']
];

const printBoard = board => {
	console.log('Current Board:');

	for (let i = 0; i < board.length; i++) {
		console.log(board[i].join(' | ') + '\n');
	}
}; 

printBoard(board);

board[0][1] = '1';
board[2][2] = 'B';

printBoard(board);