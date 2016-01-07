var enc_, enemy_pick;

encounter = function() {
  enc_ = game.random(1000);

  if(enc_ <= player.encounter.chance) {
    enemy_pick = game.random(10);
    if(enemy_pick <= 10) {
      fight.soldier();
    }
  }
}

var enemy = {
  soldier: {
    name: 'ENEMY SOLDIER',
    hp: 30,
    xp_give: 30,
    attack: {
      min: 3,
      max: 11
    }
  }
}

var fight = {
  turn: 0,

  loop: function() { },

  soldier: function() {
    player.can.move.all(false);

    game.output = 'YOU SPOT AN <span class="name">' + enemy.soldier.name + '</span>! WHAT WOULD YOU LIKE TO DO?';
    game.option.a = 'ATTACK';
    game.option.b = 'HEAL';
    game.option.c = 'CHARGE ATTACK';
    game.option.d = 'LEAVE BATTLE';

    game.element.option.a.onclick = function() {
      game.output = 'YOU DID ' + player.attack + ' DAMAGE!';
    }

    fight.loop = function() {

    }
  }
}
