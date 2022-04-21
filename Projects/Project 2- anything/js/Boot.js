class Boot extends Phaser.Scene {
  constructor() {
    super ({
      key: `boot` //key term
    })
  }

  preload() {
    // this pre-loads assets here!
    this.load.image(`sea`, `assets/images/sea.jpeg`);//background sea image

    this.load.image(`user`, `assets/images/user.png`); //user image
    this.load.image(`nemo`, `assets/images/nemo.png`); //nemo image
    this.load.image(`shark`, `assets/images/shark.png`); //shark image

    this.load.audio(`happy`, 'assets/sounds/happy.wav');//happy sound

    //changes to the play scene
    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {

  }

  update() {

  }
}
