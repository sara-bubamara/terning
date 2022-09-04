let terning = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        terning = randint(1, 6)
        basic.showNumber(terning)
    }
    if (6 == terning) {
        basic.showIcon(IconNames.Heart)
    }
    if (4 == terning) {
        basic.showString("hurra")
    } else {
        music.playTone(175, music.beat(BeatFraction.Breve))
    }
})
