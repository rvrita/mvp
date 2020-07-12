
class Card extends React.Component {
  render() {
    var classes = 'card';
    console.log('in card', this.props.isRevealed)
    if (this.props.isRevealed) {
      classes += ` ${this.props.color}b`;
    }
    return (
      <td className={classes}>{this.props.value}</td>
    )
  }
}

class Board extends React.Component {
  render() {
    return (
      <table className="board">
        <tbody>
          {this.props.words.map((row, indexRow) => {
            return (
              <tr key={indexRow}>
                {row.map((card, indexCol) => <Card
                  value={card}
                  key={indexRow * 6 + indexCol}
                  isRevealed={this.props.isRevealed} color={this.props.colors[indexRow][indexCol]} />)}
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
      <div className="infoboard">
        <div className="player">Team {this.props.isBluesTurn ? 'Blue' : 'Red'}'s turn</div>
        <button className="revealbutton" onClick={(e) => {
          e.preventDefault();
          this.props.handleRevealClick()
        }}>Reveal</button>
      </div>
    )
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBluesTurn: true,
      words: [
        ['ball', 'fish', 'track', 'maple', 'pole'],
        ['sink', 'apple', 'spell', 'kid', 'cab'],
        ['lemon', 'scientist', 'whip', 'coffee', 'cat'],
        ['leaf', 'dance', 'princess', 'net', 'Europe'],
        ['water', 'yellow', 'bridge', 'watermelon', 'tea']
      ],
      colors: [
        ['blue', 'blue', 'red', 'yellow', 'yellow'],
        ['red', 'black', 'blue', 'red', 'blue'],
        ['red', 'blue', 'red', 'yellow', 'yellow'],
        ['blue', 'blue', 'red', 'blue', 'yellow'],
        ['yellow', 'yellow', 'red', 'blue', 'red']
      ],
      isRevealed: false
    }
    this.handleRevealClick = this.handleRevealClick.bind(this);
  }

  handleRevealClick() {
    this.setState({
      isRevealed: !this.state.isRevealed
    }, () => console.log(this.state.isRevealed))
  }

  render() {
    return (
      <div>
        <div>
          <h1>Codenames</h1>
        </div>
        <Board words={this.state.words} isRevealed={this.state.isRevealed} colors={this.state.colors} />
        <InfoBoard
          isBluesTurn={this.state.isBluesTurn}
          handleRevealClick={this.handleRevealClick} />
      </div>
    )
  }
}


ReactDOM.render(<Game />, document.getElementById('app'));