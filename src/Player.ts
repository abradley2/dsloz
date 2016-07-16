class Player {

    move (direction) {

    }

    onPreload (game: Phaser.Game) {
        game.load.spritesheet(
            'walking',
            'assets/walking_30_30.png',
            30,
            30
        )
    }

    onCreate (game: Phaser.Game) {
        game.add.sprite(0, 0, 'walking')
    }

    onUpdate (game: Phaser.Game) {

    }

    constructor () {

    }

}

export default Player
