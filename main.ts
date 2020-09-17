let degrees = 0
basic.forever(function () {
    if (input.compassHeading() <= 20) {
        if (input.buttonIsPressed(Button.B)) {
            basic.showNumber(0)
        }
    } else {
        if (input.buttonIsPressed(Button.B)) {
            degrees = input.compassHeading()
            basic.showNumber(degrees)
        }
        if (input.compassHeading() <= 280) {
            if (input.compassHeading() >= 260) {
                if (input.buttonIsPressed(Button.A)) {
                    basic.showString("Ugle")
                }
            }
        }
    }
    if (input.lightLevel() == 0) {
        if (input.buttonIsPressed(Button.A)) {
            basic.showString("Sankthansorm")
        }
    }
})
