GHBit.onKey(GHBit.enButton.B1, function () {
	
})
radio.onReceivedValue(function (name, value) {
    if (name == "F") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        255,
        SuperBit.enMotors.M3,
        255
        )
    } else if (name == "R") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        0,
        SuperBit.enMotors.M1,
        150
        )
    } else if (name == "L") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        150
        )
    } else if (name == "B") {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M3,
        -255,
        SuperBit.enMotors.M1,
        -255
        )
    } else {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        0
        )
    }
})
serial.writeLine("Jayden presents ProjectRobot")
let RadioChannel = 0
radio.setGroup(RadioChannel)
basic.showNumber(RadioChannel)
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Up)) {
        radio.sendValue("F", 0)
    }
})
basic.forever(function () {
    basic.pause(5000)
    basic.showString("ProjectRobot")
    basic.pause(5000)
    basic.showIcon(IconNames.Sword)
})
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Left)) {
        radio.sendValue("L", 0)
    }
})
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Nostate)) {
        SuperBit.MotorStopAll()
        radio.sendValue("S", 0)
    }
})
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Right)) {
        radio.sendValue("R", 0)
    }
})
basic.forever(function () {
    if (GHBit.Rocker(GHBit.enRocker.Down)) {
        radio.sendValue("B", 0)
    }
})
