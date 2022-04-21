class Play extends Phaser.Scene {
  constructor() {
    super ({
      key: `play` //key term
    })
  }

  create() {
    //background image
    this.sea = this.physics.add.sprite(0, 0, `sea`).setOrigin(0,0);
    //create the user
    this.user = this.physics.add.sprite(400, 300, `user`);
    //this prevents it from leaving the canvas
    this.user.setCollideWorldBounds(true);

    //added the Nemo picture on the canvas randomly
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.wedding = this.physics.add.sprite(x, y, `nemo`);
    this.wedding.setCollideWorldBounds(true);

    //creates a groups of new sharks
    this.abstract = this.physics.add.group({
      key: `shark`, //key term
      quantity: 150, //how many
      bounceX: 0.5, //their bounce rate
      bounceY: 0.5,
      collideWorldBounds: true, //collide with the wall
      dragX: 50, //slow down after moving
      dragY: 50
    });

    //gives a random position to all the sharks inside the canvas.
    Phaser.Actions.RandomRectangle(this.abstract.getChildren(), this.physics.world.bounds);

    //checks when the user and  nemo overlaps/finds each others.
    this.physics.add.overlap(this.user, this.wedding, this.getMarried, null, this);

    //makes the sharks move aside when user hits them.
    this.physics.add.collider(this.user, this.abstract);

    //each sharks hitting each others.
    this.physics.add.collider(this.abstract, this.abstract);

    //when sharks hits nemo, she also moves.
    this.physics.add.collider(this.wedding, this.abstract);

    //make the arrow key move the user on the canvas.
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  //when the user and nemo overlap each other, the nemo appares in different place.
  getMarried(user, wedding) {
    let x = Math.random() * this.sys.canvas.width;
    let y = Math.random() * this.sys.canvas.height;
    this.wedding.setPosition(x, y);
    this.sound.play(`happy`);
  }

  update() {
    //arrow key controls and also it rotates the angle of the user picture.
    if (this.cursors.left.isDown) {
      this.user.setVelocityX(-150); //left key arrow
      this.user.setAngularVelocity(-150); //user picture rotates.
    }
    if (this.cursors.right.isDown) {
      this.user.setVelocityX(150); //right key arrow
      this.user.setAngularVelocity(150); //user picture rotates.
    }
    if (this.cursors.up.isDown) {
      this.user.setVelocityY(-150); //up key arrow
    }
    if (this.cursors.down.isDown) {
      this.user.setVelocityY(150); //down key arrow
    }
  }
};
