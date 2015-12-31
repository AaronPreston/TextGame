var player = {
  x: 240,
  y: 210,
  hp: 100,
  xp: 0,
  level: 1,

  last: {
    x: 0,
    y: 0
  },

  can: {
    move: {
      up: true,
      right: true,
      down: true,
      left: true
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
  }
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
}, 32);
