index = 0
blue = 0
green = 0
red = 0
mode = 0
basic.show_icon(IconNames.HEART)
index2 = 3
led2 = -11
strip = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB)
strip.set_brightness(100)
strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.pause(500)
strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
basic.pause(500)
strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
basic.pause(500)
strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.pause(500)
strip.show_color(neopixel.colors(NeoPixelColors.ORANGE))
basic.pause(500)
strip.show_color(neopixel.colors(NeoPixelColors.YELLOW))
basic.pause(500)
strip.clear()

def on_forever():
    global red, green, blue, led2, index, mode, index2
    if mode == 0:
        red = 255
        green = 0
        blue = 0
    elif mode == 1:
        red = 0
        green = 255
        blue = 0
    elif mode == 2:
        red = 0
        green = 0
        blue = 255
    elif mode == 3:
        red = 255
        green = 255
        blue = 0
    elif mode == 4:
        red = 255
        green = 0
        blue = 255
    elif mode == 5:
        red = 0
        green = 255
        blue = 255
    elif mode == 6:
        red = 255
        green = 255
        blue = 255
    else:
        red = 0
        green = 0
        blue = 0
    led2 += 1
    index += 1
    index3 = 0
    while index3 <= index2:
        strip.set_pixel_color(led2 + index3, neopixel.rgb(red, green, blue))
        index3 += 1
    strip.show()
    strip.clear()
    if led2 >= 12:
        led2 = -11
        mode += 1
        if mode >= 7:
            index2 += 10
            mode = 0
            if index2 >= 30:
                index2 = 2
basic.forever(on_forever)
