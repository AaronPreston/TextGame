var presscheck, questcheck;

start = function() {

  game.output = "YOU ARE LOOKING TO TRAIN WITH THE <span class='name'>BOAR CLAN</span>, AN ELITE GROUP OF WARRIORS. YOU WERE SUGGESTED TO HEAD NORTH TO THE NEAREST TOWN.";

  game.quest = 'FIND BAY VILLAGE';

  game.option.a = "TALK TO A VILLAGER NEARBY";
  game.option.b = "HUNT FOR FOOD";
  game.option.c = "";
  game.option.d = "";


  quest_pos[0] = 225;
  quest_pos[1] = 177;


  presscheck = setInterval(function() {
    if(player.x === quest_pos[0] && player.y === quest_pos[1]) {
      player.canMove.up = false;
      player.canMove.down = false;
      player.canMove.right = false;
      player.canMove.left = false;

      game.output = "<span class='quest'>FIND BAY VILLAGE</span> QUEST COMPLETE! + 25 XP! WOULD YOU LIKE TO ENTER BAY VILLAGE?<br> ";
      player.found.town.bay_village = true;
      player.quests.completed.find_bay_village = true;
      quest_pos[0] = -10;
      quest_pos[1] = -10;
      player.xp += 25;
      game.quest = 'NONE';

      setTimeout(function() {
        clearPressCheck();
        bayVillage();
      }, 5000);
    }

    if(game.option.pressed.a) {
      clearPressCheck();

    }
    if(game.option.pressed.b) {
      clearPressCheck();

    }
    if(game.option.pressed.c) {
      clearPressCheck();

    }
    if(game.option.pressed.d) {
      clearPressCheck();

    }
  }, 16);
}



bayVillage = function() {
  player.canMove.up = false;
  player.canMove.down = false;
  player.canMove.right = false;
  player.canMove.left = false;

  game.output = 'YOU ARE IN BAY VILLAGE.';
  if(player.quests.completed.find_bay_village && player.quests.completed.earn_your_sword === false) {
    setTimeout(function() {
      game.output = "A VILLAGER WALKS UP TO YOU. <br><br> <span class='name'>VILLAGER</span>: HELLO, ARE YOU RUNNING THROUGH TOWN? COULD YOU DELIVER THIS <span class='item'>LETTER</span> TO MY FATHER OVER IN <span class='name'>BLITTON</span>? <br><br> I WILL REWARD YOU WITH A <span class='item'>SWORD</span>!";

      game.option.a = 'YES';
      game.option.b = 'NO';

      presscheck = setInterval(function() {
        if(game.option.pressed.a) {
          clearPressCheck();
          game.quest = 'EARN YOUR SWORD';
          leaveBayVillage();
          earnYourSword();
        }

        if(game.option.pressed.b) {
          clearPressCheck();
          leaveBayVillage();
          game.output = 'YOU ARE TRAVELING THE LAND. TRY GOING TO A VILLAGE TO SEARCH FOR A QUEST.';
        }
      }, 16);
    }, 4000);
  }
}

leaveBayVillage = function() {
  player.canMove.up = true;
  player.canMove.down = true;
  player.canMove.left = true;
  player.canMove.right = true;
}

earnYourSword = function() {
  game.quest = 'EARN YOUR SWORD';
  game.output = "HEAD OVER TO <span class='name'>BLITTON</span> TO DELIVER THE <span class='item'>LETTER</span>.";
  quest_pos[0] = 60;
  quest_pos[1] = 177;
  questcheck = setInterval(function() {
    if(player.x === quest_pos[0] && player.y === quest_pos[1]) {
      game.output = 'YOU ARE NOW IN BLITTON';
    };
  }, 16);
}
