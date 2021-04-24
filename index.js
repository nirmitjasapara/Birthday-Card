$(handleApp);

function handleApp() {
  var src = document.getElementById("src");
  var target = document.getElementById("board");
  src.ondragstart = saveShape;
  target.ondrop = drawShape;
  src.addEventListener("touchstart", saveShape, false);
  src.addEventListener("touchend", drawShape, false);
  target.ondragover = function (e) {
    e.preventDefault();
  };
}
function saveShape(e){
  e.dataTransfer.setData("shape", e.target.src);
}
function drawShape (e) {
  e.preventDefault();
  var board = document.getElementById("board");

  const shape = e.dataTransfer.getData("shape");
  const x = e.offsetX - 25;
  const y = e.offsetY - 25;
  var newshape = new Image();
  newshape.src = shape;
  newshape.height = "100";
  newshape.width = "100";
  newshape.style.position = "absolute";
  newshape.style.top = y + "px";
  newshape.style.left = x + "px";
  newshape.className = "balloons";
  board.appendChild(newshape);
}
