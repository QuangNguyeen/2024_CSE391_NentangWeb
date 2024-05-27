$(document).ready(function () {
    $('#btnCheckAge').click(function() {
        let age = parseInt(prompt("Enter your age: "));
        if(age >= 18){
            alert("You are old enough to drive.")
        }else{
            alert("You are left with "+(18 - age)+" years to drive.")
        }
    });
})