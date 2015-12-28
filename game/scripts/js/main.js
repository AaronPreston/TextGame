var canvas = document.getElementById('map'),
    c = canvas.getContext('2d');

var quest_pos = [0, 0];

var player = {
  hp: 100,
  x: 240,
  y: 210,

  canMove: {
    up: true,
    down: true,
    left: true,
    right: true
  },

  last_x: 0,
  last_y: 0,

  hp: 100,
  xp: 0,
  level: 1,

  move: true,

  found: {
    town: {
      bay_village: false
    }
  },
  quests: {
    completed: {
      find_bay_village: false,
      earn_your_sword: false
    }
  }
}

var game = {
  output: '',

  quest: '',


  option: {
    a: '',
    b: '',
    c: '',
    d: '',

    pressed: {
      a: false,
      b: false,
      c: false,
      d: false
    }
  }




}

var move = false;

var map = new Image();
map.onload = function() {
  c.drawImage(this, 0, 0);
};


map.src = 'assets/map.png';


var gameLoop = setInterval(function() {
  c.fillStyle = '#000099';
  c.fillRect(0, 0, 300, 240);

  c.drawImage(map, 0, 0);


  document.getElementById('output').innerHTML = game.output;

  document.getElementById('quest').innerHTML = game.quest;

  document.getElementById('option_1').innerHTML = game.option.a;
  document.getElementById('option_2').innerHTML = game.option.b;
  document.getElementById('option_3').innerHTML = game.option.c;
  document.getElementById('option_4').innerHTML = game.option.d;

  document.getElementById('health').innerHTML = player.hp;
  document.getElementById('xp').innerHTML = player.xp;


  levelCheck();

  document.getElementById('lvl').innerHTML = player.level;






  if(player.found.town.bay_village) {
    c.fillStyle = '#ff8000';
    c.fillRect(225, 177, 3, 3);
  }




  if(player.hp <= 0) {
    player.hp = 0;
    game.output = 'YOU ARE DEAD';
    c.fillStyle = '00cc00';
    clearInterval(gameLoop);
  } else {
    c.fillStyle = '#e60000';
  }

  c.fillRect(player.x, player.y, 3, 3);




  c.fillStyle = '#00cc44';
  c.fillRect(quest_pos[0], quest_pos[1], 3, 3);

}, 32);










navUp = function() {
  if(player.move && player.canMove.up) {
    player.last_x = player.x;
    player.last_y = player.y;

    player.y -= 3;

    posCheck();

    player.move = false;
    setTimeout(function() {
      player.move = true;
    }, 500);
  }
}

navDown = function() {
  if(player.move && player.canMove.down) {
    player.last_x = player.x;
    player.last_y = player.y;

    player.y += 3;

    posCheck();

    player.move = false;
    setTimeout(function() {
      player.move = true;
    }, 500);
  }
}

navLeft = function() {
  if(player.move && player.canMove.left) {
    player.last_x = player.x;
    player.last_y = player.y;

    player.x -= 3;

    posCheck();

    player.move = false;
    setTimeout(function() {
      player.move = true;
    }, 500);
  }
}

navRight = function() {
  if(player.move && player.canMove.right) {
    player.last_x = player.x;
    player.last_y = player.y;

    player.x += 3;

    posCheck();

    player.move = false;
    setTimeout(function() {
      player.move = true;
    }, 500);
  }
}












optionOneClick = function() {
  game.option.pressed.a = true;
}

optionTwoClick = function() {
  game.option.pressed.b = true;
}

optionThreeClick = function() {
  game.option.pressed.c = true;
}

optionFourClick = function() {
  game.option.pressed.d = true;
}








clearPressCheck = function() {
  game.option.pressed.a = false;
  game.option.pressed.b = false;
  game.option.pressed.c = false;
  game.option.pressed.d = false;

  clearInterval(presscheck);
}


start();
