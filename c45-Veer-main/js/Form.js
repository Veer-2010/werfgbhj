class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
   
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
  setElementsPosition(){
   
    this.input.position(width/2-100,height/2-150);
    this.playButton.position(width/2-80,height/2-100);
    this.greeting.position(width/2-100,height/2)

  }
  setElementsStyle(){
 
    this.input.class("customInput");
    this.playButton.class("customButton")
    this.greeting.class("greeting");
  }
  buttonPressed(){
    this.playButton.mousePressed(()=>{
      var message=`Hello ${this.input.value()}<br>Wait for another player to join......`;
      this.input.hide();
      this.playButton.hide();
      this.greeting.html(message)
      playerCount+=1;
      player.name=this.input.value();
      player.index=playerCount;
      player.addPlayer();
      player.updateCount(playerCount);
    })
  }
  display(){
    this.setElementsPosition();
    this.setElementsStyle();
    this.buttonPressed();
  }

}
