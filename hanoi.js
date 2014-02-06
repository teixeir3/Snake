(function (root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  // var readline = require('readline');
//   var READER = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

  var Game = Hanoi.Game = function () {
    this.towers = [[3, 2, 1], [], []];
  };

  Game.prototype.turn = function () {

  }

  Game.prototype.isWon = function () {
    // move all the discs to the last tower
    return (this.towers[2].length == 3) || (this.towers[1].length == 3);
  };

  Game.prototype.isValidMove = function (startTowerIdx, endTowerIdx) {
    var startTower = this.towers[startTowerIdx];
    var endTower = this.towers[endTowerIdx];

    if (startTower.length === 0) {
      return false;
    } else if (endTower.length == 0) {
      return true;
    } else {
      var topStartDisc = startTower[startTower.length - 1];
      var topEndDisc = endTower[endTower.length - 1];
      return topStartDisc < topEndDisc;
    }
  };

  Game.prototype.move = function (startTowerIdx, endTowerIdx) {
    if (this.isValidMove(startTowerIdx, endTowerIdx)) {
      this.towers[endTowerIdx].push(this.towers[startTowerIdx].pop());
      return true;
    } else {
      return false;
    }
  };

  Game.prototype.run = function () {
    var game = this;


    // READER.question("Enter a starting tower: ",function (start) {
//       var startTowerIdx = parseInt(start);
//       READER.question("Enter an ending tower: ", function (end) {
//         var endTowerIdx = parseInt(end);
//         game.takeTurn(startTowerIdx,endTowerIdx);
      // });
    // });
  };

  Game.prototype.takeTurn = function (start,end){
    var game = this;

    if (game.move(start,end)) {

      if (game.isWon()) {
        alert("You win!");

      }
      return true;
    } else {
      return false;
    }
  }

  var TowersUI = Hanoi.TowersUI = function(game) {
    this.game = game;
    var that = this;
    that.fromPile = -1;

    $(document).ready(function() {
      $('.pile').click(function() {

        //$('.pile').eq(0).css('background','black');
        if (that.fromPile != -1) { //second click
          that.toPile = $(this).index()-1;
          //alert(that.toPile);

          if (game.takeTurn(that.fromPile,that.toPile)) {
            console.log("Valid move");
              that.render(that.fromPile,that.toPile);
          } else {
            console.log("Invalid move");
          }

          console.log(game.towers);


          ///after everything is set
          that.fromPile = -1;
        } else {
          that.fromPile = $(this).index()-1;

        }


      });
    });
  }

  TowersUI.prototype.render = function(from,to) {
    //first child of pile.
    //alert(from + " " + to);
    var $from_pile = $('.pile').eq(from);
//    var $from_block = $($from_pile)
    //$from_pile:nth-child(1);
    var $from_block = $from_pile.children("div:first");
    //$('.disc').eq(0);
    var $to_pile = $('.pile').eq(to);

    $from_block.prependTo($to_pile);
    //$(block).prependTo($piles[to]);


    //var $block = $('$piles[' + from + ']:nth-child(1)')
    //'.pile3 :nth-child(1)'

    //block        //pile




  }
    //
  // var Game = Hanoi.Game = function () {
  //   this.towers = [[3, 2, 1], [], []];
  // };
})(this);

// this.Hanoi.Game is a constructor function, so we instantiate a new object, then run it.

var Game = new this.Hanoi.Game();
Game.run();
