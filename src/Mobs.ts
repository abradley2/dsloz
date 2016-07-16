import Stalfos from './mobs/Stalfos'

export default <{[name: string] : EntityFactory}> {
    'Stalfos': {
        onPreload: (game: Phaser.Game) => {

        },
        onCreate: (game: Phaser.Game) => {
            return new Stalfos(game)
        }
    }
}
