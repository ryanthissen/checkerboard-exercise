// Your JS goes here

var body = document.querySelector('body');

for (let i = 0; i < 63; i++) {
  if(i % 2 === 0) {
    let divBlack = document.createElement('div');
    Object.assign(divBlack.style, {width: "11.1%", backgroundColor: "black", float: "left", paddingBottom: "11.1%"});
    body.appendChild(divBlack);
  } else {
    let divRed = document.createElement('div')
    Object.assign(divRed.style, {width: "11.1%", backgroundColor: "red", float: "left", paddingBottom: "11.1%"});
    body.appendChild(divRed);
  }
}
