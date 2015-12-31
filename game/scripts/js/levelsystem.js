checkXP = function() {
  if(player.level === 1 && player.xp >= 100) {
    player.xp -= 100;
    player.level = 2;
  } else if(player.level === 2 && player.xp >= 220) {
    player.xp -= 220;
    player.level = 3;
  }
}
