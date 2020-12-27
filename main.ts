scene.onOverlapTile(SpriteKind.Enemy, sprites.castle.tileGrass1, function (sprite, location) {
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    SpriteTor.destroy(effects.fountain, 1000)
    Teilprogrammnummer = 2
})
let Teilprogrammnummer = 0
let SpriteTor: Sprite = null
scene.setBackgroundColor(11)
SpriteTor = sprites.create(img`
    5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 
    5 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
let xTor = 10
let yTor = 10
pause(1)
SpriteTor.setPosition(xTor, yTor)
let SpriteSpieler = sprites.create(img`
    2 2 2 2 2 2 
    2 2 2 2 2 2 
    2 2 2 2 2 2 
    2 2 2 2 2 2 
    2 2 2 2 2 2 
    2 2 2 2 2 2 
    `, SpriteKind.Enemy)
controller.moveSprite(SpriteSpieler)
pause(1)
Teilprogrammnummer = 1
forever(function () {
    if (Teilprogrammnummer == 1) {
        pause(5000)
        xTor = randint(0, 140)
        yTor = randint(0, 100)
        SpriteTor.setPosition(xTor, yTor)
    }
    if (Teilprogrammnummer == 2) {
        tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010100000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, [myTiles.transparency16,sprites.castle.tileGrass1], TileScale.Sixteen))
        SpriteSpieler.setPosition(10, 10)
        controller.moveSprite(SpriteSpieler)
        Teilprogrammnummer = 0
    }
})
