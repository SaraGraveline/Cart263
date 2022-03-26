class Boot extends Phaser.Scene {
  constructor() {
    super ({
      key: `boot`
    })
  }

  preload() {
    //load assets here!
    this.load.image(`room`, `assets/images/room.jpg`);

    this.load.image(`groom`, `assets/images/groom.png`); //groom image
    this.load.image(`bride`, `assets/images/Bride.png`); //bride image
    this.load.image(`zombie`, `assets/images/zombie.png`); //zombie image


    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {
    
  }

  update() {

  }
}
