/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

// Input: Weight (kg) and Height (m)
const weight = 70;
const height = 1.75;


// Calculate BMI
const bmi = weight / (height ** 2);

// Determine Health Category
let healthCategory;

if(bmi < 18.5) {
    healthCategory = 'underweight';
} else if(bmi >= 18.5 && bmi <= 24.0){
    healthCategory = 'normal';
}   else if(bmi >= 25.0 && bmi <= 29.9){
    healthCategory = 'overweight';
} else {
    healthCategory = 'obese';
}

// Output
console.log(`BMI: ${bmi.toFixed(2)}`);

console.log(`You are ${healthCategory}.`);
// Output: BMI: 22.86
// You are normal.

