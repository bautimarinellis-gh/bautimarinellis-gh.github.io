// neuralNetwork.js
const canvas = document.getElementById("neuralCanvas");
const ctx = canvas.getContext("2d");

// Ajustar el tamaño del canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const nodes = [];
const MAX_DISTANCE = 120;
const NUM_NODES = 100;

function createNodes() {
    for (let i = 0; i < NUM_NODES; i++) {
        nodes.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Rebote en los bordes
        if (node.x <= 0 || node.x >= canvas.width) node.vx *= -1;
        if (node.y <= 0 || node.y >= canvas.height) node.vy *= -1;

        nodes.forEach(otherNode => {
            const dist = Math.hypot(node.x - otherNode.x, node.y - otherNode.y);
            if (dist < MAX_DISTANCE) {
                ctx.beginPath();
                ctx.moveTo(node.x, node.y);
                ctx.lineTo(otherNode.x, otherNode.y);
                ctx.strokeStyle = `rgba(200, 128, 255, ${1 - dist / MAX_DISTANCE})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        });
    });

    requestAnimationFrame(animate);
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

createNodes();
animate();
