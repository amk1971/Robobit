enum Led {
    //% block="left"
    Left = 32,
    //% block="right"
    Right = 64
}

/**
 * Functions to operate the roboo:bit
 */
//% color=#f44242 icon="\uf1b9" block="robo:bit"
namespace robobit {
	/**
	 * Sets the color and brightness of LED.
     * @param LED #
     * @param brightness percent of maximum brightness, eg: 50
	 */
    //% blockId="robobit_setLED" block="light %LED_number %path|at %brightness|%"
    //% brightness.min=0 brightness.max=100
    //% weight=80
    export function setLEDColor(LED: Led, brightness: number): void {
        let pwr = 0
        brightness = Math.abs(brightness)
        if (brightness > 100) {
            brightness = 100
        }

         pins.spiWrite(0x20)
		 pins.spiWrite(brightness)
    }

}