class Boot extends Phaser.Scene {
  constructor() {
    super ({
      key: `boot` //key term
    })
  }

  preload() {
    // this pre-loads assets here!
    this.load.image(`room`, `assets/images/room.jpg`);//background image

    this.load.image(`groom`, `assets/images/groom.png`); //groom image
    this.load.image(`bride`, `assets/images/Bride.png`); //bride image
    this.load.image(`zombie`, `assets/images/zombie.png`); //zombie image

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
