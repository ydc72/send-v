bluetooth.onBluetoothConnected(function () {
    on()
    basic.showLeds(`
        . . # # #
        # . # . #
        . # # # .
        # . # . #
        . . # # #
        `)
    OLED12864_I2C.showString(
    0,
    0,
    "Bluetooth is on line",
    1
    )
})
bluetooth.onBluetoothDisconnected(function () {
    off()
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        # . . . #
        `)
    OLED12864_I2C.showString(
    0,
    0,
    "Bluetooth is off line",
    1
    )
})
function off () {
    music.stopAllSounds()
    music.stopMelody(MelodyStopOptions.All)
    music.setBuiltInSpeakerEnabled(false)
    music.setVolume(0)
}
function on () {
    music.setBuiltInSpeakerEnabled(true)
    music.setVolume(127)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playMelody("A F E F D G E F ", 120)
})
OLED12864_I2C.init(60)
bluetooth.startAccelerometerService()
bluetooth.startButtonService()
bluetooth.startIOPinService()
bluetooth.startTemperatureService()
bluetooth.startMagnetometerService()
bluetooth.startUartService()
basic.forever(function () {
	
})
loops.everyInterval(3600000, function () {
    music.playMelody("E B C5 A B G A F ", 120)
})
