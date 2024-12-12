// Function to calculate the distance between two points

function calculateDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return Math.sqrt(dx * dx + dy * dy);
}

// Example usage
const point1 = { x: 1, y: 2 };
const point2 = { x: 4, y: 6 };

const distance = calculateDistance(point1.x, point1.y, point2.x, point2.y);
console.log(`The distance between the points is: ${distance}`);
