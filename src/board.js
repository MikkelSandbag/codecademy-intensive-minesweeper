export class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs) {
		this._numberOfRows = numberOfRows;
		this._numberOfColumns = numberOfColumns;
		this._numberOfBombs = numberOfBombs;
		this._numberOfTiles = (this._numberOfRows * this._numberOfColumns);
		this._playerBoard = Board.generatePlayerBoard(this._numberOfRows, this._numberOfColumns);
		this._bombBoard = Board.generateBombBoard(this._numberOfRows, this._numberOfColumns, this._numberOfBombs);
	}

	get playerBoard() {
		return this._playerBoard;
	}

	flipTile(rowIndex, columnIndex) {
		if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
			console.log(`Tile (${rowIndex}, ${columnIndex}) has already been flipped!`);
			return;
		} else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
			this._playerBoard[rowIndex][columnIndex] = 'B';
		} else {
			this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
		}

		this._numberOfTiles--;
	}

	getNumberOfNeighborBombs(rowIndex, columnIndex) {
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

		const numberOfRows = this._bombBoard.length;
		const numberOfColumns = this._bombBoard[0].length;
		let bombCounter = 0;

		neighborOffsets.forEach(offset => {
			const neighborRowIndex = rowIndex + offset[0];
			const neighborColumnIndex = columnIndex + offset[1];

			if (neighborRowIndex >= 0 && 
				  neighborRowIndex < numberOfRows &&
				  neighborColumnIndex >= 0 &&
				  neighborColumnIndex < numberOfColumns) {
				if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
					bombCounter++;
				}
			}
		});

		return bombCounter;
	}

	hasSafeTiles() {
		return this._numberOfTiles !== this._numberOfBombs;
	}

	print() {
		console.log(this._playerBoard.map(row => row.join(' | ')).join('\n'));
	}

	static generatePlayerBoard(numberOfRows, numberOfColumns) {
		const board = [];

		for (let rowsIndex = 0; rowsIndex < numberOfRows; rowsIndex++) {
			const row = [];
			for (let columnsIndex = 0; columnsIndex < numberOfColumns; columnsIndex++) {
				row.push(' ');
			}
			board.push(row);
		}

		return board;
	}

	static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
	}
}