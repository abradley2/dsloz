declare interface Entity {
    onUpdate: (game: Phaser.Game) => void
}

declare interface EntityFactory  {
    onPreload: (game: Phaser.Game) => void
    onCreate: (game: Phaser.Game) => Entity
}
