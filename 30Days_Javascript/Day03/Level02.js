document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        // Prompt the user to enter the base of the triangle
        let base = parseFloat(prompt("Enter base:"));

        // Prompt the user to enter the height of the triangle
        let height = parseFloat(prompt("Enter height:"));

        // Check if the inputs are valid numbers
        if (isNaN(base) || isNaN(height)) {
            alert("Please enter valid numbers for base and height.");
            return;
        }

        // Calculate the area of the triangle
        let area = 0.5 * base * height;

        // Display the result
        alert("The area of the triangle is " + area);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('areaCircle').addEventListener('click', function() {
        let radius = parseFloat(prompt("Enter radius:"));
        if(isNaN(radius)) {
            alert("Please enter a valid number for radius.");
            return;
        }
        const pi = 3.14
        let areaCircle = radius * radius * pi;
        let circumference = 2 * radius * pi;
        alert("The area of the circle is " + areaCircle + "\nThe circumference of the circle is " + circumference);
    })
})
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('slope').addEventListener('click', function (){
        let x1 = parseFloat(prompt("Enter x1:"));
        let y1 = parseFloat(prompt("Enter y1:"));

        let x2 = parseFloat(prompt("Enter x2:"));
        let y2 = parseFloat(prompt("Enter y2:"));
        if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)) {
            alert("Please enter a valid number for x,y:");
            return;
        }
        let m = (y1-y2)/(x1-x2)
        alert("m = " + m);
    })
})
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('quadraticEquation2').addEventListener('click', function() {
        let a = 1, b = 6, c = 5;
        let delta = b * b - 4 * a * c;

        // Prompt the user to enter a value for x
        let x = parseFloat(prompt("Enter x:"));

        // Check if the input is a valid number
        if (isNaN(x)) {
            alert("Please enter a valid number for x:");
            return;
        }

        // Calculate the value of the quadratic equation at x
        let equationValue = x * x + 6 * x + 5;

        // Calculate the roots if the discriminant is non-negative
        let root1, root2;
        if (delta >= 0) {
            root1 = (-b + Math.sqrt(delta)) / (2 * a);
            root2 = (-b - Math.sqrt(delta)) / (2 * a);
        } else {
            root1 = "No real roots";
            root2 = "No real roots";
        }

        // Display the results
        alert(`x^2 + 6x + 5 at x = ${x} is: ${equationValue}\n` +
            `y = 0 with\n` +
            `x1 = ${root1}\n` +
            `x2 = ${root2}`);
    });
});
