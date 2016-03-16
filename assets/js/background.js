  var canvas = null;
  var context = null;
  var cols = 0;
  var rows = 0;
  var colors = [222, 251, 249, 248, 241, 240];
  var triangleColors = [];
  var destColors = [];
  
  function init(){
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');
    this.cols = Math.floor(document.body.clientWidth / 24);
    this.rows = Math.floor(document.body.clientHeight / 24) + 1;
    
    this.canvas.width = document.body.clientWidth;
    this.canvas.height = document.body.clientHeight;
    
    this.drawBackground();
    this.animate();
  };

  // resizeCanvas: function() {
  //   htmlCanvas.width = window.innerWidth;
  //   htmlCanvas.height = window.innerHeight;
  //   redraw();
  // },
  
  function drawTriangle(x, y, color, inverted){
    inverted = inverted == undefined ? false : inverted;

    this.context.beginPath();
    this.context.moveTo(x, y);
    this.context.lineTo(inverted ? x - 22 : x + 22, y + 11);
    this.context.lineTo(x, y + 22);
    this.context.fillStyle = "rgb("+color+","+color+","+color+")";
    this.context.fill();
    this.context.closePath();
  };
  
  function getColor(){    
    return this.colors[(Math.floor(Math.random() * 6))];
  };
  
  function drawBackground(){
    var eq = null;
    var x = this.cols;
    var destY = 0;
    var color, y;
    
    while(x--){
      eq = x % 2;
      y = this.rows;

      while(y--){
        destY = Math.round((y-0.5) * 24);

        this.drawTriangle(x * 24 + 2, eq == 1 ? destY : y * 24, this.getColor());
        this.drawTriangle(x * 24, eq == 1 ? destY  : y * 24, this.getColor(), true);
      }
    }
  };
  
  function animate(){
    var me = this;

    var x = Math.floor(Math.random() * this.cols);
    var y = Math.floor(Math.random() * this.rows);
    var eq = x % 2;

    if (eq == 1) {
      me.drawTriangle(x * 24, Math.round((y-0.5) * 24) , this.getColor(), true);
    } else {
      me.drawTriangle(x * 24 + 2, y * 24, this.getColor());
    }

    setTimeout(function(){    
      me.animate.call(me);
    }, 10);
  };

$(window).resize(function() {
  // Dots = [];
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  init();
});

init();

// var canvas = $('canvas')[0];
// var context = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// var Dots = [];
// var colors = ['#FF9900', '#424242', '#BCBCBC', '#3299BB'];
// var maximum = 70;

// function Initialize() {
//   GenerateDots();

//   Update();
// }

// function Dot() {
//   this.active = true;

//   this.diameter = Math.random() * 7;

//   this.x = Math.round(Math.random() * canvas.width);
//   this.y = Math.round(Math.random() * canvas.height);

//   this.velocity = {
//     x: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.7,
//     y: (Math.random() < 0.5 ? -1 : 1) * Math.random() * 0.7
//   };

//   this.alpha = 0.1;
//   this.hex = colors[Math.round(Math.random() * 3)];
//   this.color = HexToRGBA(this.hex, this.alpha);
// }

// Dot.prototype = {
//   Update: function() {
//     if(this.alpha < 0.8) {
//       this.alpha += 0.01;
//       this.color = HexToRGBA(this.hex, this.alpha);
//     }

//     this.x += this.velocity.x;
//     this.y += this.velocity.y;

//     if(this.x > canvas.width + 5 || this.x < 0 - 5 || this.y > canvas.height + 5 || this.y < 0 - 5) {
//       this.active = false;
//     }
//   },

//   Draw: function() {
//     context.fillStyle = this.color;
//     context.beginPath();
//     context.arc(this.x, this.y, this.diameter, 0, Math.PI * 2, false);
//     context.fill();
//   }
// }

// function Update() {
//   GenerateDots();

//   Dots.forEach(function(Dot) {
//     Dot.Update();
//   });

//   Dots = Dots.filter(function(Dot) {
//     return Dot.active;
//   });

//   Render();
//   requestAnimationFrame(Update);
// }

// function Render() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   Dots.forEach(function(Dot) {
//     Dot.Draw();
//   });
// }

// function GenerateDots() {
//   if(Dots.length < maximum) {
//     for(var i = Dots.length; i < maximum; i++) {
//       Dots.push(new Dot());
//     }
//   }

//   return false;
// }

// function HexToRGBA(hex, alpha) {
//   var red = parseInt((TrimHex(hex)).substring(0, 2), 16);
//   var green = parseInt((TrimHex(hex)).substring(2, 4), 16);
//   var blue = parseInt((TrimHex(hex)).substring(4, 6), 16);

//   return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + alpha + ')';
// }

// function TrimHex(hex) {
//   return (hex.charAt(0) == "#") ? hex.substring(1, 7) : h;
// }

// $(window).resize(function() {
//   Dots = [];
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });

// Initialize();