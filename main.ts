input.onButtonPressed(Button.A, function () {
    turn += -1
    if (turn < 0) {
        turn = 3
    }
})
input.onButtonPressed(Button.AB, function () {
    run = 1
    turn = 0
    dx = 1
    dy = 0
    x = 0
    y = 0
    egg_x = 4
    egg_y = 4
    list = [x]
    list = [y]
    score = 0
    time = 1000
})
input.onButtonPressed(Button.B, function () {
    turn += 1
    if (turn > 3) {
        turn = 0
    }
})
function move () {
    if (turn == 0) {
        dx = 1
        dy = 0
    }
    if (turn == 1) {
        dx = 0
        dy = 1
    }
    if (turn == 2) {
        dx = -1
        dy = 0
    }
    if (turn == 3) {
        dx = 0
        dy = -1
    }
    x += dx
    y += dy
}
let time = 0
let score = 0
let list: number[] = []
let egg_y = 0
let egg_x = 0
let y = 0
let x = 0
let dy = 0
let dx = 0
let turn = 0
let run = 0
run = 0
basic.forever(function () {
    basic.clearScreen()
    move()
    led.plot(x, y)
    basic.pause(time)
})
basic.forever(function () {
    if (run == 1) {
        basic.clearScreen()
        move()
        if (x == egg_x && y == egg_y) {
            list.insertAt(0, x)
            list.insertAt(0, y)
            egg_x = randint(0, 4)
            egg_y = randint(0, 4)
            score += 1
            time += -10
        } else {
            let list_y: number[] = []
            list.insertAt(0, x)
            list.insertAt(0, y)
            list.pop()
            list_y.pop()
        }
        for (let index = 0; index <= list.length - 1; index++) {
            led.plotBrightness(list[index], list[index], 255)
        }
        led.plotBrightness(egg_x, egg_y, 50)
        basic.pause(time)
    }
})
basic.forever(function () {
    if (x < 0 || x > 4) {
        run += 0
        basic.showNumber(score)
    } else if (y < 0 || y > 4) {
        run += 0
        basic.showNumber(score)
    }
})
