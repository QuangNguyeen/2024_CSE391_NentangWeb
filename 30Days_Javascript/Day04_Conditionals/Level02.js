document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnCheckGrade').addEventListener('click', function() {
        let score = parseFloat(prompt("Enter the student's score:"));

        if (isNaN(score) || score < 0 || score > 100) {
            alert("Please enter a valid score between 0 and 100.");
            return;
        }
        let grade;
        if (score >= 80 && score <= 100) {
            grade = 'A';
        } else if (score >= 70 && score <= 79) {
            grade = 'B';
        } else if (score >= 60 && score <= 69) {
            grade = 'C';
        } else if (score >= 50 && score <= 59) {
            grade = 'D';
        } else {
            grade = 'F';
        }
        alert("The student's grade is: " + grade);
    });
});
