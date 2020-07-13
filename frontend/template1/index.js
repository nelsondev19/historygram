const colores = [
    ["#3a86ff", "#fce77d"],
    ["#d90429"], ["#ffbe0b"],
    ["#00b4d8"], ["#011627"],
    ["#073b4c"], ["#118ab2"],
    ["#ef476f"], ["#03045e"],
    ["#0077b6"], ["#10002b"],
    ["#ff5d8f"], ["#caf0f8"],
    ["#002855"], ["#001845"],
    ["#fee440"], ["#0b132b"],
    ["#02040f"], ["#432371"],
    ["#02040f"], ["#432371"],
    ["#462255"], ["#390099"],
    ["#0466c8"], ["#0353a4"],
    ["#023e7d"], ["#001233"],
    ["#fee440"], ["#ee4266"],
    ["#fbff12"], ["#001524"],
    ["#fdfffc"], ["#ffffff"],
];

function getNumeroRandomEntre(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getColores() {
    const colorRandom = colores[getNumeroRandomEntre(0, colores.length)];
    return colorRandom
}

//banner

let banner = document.getElementById('banner')

function addcolorBanner() {
    let position = [0,70,125]
    const positionBanner = position[getNumeroRandomEntre(0, position.length)]
    const colorRandom = getColores()        
    banner.style.backgroundColor = colorRandom;
    banner.style.width = "100%"
    banner.style.height = "80px"
    banner.style.marginTop = `${positionBanner}%`
}


addcolorBanner()




