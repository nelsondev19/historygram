const colores = [
    ["#3a86ff", "#fce77d"],
    ["ffc145"], ["#0c0f0a"],
    ["0c0f0a"], ["#ffffff"]
    ["#d90429"], ["#ffbe0b"],
    ["#00b4d8"], ["#011627"],
    ["#073b4c"], ["#118ab2"],
    ["#ef476f"], ["#03045e"],
    ["#0077b6"], ["#10002b"],
    ["#ff5d8f"], ["#caf0f8"],
    ["#002855"], ["#001845"],
    ["0c0f0a"], ["#ffffff"],
    ["ffffff"], ["#0c0f0a"]
    ["#fee440"], ["#0b132b"],
    ["#02040f"], ["#432371"],
    ["#02040f"], ["#432371"],
    ["#462255"], ["#390099"],
    ["#0466c8"], ["#0353a4"],
    ["#023e7d"], ["#001233"],
    ["#fee440"], ["#ee4266"],
    ["#fbff12"], ["#001524"],
    ["#030003"], ["#ffffff"],
    ["#edf2f4"], ["f7fff7"],
    ["#4361ee"], ["#e36414"],
    ["ffc145"], ["#ffffff"],
    ["ffffff"], ["#ffffff"],
    ["yellow"]
];

function getNumeroRandomEntre(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getColores() {
    const colorRandom = colores[getNumeroRandomEntre(0, colores.length)];
    return colorRandom
}

//texto

let texto = document.getElementById('description-picture')

function randomStyle() {
    let transformPosition = [-20, 20 - 50, 0, 40];
    let marginTopPosition = [240, 0, 440, 540, 500, 300, 320, 400, 460, 81, 20, 34];
    let marginLeftPosition = [170, 0, 100, 200, 150, 120, 190, 60, 20, 10, 81, 66]

    const transformRandom = transformPosition[getNumeroRandomEntre(0, transformPosition.length)]
    const marginTopRandom = marginTopPosition[getNumeroRandomEntre(0, marginTopPosition.length)]
    const marginleftRandom = marginLeftPosition[getNumeroRandomEntre(0, marginLeftPosition.length)]

    const colorRandom = getColores()
    const colorText = getColores()

    texto.style.backgroundColor = colorRandom
    texto.style.color = colorText
    texto.style.transform = `rotate(${transformRandom}deg)`;
    texto.style.marginTop = `${marginTopRandom}px`;
    texto.style.marginLeft = `${marginleftRandom}px`;
}


randomStyle()




