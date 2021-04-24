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
  e.dataTransfer.setData("shape", e.target.id);
}
function drawShape (e) {
  e.preventDefault();

  const shape = e.dataTransfer.getData("shape");
  const x = e.offsetX - 25;
  const y = e.offsetY - 25;
  switch (shape) {
    case "square": makeRectangle(x, y); break;
    case "circle": makeCircle(x, y); break;
    case "triangle": makeTriangle(x, y); break;
    case "arrow": makeArrow(x, y); break;
  }
}
function makeRectangle(x, y) {
  console.log("rect");
}
function makeCircle(x, y) {
  console.log("circ");
}
function makeTriangle(x, y) {
  console.log("tri");
}
function makeArrow(x, y) {
  console.log("arrow");
}
