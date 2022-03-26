class Boot extends Phaser.Scene {
  constructor() {
    super ({
      key: `boot`
    })
  }

  preload() {
    //load assets here!

    this.load.image(`groom`, `assets/images/groom.png`);

    this.load.on(`complete`, () => {
      this.scene.start(`play`);
    });
  }

  create() {

  }

  update() {

  }
}
