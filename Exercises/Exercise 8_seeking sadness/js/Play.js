class Play extends Phaser.Scene {
  constructor() {
    super ({
      key: `play`
    })
  }

  create() {
    //create the groom
    this.groom = this.physics.add.sprite(400, 300, `groom`);
  }

  update() {

  }
}
