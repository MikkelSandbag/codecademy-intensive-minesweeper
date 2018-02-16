'use strict';

const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	const board = [];

	for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
		const row = [];
		for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
			row.push(' ');
		}
		board.push(row);
	}

	return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	const board = [];

	for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
		const row = [];
		for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
			row.push(null);
		}
		board.push(row);
	}

	let numberOfBombsPlaced = 0;

	while (numberOfBombsPlaced < numberOfBombs) {
		let randomRowIndex = Math.floor(Math.random() * numberOfRows);
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);

		if (board[randomRowIndex][randomColumnIndex] !== 'B') {
			board[randomRowIndex][randomColumnIndex] = 'B';

			numberOfBombsPlaced++;
		}
	}

	return board;
};

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
	const neighborOffsets = [
		[-1, -1],
		[-1, 0],
		[-1, 1],
		[0, -1],
		[0, 1],
		[1, -1],
		[1, 0],
		[1, 1]
	];

	const numberOfRows = bombBoard.length;
	const numberOfColumns = bombBoard[0].length;
	let bombCounter = 0;
};

const printBoard = board => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
};

const playerBoard = generatePlayerBoard(3, 4);

const bombBoard = generateBombBoard(3, 4, 5);

console.log(`Player Board:\n${printBoard(playerBoard)}`);
console.log(`Bomb Board:\n${printBoard(bombBoard)}`);