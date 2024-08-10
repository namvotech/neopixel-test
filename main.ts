let mode2 = false
let blue = 0
let green = 0
let red = 0
let mode = 0
basic.showIcon(IconNames.Heart)
let index2 = 3
let led2 = -11
let strip = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
basic.pause(1000)
basic.forever(function () {
    if (mode == 0) {
        red = 255
        green = 0
        blue = 0
    } else if (mode == 1) {
        red = 0
        green = 255
        blue = 0
    } else if (mode == 2) {
        red = 0
        green = 0
        blue = 255
    } else if (mode == 3) {
        red = 255
        green = 255
        blue = 0
    } else if (mode == 4) {
        red = 255
        green = 0
        blue = 255
    } else if (mode == 5) {
        red = 0
        green = 255
        blue = 255
    } else if (mode == 6) {
        red = 255
        green = 255
        blue = 255
    } else {
        red = 0
        green = 0
        blue = 0
    }
    led2 += 1
    if (mode2) {
        strip.showRainbow(1, 1000)
        strip.show()
    } else {
        for (let index = 0; index <= index2; index++) {
            strip.setPixelColor(led2 + index, neopixel.rgb(red, green, blue))
        }
        strip.show()
        strip.clear()
    }
    if (led2 >= 12) {
        led2 = -11
        mode += 1
        if (mode >= 7) {
            index2 += 10
            mode = 0
            if (index2 >= 30) {
                index2 = 2
                mode2 = Math.randomBoolean()
            }
        }
    }
})
