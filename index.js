$(handleApp);

function handleApp() {
  var src = document.getElementById("src");
  var target = document.getElementById("board");
  src.ondragstart = saveShape;
  target.ondrop = drawShape;
  target.ondragover = function (e) {
    e.preventDefault();
  };
}
function saveShape(e){
  console.log(e);
  e.dataTransfer.setData("shape", e.target.src + "|" + e.target.dataset.dir);
}
function drawShape (e) {
  e.preventDefault();
  var board = document.getElementById("board");

  const [shape, dir] = e.dataTransfer.getData("shape").split('|');
  const x = e.pageX - 25;
  const y = e.pageY - 25;
  board.appendChild(createShape(shape, x, y, dir));
}
function createShape(src, x, y, dir) {
  var newshape = new Image();
  newshape.src = src;
  newshape.height = "100";
  newshape.width = "100";
  newshape.style.position = "absolute";
  newshape.style.top = y + "px";
  newshape.style.left = x + "px";
  newshape.className = dir;
  return newshape;
}
