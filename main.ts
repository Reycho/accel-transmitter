let timesincelaststep = 0
let step = 0
radio.setGroup(255)
let laststeptime = -100
basic.showLeds(`
    # # # # #
    . . # . .
    . # # # .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    radio.sendValue("accel", input.acceleration(Dimension.Strength))
    radio.sendValue("step", step)
    timesincelaststep = control.millis() - laststeptime
    if (input.acceleration(Dimension.Strength) > 1500 && timesincelaststep > 350) {
        step += 1
        laststeptime = control.millis()
    }
    basic.pause(30)
})
