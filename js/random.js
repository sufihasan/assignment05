function randombgcolorGenarator() {
    const hexRange = '0123456789ABCDEF';
    let resultColor = '#';
    let i = 1;
    while (i < 7) {
        resultColor = resultColor + hexRange[Math.floor(Math.random() * 16)];
        i++;
    }
    return resultColor;
}

document.getElementById('random-btn').addEventListener('click', function () {
    const randomColor = randombgcolorGenarator();
    document.getElementById('mainhtml').style.backgroundColor = randomColor;
})

