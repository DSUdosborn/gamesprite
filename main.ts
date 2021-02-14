let x = 0
let y = 0
basic.forever(function () {
    x = pins.map(
    pins.analogReadPin(AnalogPin.P0),
    150,
    800,
    0,
    4
    )
    y = pins.map(
    pins.analogReadPin(AnalogPin.P2),
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
