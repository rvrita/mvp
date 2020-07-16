var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var fisherYatesShuffle = function fisherYatesShuffle(array) {
  // not working
  // k is to generate random index and temp is to swap the values
  var i = array.length,
      k,
      temp;
  while (i !== 0) {
    k = Math.floor(Math.random() * i);
    i -= 1;
    temp = array[i];
    array[i] = array[k];
    array[k] = temp;
  }
};

var Rules = function (_React$Component) {
  _inherits(Rules, _React$Component);

  function Rules() {
    _classCallCheck(this, Rules);

    return _possibleConstructorReturn(this, (Rules.__proto__ || Object.getPrototypeOf(Rules)).apply(this, arguments));
  }

  _createClass(Rules, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "rules" },
        React.createElement(
          "h4",
          null,
          "Rules"
        ),
        React.createElement(
          "p",
          null,
          "Codenames is a game of guessing which codenames (i.e., words) in a set are related to a hint-word given by another player.",
          React.createElement("br", null),
          React.createElement("br", null),
          "Players split into two teams: red and blue. One player of each team is selected as the team's spymaster; the others are field operatives.",
          React.createElement("br", null),
          React.createElement("br", null),
          "Twenty-five Codename cards, each bearing a word, are laid out in a 5\xD75 rectangular grid, in random order. A number of these words represent red agents, a number represent blue agents, one represents an assassin, and the others represent innocent bystanders.",
          React.createElement("br", null),
          React.createElement("br", null),
          "The teams' spymasters are given a randomly-dealt map card showing a 5\xD75 grid of 25 squares of various colors, each corresponding to one of the code name cards on the table. Teams take turns. On each turn, the appropriate spymaster gives a verbal hint about the words on the respective cards. Each hint may only consist of one single word and a number. The spymaster gives a hint that is related to as many of the words on his/her own agents' cards as possible, but not to any others \u2013 lest they accidentally lead their team to choose a card representing an innocent bystander, an opposing agent, or the assassin.",
          React.createElement("br", null),
          React.createElement("br", null),
          "The hint's word can be chosen freely, as long as it is not (and does not contain) any of the words on the code name cards still showing at that time. Code name cards are covered as guesses are made.",
          React.createElement("br", null),
          React.createElement("br", null),
          "The hint's number tells the field operatives how many words in the grid are related to the word of the clue. It also determines the maximum number of guesses the field operatives may make on that turn, which is the hint's number plus one. Field operatives must make at least one guess per turn, risking a wrong guess and its consequences. They may also end their turn voluntarily at any point thereafter.",
          React.createElement("br", null),
          React.createElement("br", null),
          "After a spymaster gives the hint with its word and number, their field operatives make guesses about which code name cards bear words related to the hint and point them out, one at a time. When a code name card is pointed out, the spymaster covers that card with an appropriate identity card \u2013 a blue agent card, a red agent card, an innocent bystander card, or the assassin card \u2013 as indicated on the spymasters' map of the grid. If the assassin is pointed out, the game ends immediately, with the team who identified him losing. If an agent of the other team is pointed out, the turn ends immediately, and that other team is also one agent closer to winning. If an innocent bystander is pointed out, the turn simply ends.",
          React.createElement("br", null),
          React.createElement("br", null),
          "The game ends when all of one team's agents are identified (winning the game for that team),[3] or when one team has identified the assassin (losing the game). Source: ",
          React.createElement(
            "a",
            { href: "https://en.wikipedia.org/wiki/Codenames_(board_game)" },
            "Wikipedia"
          )
        )
      );
    }
  }]);

  return Rules;
}(React.Component);

var Board = function (_React$Component2) {
  _inherits(Board, _React$Component2);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement(
        "table",
        { className: "board" },
        React.createElement(
          "tbody",
          null,
          this.props.cards.map(function (row, indexRow) {
            return React.createElement(
              "tr",
              { key: indexRow },
              row.map(function (card, indexCol) {
                return React.createElement(Card, {
                  card: card,
                  key: indexRow * 5 + indexCol,
                  isRevealButtonOn: _this3.props.isRevealButtonOn,
                  indexRow: indexRow,
                  indexCol: indexCol,
                  handleCardClick: _this3.props.handleCardClick });
              })
            );
          })
        )
      );
    }
  }]);

  return Board;
}(React.Component);

