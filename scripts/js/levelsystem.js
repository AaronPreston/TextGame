levelCheck = function() {
  if(player.level === 1 && player.xp >= 25) {
    player.xp = (player.xp - 25);
    player.level = 2;
  } else if(player.level === 2 && player.xp >= 50) {
    player.xp = (player.xp - 50);
    player.level = 3;
  } else if(player.level === 3 && player.xp >= 75) {
    player.xp = (player.xp - 75);
    player.level = 4;
  }


  if(player.xp < 0) {
    player.xp = 0;
  }
}
