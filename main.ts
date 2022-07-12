input.onButtonPressed(Button.A, function () {
    isWorking = true
    SuperBit.MotorRun(SuperBit.enMotors.M2, -60)
    SuperBit.MotorRun(SuperBit.enMotors.M4, -60)
    basic.pause(timeToDrive)
    SuperBit.MotorRun(SuperBit.enMotors.M2, 60)
    SuperBit.MotorRun(SuperBit.enMotors.M4, 60)
    basic.pause(timeToDrive)
    SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
    SuperBit.MotorRun(SuperBit.enMotors.M4, 0)
    isWorking = false
})
let timeToDrive = 0
let isWorking = false
isWorking = false
timeToDrive = 5000
SuperBit.Servo2(SuperBit.enServo.S4, 0)
SuperBit.MotorRun(SuperBit.enMotors.M2, 0)
SuperBit.MotorRun(SuperBit.enMotors.M4, 0)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    while (isWorking) {
        SuperBit.Servo2(SuperBit.enServo.S4, 270)
        basic.pause(1500)
        SuperBit.Servo2(SuperBit.enServo.S4, 0)
        basic.pause(1500)
    }
})
