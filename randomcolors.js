var body = document.querySelector('body');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let i = 0; i < 63; i++) {
    let divRandom = document.createElement('div');
    Object.assign(divRandom.style, {width: "11.1%", backgroundColor: getRandomColor(), float: "left", paddingBottom: "11.1%"});
    body.appendChild(divRandom);
}
