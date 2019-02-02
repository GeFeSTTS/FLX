const a = parseFloat(prompt(`Please enter first number`));
const b = parseFloat(prompt(`Please enter second number`));
const c = parseFloat(prompt(`Please enter third number`));

let d = Math.pow(b, 2) - 4 * a * c;
if (d < 0) {
    alert("No solutions!");
} else if (!isNaN(d)) {
    let ans1 = (-b + Math.sqrt(d)) / (2 * a);
    let ans2 = (-b - Math.sqrt(d)) / (2 * a);

    if (d === 0) {
        alert(`x1, x2 = ${ans1}`);
    } else {
        alert(`x1 = ${ans1} and x2 = ${ans2}`);
    }
} else { 
    alert('Invalid input data'); 
}