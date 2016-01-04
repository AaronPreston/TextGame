var canvas = document.getElementById('map'),
    c = canvas.getContext('2d');

canvas.onmousedown = function(e) {
  mouse.x = e.offsetX;
  mouse.y = e.offsetY;

  if(mouse.x >= 220 && mouse.x <= 233 && mouse.y >= 172 && mouse.y <= 185 && (player.found.town.bay_village || player.current.quest === 'FIND BAY VILLAGE')) {
    game.element.object.innerHTML = 'BAY VILLAGE';
  } else {
    game.element.object.innerHTML = '';
  }
}

document.onmouseup = function() {
  setTimeout(function() {
    game.element.object.innerHTML = '';
  }, 1500);
}


// Create map
var map = new Image();
map.onload = function() {
  c.drawImage(this, 0, 0);
};

map.src = 'assets/map.png';

// Engine
var game_loop = setInterval(function(e) {
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

  if(player.current.quest === 'FIND BAY VILLAGE') {
    c.fillStyle = '#00FF00';
    c.fillRect(start.x, start.y, 3, 3);
  }

  if(player.found.town.bay_village) {
    c.fillStyle = '#00802b'
    c.fillRect(225, 177, 3, 3);
  }

  if(player.found.town.bay_village && player.x === 225 && player.y === 177 && player.in.town.bay_village === false) {
    player.in.town.bay_village = true;
    town.bay_village();
  }

}, 16);


start.quest();


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

one_two_three = function() {
  alert('Hello world!');
}

// Loading screen
setTimeout(function() {
  document.getElementById('load_overlay').innerHTML = 'LOADING..';
}, 200);

setTimeout(function() {
  document.getElementById('load_overlay').innerHTML = 'LOADING...';
}, 400);

setTimeout(function() {
  document.getElementById('load_overlay').innerHTML = 'LOADING..';
}, 600);

setTimeout(function() {
  document.getElementById('load_overlay').innerHTML = 'LOADING.';
}, 800);

setTimeout(function() {
  document.getElementById('load_overlay').parentNode.removeChild(document.getElementById('load_overlay'));
}, 1000);



// Click object description

document.getElementById('box_1').onmousedown = function() {
  game.element.object.innerHTML = 'WOODEN SWORD';
}
