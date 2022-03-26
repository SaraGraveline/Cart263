class Play extends Phaser.Scene {
  constructor() {
    super ({
      key: `play`
    })
  }

  create() {

    this.room = this.physics.add.sprite(0, 0, `room`).setOrigin(0,0);
    //create the groom
    this.groom = this.physics.add.sprite(400, 300, `groom`);
    //this prevents it from leaving the canvas
    this.groom.setCollideWorldBounds(true);

    //added the bride picture on the canvas randomly
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.wedding = this.physics.add.sprite(x, y, `bride`);

    //different numbers for zombies
    this.abstract = this.physics.add.group({
      key: `zombie`,
      quantity: 120,
      bounceX: 0.5,
      bounceY: 0.5,
      collideWorldBounds: true,
      dragX: 50,
      dragY: 50
    });
    //gives the one zombie more kids or army.
    Phaser.Actions.RandomRectangle(this.abstract.getChildren(), this.physics.world.bounds);

    //checks when the groom and bride overlaps/finds each others.
    this.physics.add.overlap(this.groom, this.wedding, this.getMarried, null, this);
    //makes the zombie move aside when groom hits them.
    this.physics.add.collider(this.groom, this.abstract);
    //each zombie hitting each others.
    this.physics.add.collider(this.abstract, this.abstract);
    //when zombie hits bride, she also moves.
    this.physics.add.collider(this.wedding, this.abstract);
    //make the arrow key move the groom on the canvas.
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  //when the groom and bride overlap each other, the bride appares in different place.
  getMarried(groom, wedding) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.wedding.setPosition(x, y);
  }

  update() {
    //arrow key controls and also it rotates the angle of the groom picture.
    if (this.cursors.left.isDown) {
      this.groom.setVelocityX(-150); //left key arrow
      this.groom.setAngularVelocity(-150); //groom picture rotates.
    }
    if (this.cursors.right.isDown) {
      this.groom.setVelocityX(150); //right key arrow
      this.groom.setAngularVelocity(150); //groom picture rotates.
    }
    if (this.cursors.up.isDown) {
      this.groom.setVelocityY(-150); //up key arrow
    }
    if (this.cursors.down.isDown) {
      this.groom.setVelocityY(150); //down key arrow
    }
  }
};
