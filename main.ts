let arrayStackCurrentCount = 0
let countWhite = 0
let arrayStacksCurrentChip: number[] = []
let arrayStackMasterCount: number[] = []
let arrayStackMasterChip: number[] = []
let countRed = 0
let countBlue = 0
let countGreen = 0
let countBlack = 0
let colorWhite = 0
let colorRed = 0
let colorBlue = 0
let colorGreen = 0
let colorBlack = 0
let WaitTime1 = 0
let OneRotation = 0
let Volume = 0
let MedMotorSpeed = 0
let CSRRGBtostring: number[] = []
function lineincrease() {
    gline += 1
}
function doneColor() {
    if (true) {
        lineincrease()
        brickshowString(vdonecolor)
    }
}
/**
 * rgbRaw(): number[] { this.poke(); this.setMode(ColorSensorMode.RgbRaw); return [this.getNumber(NumberFormat.UInt16LE, 0), this.getNumber(NumberFormat.UInt16LE, 2), this.getNumber(NumberFormat.UInt16LE, 4)]; } R	  G	  B 1	 black	  29	  40	   7 2	 blue	  38	  87	  61 3	 green	  34	 122	  12 4	 yellow	 238	 163	  15 5	 red	 192	  44	   8 6	 white	 306	 324	 110 7	 brown	  ?	  ?	  ?
 */
/**
 * ColorSensorMode ReflectedLightIntensity = 0, //% block="ambient light intensity" AmbientLightIntensity = 1, //% block="color" Color = 2, RefRaw = 3, RgbRaw = 4, ColorCal = 5,
 */
/**
 * ColorSensorRAWRGB = sensors.color3.RGBRaw()!; ColorSensorRAWRGB = sensors.color3.ReadRaw(3, 3)
 */
/**
 * let CSC2toString: ColorSensorColor[] = null
 */
/**
 * sensors.color3.onColorDetected(ColorSensorColor.Yellow, function () { brick.setStatusLight(StatusLight.Orange) }) sensors.color3.onColorDetected(ColorSensorColor.Red, function () { brick.setStatusLight(StatusLight.Red) music.playSoundEffect(sounds.animalsCatPurr) }) sensors.color3.onColorDetected(ColorSensorColor.Green, function () { brick.setStatusLight(StatusLight.Green) }) brick.showString(" what color", 1) forever(function () {
 */
let raw2 = 0
let raw1 = 0
let raw0 = 0
CSRRGBtostring = []
let CSRRtostring = ""
let CSC2String = ""
let CSRtoString = ""
let ColorSensorRAWRGB:          ColorSensorColor[] = []
let ColorSensorRAWReflected:    ColorSensorColor = null
let ColorSensorColor2:          ColorSensorColor = null
let ColorSensorReflected:       ColorSensorColor = null
let vdonecolor = ""
let gline = 0
MedMotorSpeed = 0
Volume = 0
OneRotation = 0
WaitTime1 = 0
colorBlack = 0
colorGreen = 0
colorBlue = 0
colorRed = 0
colorWhite = 0
countBlack = 0
countGreen = 0
countBlue = 0
countRed = 0
arrayStackMasterChip = []
arrayStackMasterCount = []
arrayStacksCurrentChip = []
countWhite = 0
brickshowString(vdonecolor)
ColorSensorColor2 = sensors.color3.color()
ColorSensorReflected = sensors.color3.light(LightIntensityMode.ReflectedRaw)
arrayStackCurrentCount += 1
brickshowString("before ColorSensor2Conditions",true)
if (ColorSensorColor2 == 1 && (sensors.color3.light(LightIntensityMode.ReflectedRaw) >= 6 && sensors.color3.light(LightIntensityMode.ReflectedRaw) <= 7)) {
    vdonecolor = "black"
    doneColor()
    brickshowString(ColorSensorColor2.toString() + " | " + vdonecolor +" | Ref  6-7")
}
if (ColorSensorColor2 == 1 && (sensors.color3.light(LightIntensityMode.ReflectedRaw) > 7 && sensors.color3.light(LightIntensityMode.ReflectedRaw) <= 10)) {
    vdonecolor = "blue"
    doneColor()
    brickshowString(ColorSensorColor2.toString() + " | " + vdonecolor +" | Ref  7-18")
}
if (ColorSensorColor2 == 5 && (sensors.color3.light(LightIntensityMode.ReflectedRaw) >= 26 && sensors.color3.light(LightIntensityMode.ReflectedRaw) <= 34)) {
    vdonecolor = "red"
    doneColor()
    brickshowString(ColorSensorColor2.toString() + " | " + vdonecolor +" | Ref  25-34")
}
if (ColorSensorColor2 == 6 && (sensors.color3.light(LightIntensityMode.ReflectedRaw) >= 54 && sensors.color3.light(LightIntensityMode.ReflectedRaw) <= 86)) {
    vdonecolor = "white"
    doneColor()
    brickshowString(ColorSensorColor2.toString() + " | "+ vdonecolor +" | Ref  54-86")
}
if (ColorSensorColor2 == 6 && (sensors.color3.light(LightIntensityMode.ReflectedRaw) == 53 || sensors.color3.light(LightIntensityMode.ReflectedRaw) == 67)) {
    vdonecolor = "pink"
    doneColor()
    brickshowString(ColorSensorColor2.toString() + " | " + vdonecolor +" | Ref  53-67")
}
if (ColorSensorColor2 == 2) {
    vdonecolor = "green"
    doneColor()
    brickshowString(ColorSensorColor2.toString() + " | " + vdonecolor +" | Ref  green not tested")
}
function brickshowString(thestring: string, erasescreenbefore: boolean = false) {
    if (erasescreenbefore) {
        brick.clearScreen()
        gline = 0
    }
    lineincrease()
    brick.showString(thestring, gline,)
}
sensors.color3.setMode(0)
ColorSensorReflected = sensors.color3.reflectedLight()
CSRtoString = ColorSensorReflected.toString()
brickshowString(CSRtoString,true)
sensors.color3.setMode(2)
ColorSensorColor2 = sensors.color3.color()
CSC2String = ColorSensorColor2.toString()
brickshowString(CSC2String)
sensors.color3.setMode(3)
ColorSensorRAWReflected = sensors.color3.reflectedLightRaw()
CSRRtostring = ColorSensorRAWReflected.toString()
brickshowString(CSRRtostring)
sensors.color3.setMode(4)
ColorSensorRAWRGB = sensors.color3.rgbRaw()
// CSRRGBtostring = ColorSensorRAWRGB.toString()
// ColorSensorRAWRGB.mode("REF-RAW") ColorSensorRAWRGB
// = sensors.color3
raw0 = ColorSensorRAWRGB[1]
raw1 = ColorSensorRAWRGB[2]
raw2 = ColorSensorRAWRGB[3]
brickshowString("CSC2 " + ColorSensorColor2 + " |CSCRef " + ColorSensorReflected)
brickshowString("CSRAWRef " + ColorSensorRAWReflected + " |CSRAWRGB " + ColorSensorRAWRGB)
brickshowString("CSRRGB r1,r2,r3 " + raw0 + "," + raw1 + "," + raw2 + ".")
