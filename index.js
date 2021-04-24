$(handleApp);

function handleApp() {
  var src = document.getElementById("src");
  var target = document.getElementById("board");
  src.ondragstart = saveShape;
  target.ondrop = drawShape;
  src.addEventListener('touchmove', function(e) {
    console.log(e);
  });
  src.addEventListener("touchstart", function(e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];
    
    // assign box new coordinates based on the touch.
    src.style.left = touchLocation.pageX + 'px';
    src.style.top = touchLocation.pageY + 'px';
  });
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

  console.log(e);
  const shape = e.dataTransfer.getData("shape");
  const x = e.pageX - 25;
  const y = e.pageY - 25;
  board.appendChild(createShape(shape, x, y));
}
function createShape(src, x, y) {
  var newshape = new Image();
  newshape.src = src;
  newshape.height = "100";
  newshape.width = "100";
  newshape.style.position = "absolute";
  newshape.style.top = y + "px";
  newshape.style.left = x + "px";
  newshape.className = "balloons";
  return newshape;
}
