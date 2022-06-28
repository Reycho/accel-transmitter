let timesincelaststep = 0
let timesincelastjump = 0
let timesincelasttrigger = 0
let step = 0
let jump = 0
radio.setGroup(255)
let lasttriggertime = -100
let lastjumptime = -100
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
    radio.sendValue("jump", jump)
    radio.sendValue("step", step)
    timesincelasttrigger = control.millis() - lasttriggertime
    timesincelastjump = control.millis() - lastjumptime
    timesincelaststep = control.millis() - laststeptime
    if (input.acceleration(Dimension.Strength) > 2500 && timesincelasttrigger > 500) {
        lasttriggertime = control.millis()
    }
    if (timesincelastjump > 1000 && (input.acceleration(Dimension.Strength) < 750 && timesincelasttrigger < 1000)) {
        lastjumptime = control.millis()
        jump += 1
    }
    if (input.acceleration(Dimension.Strength) > 1500 && timesincelaststep > 350) {
        step += 1
        laststeptime = control.millis()
    }
    basic.pause(30)
})
