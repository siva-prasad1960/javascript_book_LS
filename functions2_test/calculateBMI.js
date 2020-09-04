function calculateBMI(heightInCM, weightInKG) {
  return bmi = weightInKG / (heightInCM / 100) ** 2;
}

console.log(calculateBMI(180, 80));