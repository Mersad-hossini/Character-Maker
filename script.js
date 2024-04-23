let $ = document
let faceBtn = $.getElementById("face-btn")
let faceImage = $.getElementById("face")
let colorBtn = $.getElementById("color-btn")
let hornsBtn = $.getElementById("horns-btn")
let tailBtn = $.getElementById("tail-btn")
let root = $.documentElement

let [faceCounter, colorCounter, hornCounter, tailCounter] = Array(4).fill(0)

let bodyColors = [
    "#a8d530",
    "#42aaff",
    "#f3d55b",
    "#ff4f51",
    "#904ae8",
    "#ffa711"
];

let colors = [...bodyColors, "transparent"]

const setCounter = (counter, length) => {
    return counter < length - 1 ? counter + 1 : 0
}

const changeFace = () => {
    faceCounter = setCounter(faceCounter, 6)
    faceImage.src = `face-${faceCounter}.png`
}

const changeColor = () => {
    colorCounter = setCounter(colorCounter, 6)
    root.style.setProperty("--color-character", bodyColors[colorCounter])
}

const changehorn = () => {
    hornCounter = setCounter(hornCounter, 7)
    root.style.setProperty("--color-horns", colors[hornCounter])
}

const changeTail = () => {
    tailCounter = setCounter(tailCounter, 7)
    root.style.setProperty("--color-tail", colors[tailCounter])
}

faceBtn.addEventListener("click", changeFace)
colorBtn.addEventListener("click", changeColor)
hornsBtn.addEventListener("click", changehorn)
tailBtn.addEventListener("click", changeTail)