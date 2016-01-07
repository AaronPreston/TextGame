var empty = function() {};

var player = {
  x: 240,
  y: 210,
  hp: 100,
  xp: 0,
  level: 1,
  encounter: {
    chance: 25
  },

  attack: 14,

  last: {
    x: 0,
    y: 0
  },

  can: {
    move: {
      up: true,
      right: true,
      down: true,
      left: true,

      all: function(bool) {
        if(bool === true) {
          player.can.move.up = true;
          player.can.move.right = true;
          player.can.move.down = true;
          player.can.move.left = true;
        } else if(bool === false) {
          player.can.move.up = false;
          player.can.move.right = false;
          player.can.move.down = false;
          player.can.move.left = false;
        }
      }
    }
  },

  current: {
    quest: null,
    town: null
  },

  found: {
    town: {
      bay_village: false
    }
  },

  in: {
    town: {
      bay_village: false
    }
  }
}

var game = {
  output: '',

  option: {
    a: '',
    b: '',
    c: '',
    d: ''
  },

  element: {
    option: {
      a: document.getElementById('option_1'),
      b: document.getElementById('option_2'),
      c: document.getElementById('option_3'),
      d: document.getElementById('option_4')
    },

    object: document.getElementById('object')
  },

  town: {
    loop: empty,
    leave: function(pos) {
      if(pos === 'left') {
        player.x -= 3;
      } else if(pos === 'up') {
        player.y -= 3;
      } else if(pos === 'right') {
        player.x += 3;
      } else if(pos === 'down') {
        player.y += 3;
      } else {
        player.x -= 3;
      }

      player.can.move.up = true;
      player.can.move.right = true;
      player.can.move.left = true;
      player.can.move.down = true;

      game.output = 'YOU HAVE LEFT <span class="name">' +  player.current.town + '</span>.';
      player.current.town = null;

      game.town.loop = empty;
    }
  },

  quest: {
    loop: function() { }
  },

  random: function(val) {
    return Math.floor(Math.random() * val) + 1;
  }
}

var mouse = {
  x: null,
  y: null
}


Quest = function() {
  this.name;
  this.x;
  this.y;
  this.xp_rew;
  this.complete = false;
  this.quest;
  this.loop;
}

var game_update_loop = setInterval(function() {
  game.town.loop();
  game.quest.loop();

  checkXP();
  document.getElementById('quest').innerHTML = player.current.quest;
  document.getElementById('health').innerHTML = player.hp;
  document.getElementById('xp').innerHTML = player.xp;
  document.getElementById('lvl').innerHTML = player.level;

  document.getElementById('output').innerHTML = game.output;

  document.getElementById('option_1_text').innerHTML = game.option.a;
  document.getElementById('option_2_text').innerHTML = game.option.b;
  document.getElementById('option_3_text').innerHTML = game.option.c;
  document.getElementById('option_4_text').innerHTML = game.option.d;

  fight.loop();

}, 32);
