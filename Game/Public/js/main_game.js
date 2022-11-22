class Player extends Phaser.Physics.Arcade.Sprite {
constructor (scene, x, y){
super(scene, x, y, "player");
scene.add.existing(this);
}
update () { // pseudo update loop in Player class
  function update() {
this.player.update();
}
}
}
