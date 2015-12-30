var player = {
  x: 200,
  y: 180,
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
}

Quest = function() {
  this.name;
  this.x;
  this.y;
  this.xp_rew;
  this.complete = false;
  this.quest;
}
