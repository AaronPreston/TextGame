var town = {
  bay_village: function() {
      player.current.town = 'BAY VILLAGE';
      game.output = 'YOU ARE IN <span class="name">BAY VILLAGE</span>. YOU MAY LOOK FOR QUESTS, TALK TO VILLAGERS, AND SHOP.';
      game.option.a = '';
      game.option.b = '';
      game.option.c = '';
      game.option.d = 'LEAVE';

      player.can.move.up = false;
      player.can.move.right = false;
      player.can.move.down = false;
      player.can.move.left = false;

      game.town.loop = function() {
        console.log('Test');
      }

      game.element.option.d.onclick = function() {
        game.town.leave('left');
        player.in.town.bay_village = false;
        game.element.option.d.onclick = function() { };
      }
  }
}

var start = new Quest();
start.name = 'FIND BAY VILLAGE';
start.x = 225;
start.y = 177;
start.xp_rew = 50;
start.quest = function() {
  player.current.quest = start.name;

  game.output = 'FIND <span class="name">BAY VILLAGE</span> ON THE MAP BY USING THE NAVIGATION ARROWS.';

  player.xp += start.xp_rew;
  player.found.town.bay_village = true;
}
