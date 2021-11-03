input.onButtonPressed(Button.A, function () {
    a1 = Pixel_Array.range(0, 2)
    a1.showColor(neopixel.colors(NeoPixelColors.Red))
    a2 = Pixel_Array.range(2, 1)
    a2.showColor(neopixel.colors(NeoPixelColors.White))
    a3 = Pixel_Array.range(3, 2)
    a3.showColor(neopixel.colors(NeoPixelColors.Blue))
})
input.onButtonPressed(Button.B, function () {
    Pixel_Array.clear()
    Pixel_Array.show()
})
let a3: neopixel.Strip = null
let a2: neopixel.Strip = null
let a1: neopixel.Strip = null
let Pixel_Array: neopixel.Strip = null
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
basic.forever(function () {
    basic.pause(100)
    Pixel_Array.rotate(1)
    Pixel_Array.show()
})
