# BMI-Calculator

In order to run the project, execute the following commands :
1. Clone the Repo
2. `npm install`
3. `npm run dev`
4. Hit the API End Point http://127.0.0.1:8000/getBMI OR http://localhost:8000/getBMI


BMI = Mass / (Height^2)
kg / m^2 = kg / (m^2)


Calculation is done based on following conditions
-------------------------------------------------
BMI Range (kg/m2)       Health risk                BMI Category

18.4 and below     ->   Malnutrition risk      ->  UnderWeight
18.5 - 24.9        ->   Low risk               ->  Normal Weight
25 - 29.9          ->   Enhanced risk          ->  Overweight
30 - 34.9          ->   Medium risk            ->  Moderately obese
35 - 39.9          ->   High risk              ->  Several obese
40 and above       ->   Very high risk         ->  Very Severaly obese

The complete data is sent to client as an Array
Count of Overweight People is shown in Server console