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

  function Info(props) {
    _classCallCheck(this, Info);

    var _this6 = _possibleConstructorReturn(this, (Info.__proto__ || Object.getPrototypeOf(Info)).call(this, props));

    _this6.state = {
      hintValue: '',
      isBluesHint: true
    }, _this6.handleHintInputChange = _this6.handleHintInputChange.bind(_this6);
    _this6.setHintPlayer = _this6.setHintPlayer.bind(_this6);
    return _this6;
  }

  _createClass(Info, [{
    key: "handleHintInputChange",
    value: function handleHintInputChange(event) {
      this.setState({
        hintValue: event.target.value
      });
    }
  }, {
    key: "setHintPlayer",
    value: function setHintPlayer(e) {
      this.setState({
        isBluesHint: e.target.value === 'Blue' ? true : false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      console.log('inside render', this.state.isBluesHint);
      if (this.props.gameStatus.redTotal === this.props.gameStatus.redRevealed) {
        var message = 'Red Team Won!';
      } else if (this.props.gameStatus.blueTotal === this.props.gameStatus.blueRevealed) {
        var message = 'Blue Team Won!';
      }
      return React.createElement(
        "div",
        { className: "infoboard" },
        React.createElement(
          "h3",
          { className: "statusmessage" },
          message
        ),
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
        React.createElement("br", null),
        React.createElement(
          "form",
          { id: "hint", onSubmit: function onSubmit(e) {
              e.preventDefault();
              _this7.props.handleHintSubmit(_this7.state.hintValue, _this7.state.isBluesHint);
            } },
          React.createElement(
            "label",
            { htmlFor: "hintinput" },
            "Add a hint:"
          ),
          React.createElement("input", {
            type: "text",
            id: "hintinput",
            name: "hintinput",
            value: this.state.hintValue,
            onChange: this.handleHintInputChange }),
          React.createElement("br", null),
          React.createElement(
            "div",
            { onChange: this.setHintPlayer },
            React.createElement("input", { type: "radio", value: "Red", name: "player" }),
            " Red",
            React.createElement("input", { type: "radio", value: "Blue", name: "player" }),
            " Blue"
          ),
          React.createElement("input", { type: "submit", value: "Submit" })
        )
      );
    }
  }]);

  return Info;
}(React.Component);

var InfoBoard = function (_React$Component5) {
  _inherits(InfoBoard, _React$Component5);

  function InfoBoard(props) {
    _classCallCheck(this, InfoBoard);

    var _this8 = _possibleConstructorReturn(this, (InfoBoard.__proto__ || Object.getPrototypeOf(InfoBoard)).call(this, props));

    _this8.state = {
      hintwords: {
        'Red': [],
        'Blue': []
      }
    };
    _this8.handleHintSubmit = _this8.handleHintSubmit.bind(_this8);
    return _this8;
  }

  _createClass(InfoBoard, [{
    key: "handleHintSubmit",
    value: function handleHintSubmit(word, isBluesHint) {
      if (isBluesHint) {
        var wordArray = this.state.hintwords['Blue'].slice();
        wordArray.push(word);
        this.setState({
          hintwords: {
            'Red': this.state.hintwords['Red'],
            'Blue': wordArray
          }
        });
      } else {
        var wordArray = this.state.hintwords['Red'].slice();
        wordArray.push(word);
        this.setState({
          hintwords: {
            'Red': wordArray,
            'Blue': this.state.hintwords['Blue']
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "flexcontainer" },
        React.createElement(Player, {
          team: "Blue",
          hintWords: this.state.hintwords['Blue'],
          gameStatus: this.props.gameStatus }),
        React.createElement(Info, {
          handleHintSubmit: this.handleHintSubmit,
          gameStatus: this.props.gameStatus,
          isBluesTurn: this.props.isBluesTurn,
          handleRevealClick: this.props.handleRevealClick
        }),
        React.createElement(Player, {
          team: "Red",
          hintWords: this.state.hintwords['Red'],
          gameStatus: this.props.gameStatus })
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
        ),
        React.createElement("br", null),
        React.createElement(
          "p",
          null,
          "Hints"
        ),
        React.createElement(
          "ul",
          { className: "hintwords" },
          this.props.hintWords.map(function (word) {
            return React.createElement(
              "li",
              null,
              word
            );
          })
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
      valueList: 'built-in',
      valueSelect: 'Rita1',
      valueWord: '',
      valueOwnCollection: ''
    }, _this10.handleWordListChange = _this10.handleWordListChange.bind(_this10);
    _this10.handleYourCollectionChange = _this10.handleYourCollectionChange.bind(_this10);
    _this10.handleCollectionChange = _this10.handleCollectionChange.bind(_this10);
    _this10.handleWordChange = _this10.handleWordChange.bind(_this10);
    return _this10;
  }

  _createClass(AddWords, [{
    key: "handleWordListChange",
    value: function handleWordListChange(event) {
      this.setState({
        valueList: event.target.value
      });
    }
  }, {
    key: "handleYourCollectionChange",
    value: function handleYourCollectionChange(event) {
      this.setState({
        valueOwnCollection: event.target.value
      });
    }
  }, {
    key: "handleCollectionChange",
    value: function handleCollectionChange(event) {
      this.setState({
        valueSelect: event.target.value
      });
    }
  }, {
    key: "handleWordChange",
    value: function handleWordChange(event) {
      this.setState({
        valueWord: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this11 = this;

      return React.createElement(
        "div",
        { className: "addwords-container" },
        React.createElement(
          "div",
          { className: "addwordsform" },
          React.createElement(
            "h4",
            null,
            "Add your own words (one at a time):"
          ),
          React.createElement(
            "form",
            { onSubmit: function onSubmit(e) {
                e.preventDefault();
                var word = _this11.state.valueWord;
                if (_this11.state.valueOwnCollection === '') {
                  var list = _this11.state.valueSelect;
                } else {
                  var list = _this11.state.valueOwnCollection;
                }
                _this11.props.handleAddWordSubmit(word, list);
              } },
            React.createElement(
              "label",
              null,
              "Name of your collection:",
              React.createElement("input", { type: "text", id: "collectionname", name: "collectionname", value: this.state.valueOwnCollection, onChange: this.handleYourCollectionChange })
            ),
            React.createElement("br", null),
            React.createElement(
              "label",
              null,
              "Or add to an existing list:",
              React.createElement(
                "select",
                { value: this.state.valueSelect, onChange: this.handleCollectionChange },
                this.props.collections.filter(function (obj) {
                  return obj.collection !== 'built-in';
                }).map(function (option, index) {
                  return React.createElement(
                    "option",
                    { key: index, value: option.collection },
                    option.collection
                  );
                })
              )
            ),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
              "label",
              null,
              "Word:",
              React.createElement("input", { type: "text", id: "addwords", name: "addwords", value: this.state.valueWord, onChange: this.handleWordChange })
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "submit", value: "Submit" })
          )
        ),
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
                _this11.props.handleRestartSubmit(_this11.state.valueList);
              } },
            React.createElement(
              "label",
              null,
              "Choose a list (>25 words):",
              React.createElement(
                "select",
                { value: this.state.valueList, onChange: this.handleWordListChange },
                this.props.collections.filter(function (obj) {
                  return obj.count > 25;
                }).map(function (option, index) {
                  return React.createElement(
                    "option",
                    { key: index, value: option.collection },
                    option.collection
                  );
                })
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

    var _this12 = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    _this12.state = {
      isBluesTurn: true,
      cards: [],
      isRevealButtonOn: false,
      gameStatus: {
        redTotal: 0,
        redRevealed: 0,
        blueTotal: 0,
        blueRevealed: 0
      },
      collections: [],
      isRestarted: 0
    };
    _this12.handleRevealClick = _this12.handleRevealClick.bind(_this12);
    _this12.handleCardClick = _this12.handleCardClick.bind(_this12);
    _this12.handleRestartSubmit = _this12.handleRestartSubmit.bind(_this12);
    return _this12;
  }

  _createClass(Game, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this13 = this;

      this.fetchWords('/getwords');
      fetch('/collections').then(function (response) {
        return response.json();
      })
      // .then(res => { console.log('res', res); return res; })
      .then(function (result) {
        _this13.setState({
          collections: result
        }, function () {
          return console.log(_this13.state.collections);
        });
      });
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
      this.setState({
        isRestarted: this.state.isRestarted + 1
      });
    }
  }, {
    key: "handleAddWordSubmit",
    value: function handleAddWordSubmit(word, list) {
      console.log(word, list);
      var data = { word: word, list: list };
      fetch('/addwords', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
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
          key: this.state.isRestarted
          // this forces react to create new instance and remount infoboard - hacky!!!!! needs better solution lifting the state up
          , isBluesTurn: this.state.isBluesTurn,
          handleRevealClick: this.handleRevealClick,
          cards: this.state.cards,
          gameStatus: this.state.gameStatus }),
        React.createElement(AddWords, {
          handleRestartSubmit: this.handleRestartSubmit,
          handleAddWordSubmit: this.handleAddWordSubmit,
          collections: this.state.collections }),
        React.createElement(Rules, null)
      );
    }
  }]);

  return Game;
}(React.Component);

ReactDOM.render(React.createElement(Game, null), document.getElementById('app'));

// More to do:
// fix the design - mobile first!!!
// refactor mostly addwords and handleinputchange functions - messy
// figure out a better way to delete hints when restart
// code for codemasters
// message if added words, refresh list
//# sourceMappingURL=app.js.map