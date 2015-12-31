var town = {
  bay_village: function() {
      game.output = 'YOU ARE IN <span class="name">BAY VILLAGE</span>. YOU MAY LOOK FOR QUESTS, TALK TO VILLAGERS, AND SHOP.';
      game.option.a = '';
      game.option.b = '';
      game.option.c = '';
      game.option.d = 'LEAVE';
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
}

start.loop = setInterval(function() {
  if(player.x === start.x && player.y === start.y) {
    player.xp += start.xp_rew;
    player.found.town.bay_village = true;
    clearInterval(start.loop);
  }
}, 16);
