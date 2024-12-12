input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . .
        . # # . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # . .
        . . . . .
        . . . . .
        `)
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . #
        . . # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    servos.P0.setAngle(180)
})
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . . . .
    . . . . .
    `)
servos.P0.setRange(0, 180)
servos.P0.setAngle(90)