var Card = function (_React$Component3) {
  _inherits(Card, _React$Component3);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this5 = this;

      var classes = 'card';
      if (this.props.isRevealButtonOn) {
        classes += " " + this.props.card.color + "b";
      }
      if (this.props.card.isRevealed) {
        classes += " " + this.props.card.color;
      }
      return React.createElement(
        "td",
        { className: classes, onClick: function onClick(e) {
            e.preventDefault();
            _this5.props.handleCardClick(_this5.props.indexRow, _this5.props.indexCol);
          } },
        this.props.card.word
      );
    }
  }]);

  return Card;
}(React.Component);

var Info = function (_React$Component4) {
  _inherits(Info, _React$Component4);

  function Info() {
    _classCallCheck(this, Info);

    return _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).apply(this, arguments));
  }

  _createClass(Info, [{
    key: "render",
    value: function render() {
      var _this7 = this;

      return React.createElement(
        "div",
        { className: "infoboard" },
        React.createElement(
          "h3",
          { className: "playerturn" },
          this.props.isBluesTurn ? 'Blue' : 'Red',
          " Team starts"
        ),
        React.createElement(
          "button",
          { className: "revealbutton", onClick: function onClick(e) {
              e.preventDefault();
              _this7.props.handleRevealClick();
            } },
          "Reveal"
        ),
        React.createElement("br", null)
      );
    }
  }]);

  return Info;
}(React.Component);

var InfoBoard = function (_React$Component5) {
  _inherits(InfoBoard, _React$Component5);

  function InfoBoard() {
    _classCallCheck(this, InfoBoard);

    return _possibleConstructorReturn(this, (InfoBoard.__proto__ || Object.getPrototypeOf(InfoBoard)).apply(this, arguments));
  }

  _createClass(InfoBoard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "flexcontainer" },
        React.createElement(Player, { team: "Blue", gameStatus: this.props.gameStatus }),
        React.createElement(Info, {
          isBluesTurn: this.props.isBluesTurn,
          handleRevealClick: this.props.handleRevealClick,
          handleSkipClick: this.props.handleSkipClick
          // handleRestartClick={this.props.handleRestartClick}
        }),
        React.createElement(Player, { team: "Red", gameStatus: this.props.gameStatus })
      );
    }
  }]);

  return InfoBoard;
}(React.Component);

var Player = function (_React$Component6) {
  _inherits(Player, _React$Component6);

  function Player() {
    _classCallCheck(this, Player);

    return _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).apply(this, arguments));
  }

  _createClass(Player, [{
    key: "render",
    value: function render() {
      if (this.props.team === 'Blue') {
        var allCards = this.props.gameStatus.blueTotal;
        var cardsLeft = allCards - this.props.gameStatus.blueRevealed;
      } else {
        var allCards = this.props.gameStatus.redTotal;
        var cardsLeft = allCards - this.props.gameStatus.redRevealed;
      }
      return React.createElement(
        "div",
        { className: "scoreboard" },
        React.createElement(
          "h3",
          null,
          this.props.team,
          " Team's Scores:"
        ),
        React.createElement(
          "table",
          null,
          React.createElement(
            "tbody",
            null,
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "All cards:"
              ),
              React.createElement(
                "td",
                null,
                allCards
              )
            ),
            React.createElement(
              "tr",
              null,
              React.createElement(
                "td",
                null,
                "Cards left:"
              ),
              React.createElement(
                "td",
                null,
                cardsLeft
              )
            )
          )
        )
      );
    }
  }]);

  return Player;
}(React.Component);

