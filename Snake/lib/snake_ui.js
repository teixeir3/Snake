(function() {
  var UI = window.SnakeUI = (window.SnakeUI || {});

  var View = UI.View = function(htmlEl) {
    this.$el = htmlEl; //does this in a $()?




  };

  var handleKeyEvent = function(event) {


    switch(event.keyCode) {
      case 37:
        this.board.snake.turn('W');
        break;
      case 38:
        this.board.snake.turn('N');
        break;
      case 39:
        this.board.snake.turn('E');
        break;
      case 40:
        this.board.snake.turn('S');
        break;
      // default:
      //   alert("WTF");
    }
  }

  View.prototype.render = function() {
    //

    var gridArray = this.board.render();
    var str = ""
    gridArray.forEach(function(row) {
      str += '<pre>'
      str += row.join(" ");
      str += '</pre><br>'
    })

    this.$el.html(str);

  };

  View.prototype.step = function() {
    this.board.snake.move();
    this.render();

  }


  View.prototype.start = function() {
    this.board = new window.SnakeGame.Board();

    var that = this;
    $(function() {            //handleKeyEvent(event).bind(this)
      $(document).on('keydown', handleKeyEvent.bind(that)

      // function(event) {
//         switch(event.keyCode) {
//           case 37:
//             that.board.snake.turn('W');
//             break;
//           case 38:
//             that.board.snake.turn('N');
//             break;
//           case 39:
//             that.board.snake.turn('E');
//             break;
//           case 40:
//             that.board.snake.turn('S');
//             break;
//           }
//
//       }

    );
    });

    //interval with #step.
    this.timerId = setInterval(function() {
      that.step();
    },1000);


  };



})();