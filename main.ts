let piny = 0
let pinx = 0
let x = 0
let y = 0
basic.forever(function () {
    pinx = pins.analogReadPin(AnalogPin.P1)
    piny = pins.analogReadPin(AnalogPin.P2)
    basic.showNumber(pinx)
    basic.pause(500)
    x = pins.map(
    pinx,
    1,
    5,
    0,
    4
    )
    y = pins.map(
    piny,
    150,
    800,
    0,
    4
    )
    if (x > 4) {
        x = 4
    }
    if (x < 0) {
        y = 0
    }
    if (y > 4) {
        y = 4
    }
    if (y < 0) {
        y = 0
    }
    basic.clearScreen()
    led.plot(x, y)
})
