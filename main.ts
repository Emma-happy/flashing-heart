input.onPinPressed(TouchPin.P0, function () {
    basic.pause(100)
    basic.showString("Hello! I hope you are having fun with \"Flashy, Flashy!\"")
})
input.onButtonPressed(Button.A, function () {
    music.playMelody("C5 C5 C5 C5 C F A E ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("D D D D C5 G E C ", 120)
    if (Math.randomBoolean()) {
    	
    }
})
basic.showIcon(IconNames.Chessboard)
basic.forever(function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
})
