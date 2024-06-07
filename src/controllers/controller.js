let InputData = require('../seedData/InputData.json');
let BMIData = require('../seedData/BMIData.json');
let overWeight = 0;

const calculateBMI = async (req, res) => {
    for (let index in InputData) {
        InputData[index] = calculateBMIForSinglePerson(InputData[index]);
    }
    console.log("Count of Overweight People : ", overWeight);
    return res.json(InputData);
}

function calculateBMIForSinglePerson(singlePersonData) {
    let BMI = (singlePersonData.WeightKg / (convertCmToMeter(singlePersonData.HeightCm) ** 2)).toFixed(1);
    const BMIDataKeys = Object.keys(BMIData);
    let leftIndex = 0;
    let rightIndex = BMIDataKeys.length;
    let targetIndex;

    // Tweak Binary Search to get the target index
    while (leftIndex <= rightIndex) {
        let middleIndex = (leftIndex + rightIndex) / 2;
        if (BMIDataKeys[middleIndex] >= BMI) {
            rightIndex = middleIndex - 1;
        } else {
            targetIndex = middleIndex;
            leftIndex = middleIndex + 1;
        }
    }
    if (BMIDataKeys[targetIndex] >= 25) {
        overWeight += 1;
    }
    return { ...singlePersonData, BodyMassIndex: BMI, ...BMIData[BMIDataKeys[targetIndex]] };
}

function convertCmToMeter(heightInCm) {
    return heightInCm / 100;
}

module.exports = { calculateBMI };