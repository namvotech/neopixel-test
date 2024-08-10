let index2 = 0
let index = 0
let blue = 0
let green = 0
let red = 0
let mode = 0
let led2 = -11
let strip = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P16, 186, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.showColor(neopixel.colors(NeoPixelColors.Red))
strip2.setBrightness(100)
strip2.showColor(neopixel.colors(NeoPixelColors.Green))
basic.pause(500)
strip.clear()
strip2.clear()
basic.showIcon(IconNames.Heart)
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
    index += 1
    for (let index = 0; index <= 10; index++) {
        strip.setPixelColor(led2 + index, neopixel.rgb(red, green, blue))
    }
    strip.show()
    if (led2 >= 12) {
        led2 = -11
        mode += 1
        if (mode >= 7) {
            mode = 0
        }
        strip.clear()
    }
    strip.clear()
})
basic.forever(function () {
    index2 += 1
    strip2.showRainbow(index2, index2 + 1000)
    strip2.show()
    if (index2 >= 5000) {
        index2 = 0
        strip2.clear()
    }
})
