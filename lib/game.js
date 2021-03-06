'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`

var _board = require('./board');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game(numberOfRows, numberOfColumns, numberOfBombs, debug) {
		_classCallCheck(this, Game);

		this._numberOfRows = numberOfRows;
		this._numberOfColumns = numberOfColumns;
		this._board = new _board.Board(numberOfRows, numberOfColumns, numberOfBombs);
		this._debug = debug;
	}

	_createClass(Game, [{
		key: 'playMove',
		value: function playMove(rowIndex, columnIndex) {
			if (rowIndex + 1 > this._numberOfRows || columnIndex + 1 > this._numberOfColumns || rowIndex < 0 || columnIndex < 0) {
				console.log('Tile (' + rowIndex + ', ' + columnIndex + ') is out of bounds!');
				this._board.print();
			} else {
				this._board.flipTile(rowIndex, columnIndex);

				if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
					console.log('Game Over!');
					return;
				} else if (!this._board.hasSafeTiles()) {
					console.log('You Won!');
					return;
				} else {
					console.log('Current Board:');
					this._board.print();

					if (this._debug) {
						console.log('Bomb Board:');
						this._board.printBombBoard();
					}
				}
			}
		}
	}]);

	return Game;
}();