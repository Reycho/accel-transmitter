let step = 0
radio.setGroup(255)
basic.showLeds(`
    # # # # #
    . . # . .
    . # # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    radio.sendValue("accel", input.acceleration(Dimension.Strength))
    radio.sendValue("step", step)
    if (input.acceleration(Dimension.Strength) > 1500) {
        basic.pause(350)
        step += 1
    }
    basic.pause(1)
})
