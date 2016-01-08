var enc_, enemy_pick;

encounter = function() {
  game.old.output = game.output;
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

    game.output = 'YOU SPOT AN <span class="name">' + enemy.soldier.name + '</span>! WHAT WOULD YOU LIKE TO DO?<br><br>ENEMY HP: ' + enemy.soldier.hp;
    game.option.a = 'ATTACK';
    game.option.b = 'HEAL';
    game.option.c = 'CHARGE ATTACK';
    game.option.d = 'LEAVE BATTLE';

    game.element.option.a.onclick = function() {
      if(fight.turn === 0) {
        enemy.soldier.hp -= player.attack;
        game.output = 'YOU DID ' + player.attack + ' DAMAGE! <br><br>ENEMY HP: ' + enemy.soldier.hp;
        setTimeout(function() {
          fight.turn = 1;
        }, 1500);
      }
    }

    game.element.option.d.onclick = function() {
      game.output = game.old.output;
      player.can.move.all(true);
    }

    fight.loop = function() {
      if(fight.turn === 1) {
        player.hp -= enemy.soldier.attack.max;
        game.output = '<span id="name">' + enemy.soldier.name + '</span> DID ' + enemy.soldier.attack.max + ' DAMAGE TO YOU!';
        fight.turn = 0;
        setTimeout(fight.soldier, 1500);
      }
    }
  }
}
