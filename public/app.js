var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: 'render',
    value: function render() {
      var classes = 'card';
      console.log('in card', this.props.isRevealed);
      if (this.props.isRevealed) {
        classes += ' ' + this.props.color + 'b';
      }
      return React.createElement(
        'td',
        { className: classes },
        this.props.value
      );
    }
  }]);

  return Card;
}(React.Component);

var Board = function (_React$Component2) {
  _inherits(Board, _React$Component2);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'table',
        { className: 'board' },
        React.createElement(
          'tbody',
          null,
          this.props.words.map(function (row, indexRow) {
            return React.createElement(
              'tr',
              { key: indexRow },
              row.map(function (card, indexCol) {
                return React.createElement(Card, {
                  value: card,
                  key: indexRow * 6 + indexCol,
                  isRevealed: _this3.props.isRevealed, color: _this3.props.colors[indexRow][indexCol] });
              })
            );
          })
        )
      );
    }
  }]);

  return Board;
}(React.Component);

var InfoBoard = function (_React$Component3) {
  _inherits(InfoBoard, _React$Component3);

  function InfoBoard() {
    _classCallCheck(this, InfoBoard);

    return _possibleConstructorReturn(this, (InfoBoard.__proto__ || Object.getPrototypeOf(InfoBoard)).apply(this, arguments));
  }

  _createClass(InfoBoard, [{
    key: 'render',
    value: function render() {
      var _this5 = this;

      return React.createElement(
        'div',
        { className: 'infoboard' },
        React.createElement(
          'div',
          { className: 'player' },
          'Team ',
          this.props.isBluesTurn ? 'Blue' : 'Red',
          '\'s turn'
        ),
        React.createElement(
          'button',
          { className: 'revealbutton', onClick: function onClick(e) {
              e.preventDefault();
              _this5.props.handleRevealClick();
            } },
          'Reveal'
        )
      );
    }
  }]);

  return InfoBoard;
}(React.Component);

var Game = function (_React$Component4) {
  _inherits(Game, _React$Component4);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this6 = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this6.state = {
      isBluesTurn: true,
      words: [['ball', 'fish', 'track', 'maple', 'pole'], ['sink', 'apple', 'spell', 'kid', 'cab'], ['lemon', 'scientist', 'whip', 'coffee', 'cat'], ['leaf', 'dance', 'princess', 'net', 'Europe'], ['water', 'yellow', 'bridge', 'watermelon', 'tea']],
      colors: [['blue', 'blue', 'red', 'yellow', 'yellow'], ['red', 'black', 'blue', 'red', 'blue'], ['red', 'blue', 'red', 'yellow', 'yellow'], ['blue', 'blue', 'red', 'blue', 'yellow'], ['yellow', 'yellow', 'red', 'blue', 'red']],
      isRevealed: false
    };
    _this6.handleRevealClick = _this6.handleRevealClick.bind(_this6);
    return _this6;
  }

  _createClass(Game, [{
    key: 'handleRevealClick',
    value: function handleRevealClick() {
      var _this7 = this;

      this.setState({
        isRevealed: !this.state.isRevealed
      }, function () {
        return console.log(_this7.state.isRevealed);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          null,
          React.createElement(
            'h1',
            null,
            'Codenames'
          )
        ),
        React.createElement(Board, { words: this.state.words, isRevealed: this.state.isRevealed, colors: this.state.colors }),
        React.createElement(InfoBoard, {
          isBluesTurn: this.state.isBluesTurn,
          handleRevealClick: this.handleRevealClick })
      );
    }
  }]);

  return Game;
}(React.Component);

ReactDOM.render(React.createElement(Game, null), document.getElementById('app'));
//# sourceMappingURL=app.js.map