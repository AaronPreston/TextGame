var canvas = document.getElementById('map'),
    c = canvas.getContext('2d');


// Create map
var map = new Image();
map.onload = function() {
  c.drawImage(this, 0, 0);
};

map.src = 'assets/map.png';


// Engine
var game = setInterval(function() {
  // Draw map
  c.fillStyle = '#000099';
  c.fillRect(0, 0, 300, 240);

  c.drawImage(map, 0, 0);

  // Player positioning check
  posCheck();

  player.last.x = player.x;
  player.last.y = player.y;

  // Put player in the world
  c.fillStyle = 'red';
  c.fillRect(player.x, player.y, 3, 3);


}, 16);




// Controls

document.getElementById('nav_up').onclick = function() {
  if(player.can.move.up) {
    player.y -= 3;
  }
}

document.getElementById('nav_right').onclick = function() {
  if(player.can.move.right) {
    player.x += 3;
  }
}

document.getElementById('nav_down').onclick = function() {
  if(player.can.move.down) {
    player.y += 3;
  }
}

document.getElementById('nav_left').onclick = function() {
  if(player.can.move.left) {
    player.x -= 3;
  }
}
