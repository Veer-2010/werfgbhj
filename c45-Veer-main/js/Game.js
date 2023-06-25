class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }

  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    kite1 = createSprite(width / 2 - 50, height - 100);
    kite1.addImage("kite1", kite1_img);
    kite1.scale = 0.07;

    kite2 = createSprite(width / 2 + 100, height - 100);
    kite2.addImage("kite2", kite2_img);
    kite2.scale = 0.07;

    kites = [kite1, kite2];
  }

  handleElements() {
    form.hide();
   
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
    

      var index=0;
      for(var plr in allPlayers){
        index=index+1;

        var x=allPlayers[plr].positionX;
        var y=height-allPlayers[plr].positionY;

        kites[index-1].position.x=x;
        kites[index-1].position.y=y;
      }
    }
      this.handlePlayerControls();
      drawSprites();
    }

    handlePlayerControls(){
      if(keyIsDown(UP_ARROW)){
        player.positionY+=10;
        player.update();
      }
    }
  }

