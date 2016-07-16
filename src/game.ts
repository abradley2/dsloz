import {gameSettings, keyCodes} from './config'

document.addEventListener('DOMContentLoaded', (e) => {
    var canvas = <HTMLCanvasElement> document.getElementById('game')

    canvas.width = gameSettings.gameWidth
    canvas.height = gameSettings.gameHeight

})