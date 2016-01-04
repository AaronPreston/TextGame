checkXP = function() {
  if(player.level === 1 && player.xp >= 100) {
    level_color_change();
    player.xp -= 100;
    player.level = 2;
  } else if(player.level === 2 && player.xp >= 220) {
    level_color_change();
    player.xp -= 220;
    player.level = 3;
  }
}


level_color_change = function() {
  document.getElementById('lvl').style.color = 'lightgreen';
  setTimeout(function() {
    document.getElementById('lvl').style.color = 'white';
  }, 500);
}

xp_color_change = function() {
  document.getElementById('xp').style.color = 'lightgreen';
  setTimeout(function() {
    document.getElementById('xp').style.color = 'white';
  }, 500);
}
