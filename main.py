blue = 0
green = 0
red = 0
mode = 0
led2 = -11
strip = neopixel.create(DigitalPin.P16, 17, NeoPixelMode.RGB)
strip.set_brightness(10)
strip.show_color(neopixel.colors(NeoPixelColors.RED))
basic.pause(1000)
strip.clear()

def on_forever():
    global red, green, blue, led2, mode
    if mode == 0:
        red = 255
        green = 0
        blue = 0
    elif mode == 1:
        red = 255
        green = 255
        blue = 255
    elif mode == 2:
        red = 255
        green = 255
        blue = 255
    elif mode == 3:
        red = 255
        green = 255
        blue = 255
    elif mode == 4:
        pass
    elif mode == 5:
        pass
    elif mode == 6:
        pass
    else:
        pass
    led2 += 1
    for index in range(11):
        strip.set_pixel_color(led2 + index, neopixel.rgb(0, 255, 255))
    strip.show()
    if led2 >= 17:
        led2 = -11
        mode += 1
        if mode >= 7:
            mode = 0
        strip.clear()
    strip.clear()
basic.forever(on_forever)
