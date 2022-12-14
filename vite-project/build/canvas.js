const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(0, 0, 500, 500);
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 250, 250)
ctx.fillStyle = 'orange';
ctx.clearRect(250, 0, 250, 250)


ctx.beginPath();
ctx.moveTo(250, 0);
ctx.lineTo(500, 0);
ctx.lineTo(250, 250);
ctx.fill();
ctx.fillStyle = 'purple';
ctx.beginPath();
ctx.moveTo(500, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 250);
ctx.fill();



ctx.beginPath();
ctx.arc(95, 95, 70, 0, Math.PI * 2, true); // Outer circle
ctx.moveTo(130, 95);
ctx.arc(95, 95, 35, 0, Math.PI, false); // Mouth (clockwise)
ctx.moveTo(80, 70);
ctx.arc(75, 70, 5, 0, Math.PI * 2, true); // Left eye
ctx.moveTo(115, 70);
ctx.arc(110, 70, 5, 0, Math.PI * 2, true); // Right eye

ctx.stroke();

ctx.beginPath()
ctx.moveTo(95, 165)
ctx.lineTo(95, 350);
ctx.moveTo(95, 250)
ctx.stroke();

ctx.beginPath()
ctx.moveTo(95, 250)
ctx.lineTo(200, 240);
ctx.stroke();

ctx.beginPath()
ctx.moveTo(95, 250)
ctx.lineTo(15, 240);
ctx.stroke();

ctx.beginPath()
ctx.moveTo(95, 350)
ctx.lineTo(200, 440);
ctx.stroke();

ctx.beginPath()
ctx.moveTo(95, 350)
ctx.lineTo(20, 440);
ctx.stroke();