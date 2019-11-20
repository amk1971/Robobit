# Robo:bit



The package adds support for the **robo:bit** add-on board.


### Micro:bit Pins Used 

The following micro:bit pins are used for analog and digital sensors, motor driving:  

* ``P0`` -- Analog Input 0
* ``P1`` -- Analog Input 1
* ``P2`` -- Analog Input 2
* ``P8`` -- Digital Input/Output
* ``P12`` -- Digital Input/Output 
* ``P14`` -- Digital Input/Output
* ``P15`` -- Servo Motor
* ``P16`` -- Servo Motor
* ``P19`` -- motor driver - SCL
* ``P20`` -- motor driver - SDA 

### Set Motor Speed

To set the speed and direction for a motor, place the `|set motor|` block.
The block takes three parameters: motor select, direction, and speed.

* The motor select must be either `Left` or `Right`
* Direction must be either `Forward` or `Reverse`
* Speed is an integer value between `0` and `100`

```blocks
motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
```


### Example: Receiving a packet of data over wireless

The following program reads a string to control the direction of two motors.

```blocks
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    // Drive forward
    if (receivedNumber == 128) {
        led.plot(2, 0)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        motobit.enable(MotorPower.On)
    } else {
        led.unplot(2, 0)
    }
    // Turn left
    if (receivedNumber == 64) {
        led.plot(0, 2)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
        motobit.enable(MotorPower.On)
    } else {
        led.unplot(0, 2)
    }
    // Turn right
    if (receivedNumber == 32) {
        led.plot(4, 2)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        motobit.enable(MotorPower.On)
    } else {
        led.unplot(4, 2)
    }
    // Drive in reverse
    if (receivedNumber == 16) {
        led.plot(2, 4)
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
        motobit.enable(MotorPower.On)
    } else {
        led.unplot(2, 4)
    }
    // Stop
    if (receivedNumber == 0) {
        motobit.enable(MotorPower.Off)
    }
})
radio.setGroup(13)
```

## License

MIT

## Supported targets

