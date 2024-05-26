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
