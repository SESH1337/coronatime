let dom = document;

let ball = dom.getElementById('ball-o')
let x = 0;
let y = 0;
let move = 30;

function ballMoving(e){
  if (e.keyCode == 39){
    x += move;
    ball.style.left = x + 'px'
  }else if (e.keyCode === 37){
    x -= move;
    ball.style.left = x + 'px'
  }else if(e.keyCode === 40){
    y += move;
    ball.style.top = y + 'px'

  }else if(e.keyCode === 38){
    y -= move;
    ball.style.top = y + 'px'
  }
}
document.onkeydown = ballMoving;