var AddWords = function (_React$Component7) {
  _inherits(AddWords, _React$Component7);

  function AddWords(props) {
    _classCallCheck(this, AddWords);

    var _this10 = _possibleConstructorReturn(this, (AddWords.__proto__ || Object.getPrototypeOf(AddWords)).call(this, props));

    _this10.state = {
      valueList: 'built-in'
    }, _this10.handleWordListChange = _this10.handleWordListChange.bind(_this10);
    return _this10;
  }

  _createClass(AddWords, [{
    key: "handleWordListChange",
    value: function handleWordListChange(event) {
      var _this11 = this;

      this.setState({
        valueList: event.target.value
      }, function () {
        return console.log(_this11.state.valueList);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this12 = this;

      return React.createElement(
        "div",
        { className: "addwords-container" },
        React.createElement(
          "div",
          { className: "restartgame" },
          React.createElement(
            "h4",
            null,
            "Restart the game:"
          ),
          React.createElement("br", null),
          React.createElement(
            "form",
            { onSubmit: function onSubmit(e) {
                e.preventDefault();
                _this12.props.handleRestartSubmit(_this12.state.valueList);
              } },
            React.createElement(
              "label",
              null,
              "Choose a list:",
              React.createElement(
                "select",
                { value: this.state.valueList, onChange: this.handleWordListChange },
                React.createElement(
                  "option",
                  { value: "built-in" },
                  "Built-in"
                ),
                React.createElement(
                  "option",
                  { value: "rita1" },
                  "Rita1"
                )
              )
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "submit", value: "Restart" })
          )
        )
      );
    }
  }]);

  return AddWords;
}(React.Component);

var Game = function (_React$Component8) {
  _inherits(Game, _React$Component8);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this13 = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this13.state = {
      isBluesTurn: true,
      cards: [],
      isRevealButtonOn: false,
      gameStatus: {
        redTotal: 0,
        redRevealed: 0,
        blueTotal: 0,
        blueRevealed: 0
      }
    };
    _this13.handleRevealClick = _this13.handleRevealClick.bind(_this13);
    _this13.handleCardClick = _this13.handleCardClick.bind(_this13);
    _this13.handleRestartSubmit = _this13.handleRestartSubmit.bind(_this13);
    return _this13;
  }

  _createClass(Game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchWords('/getwords');
    }
  }, {
    key: "fetchWords",
    value: function fetchWords(url) {
      var _this14 = this;

      fetch(url, {
        method: 'GET'
      }).then(function (response) {
        return response.json();
      }).then(function (result) {
        var isBluesTurn = result[24].color === 'blue' ? true : false;
        fisherYatesShuffle(result);
        var newShuffle = [[], [], [], [], []];
        for (var i = 0; i < result.length; i++) {
          result[i].isRevealed = false;
          // adding it vertically
          newShuffle[i % 5].push(result[i]);
        }
        _this14.setState({
          gameStatus: {
            redTotal: isBluesTurn ? 8 : 9,
            blueTotal: isBluesTurn ? 9 : 8,
            blueRevealed: 0,
            redRevealed: 0
          },
          isBluesTurn: isBluesTurn,
          cards: newShuffle
        });
      });
    }
  }, {
    key: "handleRevealClick",
    value: function handleRevealClick() {
      var _this15 = this;

      this.setState({
        isRevealButtonOn: !this.state.isRevealButtonOn
      }, function () {
        return console.log(_this15.state.isRevealButtonOn);
      });
    }
  }, {
    key: "handleRestartSubmit",
    value: function handleRestartSubmit(valueList) {
      this.fetchWords("/collections/" + valueList);
    }
  }, {
    key: "handleCardClick",
    value: function handleCardClick(indexRow, indexCol) {
      var _this16 = this;

      newCards = this.state.cards.slice();
      newCards[indexRow][indexCol].isRevealed = true;
      var color = newCards[indexRow][indexCol].color;
      var currentBlueNumber = this.state.gameStatus.blueRevealed;
      var currentRedNumber = this.state.gameStatus.redRevealed;
      this.setState({
        gameStatus: {
          blueRevealed: color === 'blue' ? currentBlueNumber + 1 : currentBlueNumber,
          redRevealed: color === 'red' ? currentRedNumber + 1 : currentRedNumber,
          redTotal: this.state.gameStatus.redTotal,
          blueTotal: this.state.gameStatus.blueTotal
        },
        cards: newCards
      }, function () {
        return console.log(_this16.state.gameStatus);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement(
            "h1",
            null,
            "Codebreakers"
          ),
          React.createElement(
            "h5",
            null,
            "(a.k.a. Codenames)"
          )
        ),
        React.createElement(Board, {
          isRevealButtonOn: this.state.isRevealButtonOn,
          handleCardClick: this.handleCardClick,
          cards: this.state.cards }),
        React.createElement(InfoBoard, {
          isBluesTurn: this.state.isBluesTurn,
          handleRevealClick: this.handleRevealClick
          // handleSkipClick={this.handleSkipClick}
          // handleRestartClick={this.handleRestartClick}
          , cards: this.state.cards,
          gameStatus: this.state.gameStatus }),
        React.createElement(AddWords, { handleRestartSubmit: this.handleRestartSubmit }),
        React.createElement(Rules, null)
      );
    }
  }]);

  return Game;
}(React.Component);

ReactDOM.render(React.createElement(Game, null), document.getElementById('app'));

// winning message + logic :
// if black other team won, if no cards left red or blue, team won

// mesage for if yellow -> other team's turn

// adding hints
//# sourceMappingURL=app.js.map