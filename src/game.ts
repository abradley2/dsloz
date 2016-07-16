import Player from './Player'
import Mobs from './Mobs'

const entities = {
    player: new Player(),
    mobs: []
}

document.addEventListener('DOMContentLoaded', (e) => {
    var canvas = <HTMLCanvasElement> document.getElementById('game')

    var game = new Phaser.Game(
        600,
        600,
        Phaser.AUTO,
        '',
        {
            preload: preload,
            create: create,
            update: update
        }
    )

    function preload () {
        Object.keys(Mobs).forEach((name) => {
            Mobs[name].onPreload(game)
        })
    }

    function create () {

    }

    function update () {
        entities.player.onUpdate(game)
        for (let idx in entities.mobs) {
            entities.mobs[idx].onUpdate(game)
        }
    }

})
