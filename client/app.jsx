class Card extends React.Component {
  render() {
    var classes = 'card';
    if (this.props.isRevealButtonOn) {
      classes += ` ${this.props.card.color}b`;
    }
    if (this.props.card.isGuessed) {
      classes += ` ${this.props.card.color}`;
    }
    return (
      <td className={classes} onClick={(e) => {
        e.preventDefault();
        this.props.handleCardClick(this.props.indexRow, this.props.indexCol)
      }
      }>{this.props.card.word}</td>
    )
  }
}

class Board extends React.Component {
  render() {
    return (
      <table className="board">
        <tbody>
          {this.props.cards.map((row, indexRow) => {
            return (
              <tr key={indexRow}>
                {row.map((card, indexCol) => <Card
                  card={card}
                  key={indexRow * 5 + indexCol}
                  isRevealButtonOn={this.props.isRevealButtonOn}
                  indexRow={indexRow}
                  indexCol={indexCol}
                  handleCardClick={this.props.handleCardClick} />)}
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

class InfoBoard extends React.Component {
  render() {
    return (
      <div className="flexcontainer">
        <Player team='Blue' />
        <Info
          isBluesTurn={this.props.isBluesTurn}
          handleRevealClick={this.props.handleRevealClick}
          handleSkipClick={this.props.handleSkipClick}
          handleRestartClick={this.props.handleRestartClick}/>
        <Player team='Red' />
      </div>
    )
  }
}

class Player extends React.Component {
  render() {
    return (
        <div className="scoreboard">
          <h3>{this.props.team} Team's Scores:</h3>
          <table>
            <tbody>
              <tr>
                <td>All cards:</td>
                <td>9</td>
              </tr>
              <tr>
                <td>Remaining:</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
          {/* <p>Hints</p>
          <ul>
            <li>color</li>
            <li>animal</li>
          </ul>
          <form>
            <label for="hint">Add a hint:</label>
            <input type="text" id="hint" name="hint"/><br/>
            <label for="numberofwords">Number of words:</label>
            <input type="text" id="numberofwords" name="numberofwords"/>
            <input type="submit" value="Submit"/>
          </form> */}
        </div>
    )
  }
}

class Info extends React.Component {
  render() {
    return (
      <div className="infoboard">
        <h3 className="playerturn">Team {this.props.isBluesTurn ? 'Blue' : 'Red'}'s turn</h3>
        <button className="skipbutton" onClick={(e) => {
          e.preventDefault();
          this.props.handleSkipClick();
        }}>Skip</button><br />
        <button className="revealbutton" onClick={(e) => {
          e.preventDefault();
          this.props.handleRevealClick();
        }}>Reveal</button><br />
        <button className="restartbutton" onClick={(e) => {
          e.preventDefault();
          this.props.handleRestartClick();
        }}>Restart</button>
      </div>
    )
  }
}

class Rules extends React.Component {
  render() {
    return (
      <div className="rules">
        <h4>Rules</h4>
        <p>
        Codenames is a game of guessing which codenames (i.e., words) in a set are related to a hint-word given by another player.<br/><br/>Players split into two teams: red and blue. One player of each team is selected as the team's spymaster; the others are field operatives.<br/><br/>Twenty-five Codename cards, each bearing a word, are laid out in a 5×5 rectangular grid, in random order. A number of these words represent red agents, a number represent blue agents, one represents an assassin, and the others represent innocent bystanders.<br/><br/>The teams' spymasters are given a randomly-dealt map card showing a 5×5 grid of 25 squares of various colors, each corresponding to one of the code name cards on the table. Teams take turns. On each turn, the appropriate spymaster gives a verbal hint about the words on the respective cards. Each hint may only consist of one single word and a number. The spymaster gives a hint that is related to as many of the words on his/her own agents' cards as possible, but not to any others – lest they accidentally lead their team to choose a card representing an innocent bystander, an opposing agent, or the assassin.<br/><br/>The hint's word can be chosen freely, as long as it is not (and does not contain) any of the words on the code name cards still showing at that time. Code name cards are covered as guesses are made.<br/><br/>The hint's number tells the field operatives how many words in the grid are related to the word of the clue. It also determines the maximum number of guesses the field operatives may make on that turn, which is the hint's number plus one. Field operatives must make at least one guess per turn, risking a wrong guess and its consequences. They may also end their turn voluntarily at any point thereafter.<br/><br/>After a spymaster gives the hint with its word and number, their field operatives make guesses about which code name cards bear words related to the hint and point them out, one at a time. When a code name card is pointed out, the spymaster covers that card with an appropriate identity card – a blue agent card, a red agent card, an innocent bystander card, or the assassin card – as indicated on the spymasters' map of the grid. If the assassin is pointed out, the game ends immediately, with the team who identified him losing. If an agent of the other team is pointed out, the turn ends immediately, and that other team is also one agent closer to winning. If an innocent bystander is pointed out, the turn simply ends.<br/><br/>The game ends when all of one team's agents are identified (winning the game for that team),[3] or when one team has identified the assassin (losing the game). Source: <a href="https://en.wikipedia.org/wiki/Codenames_(board_game)">Wikipedia</a>
        </p>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBluesTurn: true,
      cards: [],
      isRevealButtonOn: false
    }
    this.handleRevealClick = this.handleRevealClick.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleSkipClick = this.handleSkipClick.bind(this);
    this.handleRestartClick = this.handleRestartClick.bind(this);
  }

  componentDidMount() {
    fetch('/getwords', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(result => {
      console.log('result', result)
      var newShuffle = [[], [], [], [], []]
      for (var i = 0; i < result.length; i++) {
        result[i].isGuessed = false;
        if (i < 5) {
          newShuffle[0].push(result[i]);
        } else if (i < 10) {
          newShuffle[1].push(result[i]);
        } else if (i < 15) {
          newShuffle[2].push(result[i]);
        } else if (i < 20) {
          newShuffle[3].push(result[i]);
        } else {
          newShuffle[4].push(result[i]);
        }
      }
      this.setState({
        // isBluesTurn: result.isBluesTurn,
        cards: newShuffle
      }, () => console.log(this.state.cards));
    })
  }

  handleRevealClick() {
    this.setState({
      isRevealButtonOn: !this.state.isRevealButtonOn
    }, () => console.log(this.state.isRevealButtonOn))
  }

  handleSkipClick() {
    this.setState({
      isBluesTurn: !this.state.isBluesTurn
    }, () => console.log(this.state.isBluesTurn))
  }

  handleRestartClick() {
    console.log('shuffle a new board with new words and new colors and set isGuessed to false and set state to new board');
  }

  handleCardClick(indexRow, indexCol) {
    console.log(indexRow, indexCol);
    console.log(this.state.cards[indexRow][indexCol])
    newCards = this.state.cards.slice();
    newCards[indexRow][indexCol].isGuessed = true;
    this.setState({
      cards: newCards
    }, () => console.log(this.state.cards));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Codenames</h1>
        </div>
        <Board
          isRevealButtonOn={this.state.isRevealButtonOn}
          handleCardClick={this.handleCardClick}
          cards={this.state.cards} />
        <InfoBoard
          isBluesTurn={this.state.isBluesTurn}
          handleRevealClick={this.handleRevealClick}
          handleSkipClick={this.handleSkipClick}
          handleRestartClick={this.handleRestartClick}
          cards={this.state.cards} />
        <Rules />
      </div>
    )
  }
}

ReactDOM.render(<Game />, document.getElementById('app'));