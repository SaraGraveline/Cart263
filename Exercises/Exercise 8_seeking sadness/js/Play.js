class Play extends Phaser.Scene {
  constructor() {
    super ({
      key: `play`
    })
  }

  create() {
    //create the groom
    this.groom = this.physics.add.sprite(400, 300, `groom`);
    //this prevents it from leaving the canvas
    this.groom.setCollideWorldBounds(true);
    //make the arrow key move the groom on the canvas.
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    //arrow key controls and also it rotates the angle of the groom picture.
    if (this.cursors.left.isDown) {
      this.groom.setVelocityX(-100); //left key arrow
      this.groom.setAngularVelocity(-150); //groom picture rotates.
    }
    if (this.cursors.right.isDown) {
      this.groom.setVelocityX(100); //right key arrow
      this.groom.setAngularVelocity(150); //groom picture rotates.
    }
    if (this.cursors.up.isDown) {
      this.groom.setVelocityY(-100); //up key arrow
    }
    if (this.cursors.down.isDown) {
      this.groom.setVelocityY(100); //down key arrow
    }
  }
};
