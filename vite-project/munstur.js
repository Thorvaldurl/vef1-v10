const patternCanvas = document.createElement("canvas");
const patternContext = patternCanvas.getContext("2d");

patternCanvas.width = 50;
patternCanvas.height = 50;

patternContext.fillStyle = "orange";
patternContext.fillRect(0, 0, patternCanvas.width, patternCanvas.height);
patternContext.arc(30, 30, 10, 0, 1.5 * Math.PI);
patternContext.stroke();

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const pattern = ctx.createPattern(patternCanvas, "repeat");
ctx.fillStyle = pattern;
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.body.appendChild(canvas);