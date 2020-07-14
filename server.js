const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.listen(port, () => console.log(`Listening at http://localhost:${port}`))

const db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'codenames'
});

db.connect();

app.get('/getwords', (req, res) => {
  var sql = `SELECT * FROM vocabulary ORDER BY RAND() LIMIT 25`;

  db.query(sql, (err, result) => {
    if (err) { console.log(err) }
    var resultWithColors = addColor(result);
    console.log('rWc', resultWithColors);
    res.send(resultWithColors);
  })

});

var addColor = function (obj) {
  var teams = ['red', 'blue'];
  var startTeam = teams[Math.floor(Math.random * 2)];
  if (teams === 'red') {
    var colorObj = {
      'yellow': 7,
      'red': 9,
      'blue': 8,
      'black': 1
    }
    // obj[isBluesTurn] = false;
  } else {
    var colorObj = {
      'yellow': 7,
      'red': 8,
      'blue': 9,
      'black': 1
    }
    // obj[isBluesTurn] = true;
  }

  var appendColor = function (obj) {
    var colors = Object.keys(colorObj);
    for (var i = 0; i < 25; i++) {
      var newColor = colors[Math.floor(Math.random() * colors.length)];
      obj[i].color = newColor;
      colorObj[newColor]--;
      if (colorObj[newColor] === 0) {
        var index = colors.indexOf(newColor);
        var firstArr = colors.slice(0, index);
        var secondArr = colors.slice(index + 1);
        colors = [...firstArr, ...secondArr];
      }
    }
  }
  appendColor(obj);

  return obj;
}



// var getNewColor = function () {
//   var colors = ['red', 'blue', 'yellow', 'black']
//   colors[Math.floor(Math.random() * 4)];
// }