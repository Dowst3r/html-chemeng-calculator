function MassOptions() {
    const Dropdown1 = document.getElementById("Selection");
    const Dropdown2 = document.getElementById("Selection2");

    Dropdown1.innerHTML = "";
    Dropdown2.innerHTML = "";

    const massOptions1 = [
        { value: "tonnes1", text: "Tonnes" },
        { value: "kilograms1", text: "Kilograms" },
        { value: "grams1", text: "Grams" },
        { value: "milligrams1", text: "Milligrams" },
        { value: "ounces1", text: "Ounces" },
        { value: "pounds1", text: "Pounds" },
        { value: "stone1", text: "Stone" },
        { value: "ton1", text: "Tons" }
    ];
    const massOptions2 = [
        { value: "tonnes2", text: "Tonnes" },
        { value: "kilograms2", text: "Kilograms" },
        { value: "grams2", text: "Grams" },
        { value: "milligrams2", text: "Milligrams" },
        { value: "ounces2", text: "Ounces" },
        { value: "pounds2", text: "Pounds" },
        { value: "stone2", text: "Stone" },
        { value: "ton2", text: "Tons" }
    ];

    massOptions1.forEach(optionData => {
        const option1 = document.createElement("option");
        option1.value = optionData.value;
        option1.textContent = optionData.text;
        Dropdown1.appendChild(option1);
    });
    massOptions2.forEach(optionData => {
        const option2 = document.createElement("option");
        option2.value = optionData.value;
        option2.textContent = optionData.text;
        Dropdown2.appendChild(option2);
    });
}



function LengthOptions() {
    const Dropdown1 = document.getElementById("Selection");
    const Dropdown2 = document.getElementById("Selection2");

    Dropdown1.innerHTML = "";
    Dropdown2.innerHTML = "";

    const lengthOptions1 = [
        { value: "kilometers1", text: "Kilometers" },
        { value: "meters1", text: "Meters" },
        { value: "centimeters1", text: "Centimeters" },
        { value: "mile1", text: "Miles" },
        { value: "yards1", text: "Yards" },
        { value: "feet1", text: "Feet" },
        { value: "inches1", text: "Inches" },
        { value: "parsec1", text: "Parsec" }
    ];
    const lengthOptions2 = [
        { value: "kilometers2", text: "Kilometers" },
        { value: "meters2", text: "Meters" },
        { value: "centimeters2", text: "Centimeters" },
        { value: "mile2", text: "Miles" },
        { value: "yards2", text: "Yards" },
        { value: "feet2", text: "Feet" },
        { value: "inches2", text: "Inches" },
        { value: "parsec2", text: "Parsec" }
    ];

    lengthOptions1.forEach(optionData => {
        const option1 = document.createElement("option");
        option1.value = optionData.value;
        option1.textContent = optionData.text;
        Dropdown1.appendChild(option1);
    });
    lengthOptions2.forEach(optionData => {
        const option2 = document.createElement("option");
        option2.value = optionData.value;
        option2.textContent = optionData.text;
        Dropdown2.appendChild(option2);
    });
}




function TemperatureOptions() {
    const Dropdown1 = document.getElementById("Selection");
    const Dropdown2 = document.getElementById("Selection2");

    Dropdown1.innerHTML = "";
    Dropdown2.innerHTML = "";

    const temperatureOptions1 = [
        { value: "celsius1", text: "Celsius" },
        { value: "fahrenheit1", text: "Fahrenheit" },
        { value: "kelvin1", text: "Kelvin" }
    ];
    const temperatureOptions2 = [
        { value: "celsius2", text: "Celsius" },
        { value: "fahrenheit2", text: "Fahrenheit" },
        { value: "kelvin2", text: "Kelvin" }
    ];
    temperatureOptions1.forEach(optionData => {
        const option1 = document.createElement("option");
        option1.value = optionData.value;
        option1.textContent = optionData.text;
        Dropdown1.appendChild(option1);
    });
    temperatureOptions2.forEach(optionData => {
        const option2 = document.createElement("option");
        option2.value = optionData.value;
        option2.textContent = optionData.text;
        Dropdown2.appendChild(option2);
    });
}






function PressureOptions() {
    const Dropdown1 = document.getElementById("Selection");
    const Dropdown2 = document.getElementById("Selection2");

    Dropdown1.innerHTML = "";
    Dropdown2.innerHTML = "";

    const pressureOptions1 = [
        { value: "pascal1", text: "Pascals" },
        { value: "torr1", text: "Torr" },
        { value: "psi1", text: "PSI" },
        { value: "standard-atmosphere1", text: "Standard atmospheres" },
        { value: "millibar1", text: "Millibar" },
        { value: "bar1", text: "Bar" },
    ];
    const pressureptions2 = [
        { value: "pascal2", text: "Pascals" },
        { value: "torr2", text: "Torr" },
        { value: "psi2", text: "PSI" },
        { value: "standard-atmosphere2", text: "Standard atmospheres" },
        { value: "millibar2", text: "Millibar" },
        { value: "bar2", text: "Bar" },
    ];

    pressureOptions1.forEach(optionData => {
        const option1 = document.createElement("option");
        option1.value = optionData.value;
        option1.textContent = optionData.text;
        Dropdown1.appendChild(option1);
    });
    pressureptions2.forEach(optionData => {
        const option2 = document.createElement("option");
        option2.value = optionData.value;
        option2.textContent = optionData.text;
        Dropdown2.appendChild(option2);
    });
}






function TimeOptions() {
    const Dropdown1 = document.getElementById("Selection");
    const Dropdown2 = document.getElementById("Selection2");

    Dropdown1.innerHTML = "";
    Dropdown2.innerHTML = "";

    const timeOptions1 = [
        { value: "second1", text: "Seconds" },
        { value: "millisecond1", text: "Milliseconds" },
        { value: "microsecond1", text: "Microseconds" },
        { value: "nanosecond1", text: "Nanoseconds" },
        { value: "minute1", text: "Minutes" },
        { value: "hour1", text: "Hours" },
        { value: "day1", text: "Days" },
        { value: "week1", text: "Weeks" },
        { value: "fortnight1", text: "Fortnights" },
        { value: "month1", text: "Months" },
        { value: "year1", text: "Years" },
        { value: "decade1", text: "Decades" },
        { value: "century1", text: "Centuries" },
        { value: "millennium1", text: "Millenniums" }
    ];
    const timeOptions2 = [
        { value: "second2", text: "Seconds" },
        { value: "millisecond2", text: "Milliseconds" },
        { value: "microsecond2", text: "Microseconds" },
        { value: "nanosecond2", text: "Nanoseconds" },
        { value: "minute2", text: "Minutes" },
        { value: "hour2", text: "Hours" },
        { value: "day2", text: "Days" },
        { value: "week2", text: "Weeks" },
        { value: "fortnight2", text: "Fortnights" },
        { value: "month2", text: "Months" },
        { value: "year2", text: "Years" },
        { value: "decade2", text: "Decades" },
        { value: "century2", text: "Centuries" },
        { value: "millennium2", text: "Millenniums" }
    ];

    timeOptions1.forEach(optionData => {
        const option1 = document.createElement("option");
        option1.value = optionData.value;
        option1.textContent = optionData.text;
        Dropdown1.appendChild(option1);
    });
    timeOptions2.forEach(optionData => {
        const option2 = document.createElement("option");
        option2.value = optionData.value;
        option2.textContent = optionData.text;
        Dropdown2.appendChild(option2);
    });
}







function EnergyOptions() {
    const Dropdown1 = document.getElementById("Selection");
    const Dropdown2 = document.getElementById("Selection2");

    Dropdown1.innerHTML = "";
    Dropdown2.innerHTML = "";

    const energyOptions1 = [
        { value: "joule1", text: "Joules" },
        { value: "kilojoules1", text: "Kilojoules" },
        { value: "calories1", text: "Calories" },
        { value: "kilocalories1", text: "Kilocalories" },
        { value: "kilowatt-hour1", text: "Kilowatt Hours" },
        { value: "btu1", text: "British Thermal Unit (BTU)" },
        { value: "footpound1", text: "Foot-Pounds" },
        { value: "electronvolt1", text: "Electron Volts" }
    ];
    const energyOptions2 = [
        { value: "joule2", text: "Joules" },
        { value: "kilojoules2", text: "Kilojoules" },
        { value: "calories2", text: "Calories" },
        { value: "kilocalories2", text: "Kilocalories" },
        { value: "kilowatt-hour2", text: "Kilowatt Hours" },
        { value: "btu2", text: "British Thermal Unit (BTU)" },
        { value: "footpound2", text: "Foot-Pounds" },
        { value: "electronvolt2", text: "Electron Volts" }
    ];

    energyOptions1.forEach(optionData => {
        const option1 = document.createElement("option");
        option1.value = optionData.value;
        option1.textContent = optionData.text;
        Dropdown1.appendChild(option1);
    });
    energyOptions2.forEach(optionData => {
        const option2 = document.createElement("option");
        option2.value = optionData.value;
        option2.textContent = optionData.text;
        Dropdown2.appendChild(option2);
    });
}







var val;
var madeSelection_1;
var madeSelection_2;

function convert(opt1, opt2, val, factor, factor2, factor3, factor4, unitStr) {
    if ((madeSelection_1 == opt1) && (madeSelection_2 == opt2)) {
        const calculation = (val * factor) + (factor2 * factor3) + factor4;
        const formattedCalculation = calculation.toFixed(20);
        const CalculationStr = (+formattedCalculation).toLocaleString('en-US', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 20
        });
        const formattedCalculationScie = parseFloat(calculation).toExponential(4);
        var result = CalculationStr.toLocaleString() + unitStr;
        var result_sci = formattedCalculationScie + unitStr;
        document.getElementById("text_output").innerHTML = result + "<br>" + "<br>" + result_sci
    }
}

function Conversion() {
    val = parseFloat(document.getElementById("value").value);
    var selectFrom = document.getElementById("Selection");
    var selectTo = document.getElementById("Selection2");

    madeSelection_1 = selectFrom[selectFrom.selectedIndex].value;
    madeSelection_2 = selectTo[selectTo.selectedIndex].value;

    convert("tonnes1", "tonnes2", val, 1, 0, 1, 0, " tonnes");
    convert("tonnes1", "kilograms2", val, 1000, 0, 1, 0, "kg");
    convert("tonnes1", "grams2", val, 1000000, 0, 1, 0, "g");
    convert("tonnes1", "milligrams2", val, 1000000000, 0, 1, 0, " milligrams");
    convert("tonnes1", "ounces2", val, 35273.962, 0, 1, 0, "oz");
    convert("tonnes1", "pounds2", val, 2204.62262, 0, 1, 0, "lbs");
    convert("tonnes1", "stone2", val, 157.473045, 0, 1, 0, "st");
    convert("tonnes1", "ton2", val, 1 / 1.01604691, 0, 1, 0, " tons");

    convert("kilograms1", "tonnes2", val, 1 / 1000, 0, 1, 0, " tonnes");
    convert("kilograms1", "kilograms2", val, 1, 0, 1, 0, "kg");
    convert("kilograms1", "grams2", val, 1000, 0, 1, 0, "g");
    convert("kilograms1", "milligrams2", val, 1000000, 0, 1, 0, " milligrams");
    convert("kilograms1", "ounces2", val, 35.273962, 0, 1, 0, "oz");
    convert("kilograms1", "pounds2", val, 2.20462262, 0, 1, 0, "lbs");
    convert("kilograms1", "stone2", val, 1 / 6.35029317, 0, 1, 0, "st");
    convert("kilograms1", "ton2", val, 1 / 1016.04691, 0, 1, 0, " tons");

    convert("grams1", "tonnes2", val, 1 / 1000000, 0, 1, 0, " tonnes");
    convert("grams1", "kilograms2", val, 1 / 1000, 0, 1, 0, "kg");
    convert("grams1", "grams2", val, 1, 0, 1, 0, "g");
    convert("grams1", "milligrams2", val, 1000, 0, 1, 0, " milligrams");
    convert("grams1", "ounces2", val, 1 / 28.3495231, 0, 1, 0, "oz");
    convert("grams1", "pounds2", val, 1 / 453.59237, 0, 1, 0, "lbs");
    convert("grams1", "stone2", val, 1 / 6350.29317, 0, 1, 0, "st");
    convert("grams1", "ton2", val, 1 / 1.0160E+6, 0, 1, 0, " tons");

    convert("milligrams1", "tonnes2", val, 1 / 1000000000, 0, 1, 0, " tonnes");
    convert("milligrams1", "kilograms2", val, 1 / 1000000, 0, 1, 0, "kg");
    convert("milligrams1", "grams2", val, 1 / 1000, 0, 1, 0, "g");
    convert("milligrams1", "milligrams2", val, 1, 0, 1, 0, " milligrams");
    convert("milligrams1", "ounces2", val, 1 / 28349.5231, 0, 1, 0, "oz");
    convert("milligrams1", "pounds2", val, 1 / 453592.37, 0, 1, 0, "lbs");
    convert("milligrams1", "stone2", val, 1 / 6.3503E+6, 0, 1, 0, "st");
    convert("milligrams1", "ton2", val, 1 / 1.0160E+9, 0, 1, 0, " tons");

    convert("ounces1", "tonnes2", val, 1 / 35273.962, 0, 1, 0, " tonnes");
    convert("ounces1", "kilograms2", val, 1 / 35.273962, 0, 1, 0, "kg");
    convert("ounces1", "grams2", val, 28.3495231, 0, 1, 0, "g");
    convert("ounces1", "milligrams2", val, 28349.5231, 0, 1, 0, " milligrams");
    convert("ounces1", "ounces2", val, 1, 0, 1, 0, "oz");
    convert("ounces1", "pounds2", val, 1 / 16, 0, 1, 0, "lbs");
    convert("ounces1", "stone2", val, 224, 0, 1, 0, "st");
    convert("ounces1", "ton2", val, 35840, 0, 1, 0, " tons");

    convert("pounds1", "tonnes2", val, 1 / 2204.62262, 0, 1, 0, " tonnes");
    convert("pounds1", "kilograms2", val, 1 / 2.20462262, 0, 1, 0, "kg");
    convert("pounds1", "grams2", val, 453.59237, 0, 1, 0, "g");
    convert("pounds1", "milligrams2", val, 453592.37, 0, 1, 0, " milligrams");
    convert("pounds1", "ounces2", val, 16, 0, 1, 0, "oz");
    convert("pounds1", "pounds2", val, 1, 0, 1, 0, "lbs");
    convert("pounds1", "stone2", val, 1 / 14, 0, 1, 0, "st");
    convert("pounds1", "ton2", val, 1 / 2240, 0, 1, 0, " tons");

    convert("stone1", "tonnes2", val, 1 / 157.473045, 0, 1, 0, " tonnes");
    convert("stone1", "kilograms2", val, 6.35029317, 0, 1, 0, "kg");
    convert("stone1", "grams2", val, 6350.29317, 0, 1, 0, "g");
    convert("stone1", "milligrams2", val, 6.3503E+6, 0, 1, 0, " milligrams");
    convert("stone1", "ounces2", val, 224, 0, 1, 0, "oz");
    convert("stone1", "pounds2", val, 14, 0, 1, 0, "lbs");
    convert("stone1", "stone2", val, 1, 0, 1, 0, "st");
    convert("stone1", "ton2", val, 1 / 160, 0, 1, 0, " tons");

    convert("ton1", "tonnes2", val, 1.01604691, 0, 1, 0, " tonnes");
    convert("ton1", "kilograms2", val, 1016.04691, 0, 1, 0, "kg");
    convert("ton1", "grams2", val, 1.0160E+6, 0, 1, 0, "g");
    convert("ton1", "milligrams2", val, 1.0160E+9, 0, 1, 0, " milligrams");
    convert("ton1", "ounces2", val, 35840, 0, 1, 0, "oz");
    convert("ton1", "pounds2", val, 2240, 0, 1, 0, "lbs");
    convert("ton1", "stone2", val, 160, 0, 1, 0, "st");
    convert("ton1", "ton2", val, 1, 0, 1, 0, " tons");






    convert("celsius1", "celsius2", val, 1, 0, 1, 0, "°C");
    convert("celsius1", "fahrenheit2", val, 1.8, 32, 1, 0, "°F");
    convert("celsius1", "kelvin2", val, 1, 273.15, 1, 0, "°K");

    convert("fahrenheit1", "celsius2", val, 1, -32, 5 / 9, 0, "°C");
    convert("fahrenheit1", "fahrenheit2", val, 1, -32, 5 / 9, 273.15, "°F");
    convert("fahrenheit1", "kelvin2", val, 1, 273.15, 1, 0, "°K");

    convert("kelvin1", "celsius2", val, 1, -273.15, 1, 0, "°C");
    convert("kelvin1", "fahrenheit2", val, 1.8, -459.67, 1, 0, "°F");
    convert("kelvin1", "kelvin2", val, 1, 0, 1, 0, "°K");






    convert("kilometers1", "kilometers2", val, 1, 0, 1, 0, "km");
    convert("kilometers1", "meters2", val, 1000, 0, 1, 0, "m");
    convert("kilometers1", "centimeters2", val, 100000, 0, 1, 0, "cm");
    convert("kilometers1", "mile2", val, 1 / 1.609, 0, 1, 0, " miles");
    convert("kilometers1", "yard2", val, 1093.6133, 0, 1, 0, " yards");
    convert("kilometers1", "feet2", val, 3280.8399, 0, 1, 0, "ft");
    convert("kilometers1", "inches2", val, 39370.0787, 0, 1, 0, " inches");
    convert("kilometers1", "parsec2", val, 1 / 3.0857E+13, 0, 1, 0, " parsecs");

    convert("meters1", "kilometers2", val, 1 / 1000, 0, 1, 0, "km");
    convert("meters1", "meters2", val, 1, 0, 1, 0, "m");
    convert("meters1", "centimeters2", val, 100, 0, 1, 0, "cm");
    convert("meters1", "mile2", val, 1609, 0, 1, 0, " miles");
    convert("meters1", "yard2", val, 1.0936133, 0, 1, 0, " yards");
    convert("meters1", "feet2", val, 3.2808399, 0, 1, 0, "ft");
    convert("meters1", "inches2", val, 39.3700787, 0, 1, 0, " inches");
    convert("meters1", "parsec2", val, 1 / 3.0857E+16, 0, 1, 0, " parsecs");

    convert("centimeters1", "kilometers2", val, 1 / 100000, 0, 1, 0, "km");
    convert("centimeters1", "meters2", val, 100, 0, 1, 0, "m");
    convert("centimeters1", "centimeters2", val, 1, 0, 1, 0, "cm");
    convert("centimeters1", "mile2", val, 1 / 160934.4, 0, 1, 0, " miles");
    convert("centimeters1", "yard2", val, 1 / 91.44, 0, 1, 0, " yards");
    convert("centimeters1", "feet2", val, 1 / 30.48, 0, 1, 0, "ft");
    convert("centimeters1", "inches2", val, 1 / 2.54, 0, 1, 0, " inches");
    convert("centimeters1", "parsec2", val, 1 / 3.0857E+18, 0, 1, 0, " parsecs");

    convert("mile1", "kilometers2", val, 1.609344, 0, 1, 0, "km");
    convert("mile1", "meters2", val, 1609.344, 0, 1, 0, "m");
    convert("mile1", "centimeters2", val, 160934.4, 0, 1, 0, "cm");
    convert("mile1", "mile2", val, 1, 0, 1, 0, " miles");
    convert("mile1", "yard2", val, 1760, 0, 1, 0, " yards");
    convert("mile1", "feet2", val, 5280, 0, 1, 0, "ft");
    convert("mile1", "inches2", val, 63360, 0, 1, 0, " inches");
    convert("mile1", "parsec2", val, 1 / 1.9174E+13, 0, 1, 0, " parsecs");

    convert("yard1", "kilometers2", val, 1 / 1093.6133, 0, 1, 0, "km");
    convert("yard1", "meters2", val, 1 / 1.0936133, 0, 1, 0, "m");
    convert("yard1", "centimeters2", val, 91.44, 0, 1, 0, "cm");
    convert("yard1", "mile2", val, 1 / 1760, 0, 1, 0, " miles");
    convert("yard1", "yard2", val, 1, 0, 1, 0, " yards");
    convert("yard1", "feet2", val, 3, 0, 1, 0, "ft");
    convert("yard1", "inches2", val, 36, 0, 1, 0, " inches");
    convert("yard1", "parsec2", val, 1 / 3.3745E+16, 0, 1, 0, " parsecs");

    convert("feet1", "kilometers2", val, 1 / 3280.8399, 0, 1, 0, "km");
    convert("feet1", "meters2", val, 1 / 3.2808399, 0, 1, 0, "m");
    convert("feet1", "centimeters2", val, 30.48, 0, 1, 0, "cm");
    convert("feet1", "mile2", val, 1 / 5280, 0, 1, 0, " miles");
    convert("feet1", "yard2", val, 1 / 3, 0, 1, 0, " yards");
    convert("feet1", "feet2", val, 1, 0, 1, 0, "ft");
    convert("feet1", "inches2", val, 12, 0, 1, 0, " inches");
    convert("feet1", "parsec2", val, 1 / 1.0124E+17, 0, 1, 0, " parsecs");

    convert("inches1", "kilometers2", val, 1 / 39370.0787, 0, 1, 0, "km");
    convert("inches1", "meters2", val, 1 / 39.3700787, 0, 1, 0, "m");
    convert("inches1", "centimeters2", val, 2.54, 0, 1, 0, "cm");
    convert("inches1", "mile2", val, 1 / 63360, 0, 1, 0, " miles");
    convert("inches1", "yard2", val, 36, 0, 1, 0, " yards");
    convert("inches1", "feet2", val, 12, 0, 1, 0, "ft");
    convert("inches1", "inches2", val, 1, 0, 1, 0, " inches");
    convert("inches1", "parsec2", val, 1 / 1.2148E+18, 0, 1, 0, " parsecs");

    convert("parsec1", "kilometers2", val, 3.0857E+13, 0, 1, 0, "km");
    convert("parsec1", "meters2", val, 3.0857E+16, 0, 1, 0, "m");
    convert("parsec1", "centimeters2", val, 3.0857E+18, 0, 1, 0, "cm");
    convert("parsec1", "mile2", val, 1.9174E+13, 0, 1, 0, " miles");
    convert("parsec1", "yard2", val, 3.3745E+16, 0, 1, 0, " yards");
    convert("parsec1", "feet2", val, 1.0124E+17, 0, 1, 0, "ft");
    convert("parsec1", "inches2", val, 1.2148E+18, 0, 1, 0, " inches");
    convert("parsec1", "parsec2", val, 1, 0, 1, 0, " parsecs");






    convert("pascal1", "pascal2", val, 1, 0, 1, 0, "Pa");
    convert("pascal1", "torr2", val, 1 / 133.322368, 0, 1, 0, " Torr");
    convert("pascal1", "psi2", val, 1 / 6894.75729, 0, 1, 0, "psi");
    convert("pascal1", "standard-atmosphere2", val, 1 / 101325, 0, 1, 0, " Standard Atmospheres");
    convert("pascal1", "millibar2", val, 1 / 100, 0, 1, 0, " Millibars");
    convert("pascal1", "bar2", val, 1 / 100000, 0, 1, 0, " Bar");

    convert("torr1", "pascal2", val, 133.322368, 0, 1, 0, "Pa");
    convert("torr1", "torr2", val, 1, 0, 1, 0, " Torr");
    convert("torr1", "psi2", val, 1 / 51.7149327, 0, 1, 0, "psi");
    convert("torr1", "standard-atmosphere2", val, 1 / 760.000002, 0, 1, 0, " Standard Atmospheres");
    convert("torr1", "millibar2", val, 1.33322368, 0, 1, 0, " Millibars");
    convert("torr1", "bar2", val, 1 / 750.061685, 0, 1, 0, " Bar");

    convert("psi1", "pascal2", val, 6894.75729, 0, 1, 0, "Pa");
    convert("psi1", "torr2", val, 51.7149327, 0, 1, 0, " Torr");
    convert("psi1", "psi2", val, 1, 0, 1, 0, "psi");
    convert("psi1", "standard-atmosphere2", val, 1 / 14.6959488, 0, 1, 0, " Standard Atmospheres");
    convert("psi1", "millibar2", val, 68.9475729, 0, 1, 0, " Millibars");
    convert("psi1", "bar2", val, 1 / 14.5037738, 0, 1, 0, " Bar");

    convert("standard-atmosphere1", "pascal2", val, 101325, 0, 1, 0, "Pa");
    convert("standard-atmosphere1", "torr2", val, 760.000002, 0, 1, 0, " Torr");
    convert("standard-atmosphere1", "psi2", val, 14.6959488, 0, 1, 0, "psi");
    convert("standard-atmosphere1", "standard-atmosphere2", val, 1, 0, 1, 0, " Standard Atmospheres");
    convert("standard-atmosphere1", "millibar2", val, 1013.25, 0, 1, 0, " Millibars");
    convert("standard-atmosphere1", "bar2", val, 1.01325, 0, 1, 0, " Bar");

    convert("millibar1", "pascal2", val, 100, 0, 1, 0, "Pa");
    convert("millibar1", "torr2", val, 1 / 1.33322368, 0, 1, 0, " Torr");
    convert("millibar1", "psi2", val, 68.9475729, 0, 1, 0, "psi");
    convert("millibar1", "standard-atmosphere2", val, 1 / 1013.25, 0, 1, 0, " Standard Atmospheres");
    convert("millibar1", "millibar2", val, 1, 0, 1, 0, " Millibars");
    convert("millibar1", "bar2", val, 1 / 1000, 0, 1, 0, " Bar");

    convert("bar1", "pascal2", val, 100000, 0, 1, 0, "Pa");
    convert("bar1", "torr2", val, 750.061685, 0, 1, 0, " Torr");
    convert("bar1", "psi2", val, 14.5037738, 0, 1, 0, "psi");
    convert("bar1", "standard-atmosphere2", val, 1 / 1.01325, 0, 1, 0, " Standard Atmospheres");
    convert("bar1", "millibar2", val, 1000, 0, 1, 0, " Millibars");
    convert("bar1", "bar2", val, 1, 0, 1, 0, " Bar");





    convert("second1", "second2", val, 1, 0, 1, 0, "s");
    convert("second1", "millisecond2", val, 1000, 0, 1, 0, " milliseconds");
    convert("second1", "microsecond2", val, 1000000, 0, 1, 0, " microseconds");
    convert("second1", "nanosecond2", val, 1000000000, 0, 1, 0, " nanoseconds");
    convert("second1", "minute2", val, 1 / 60, 0, 1, 0, "min");
    convert("second1", "hour2", val, 1 / 3600, 0, 1, 0, "hr");
    convert("second1", "day2", val, 1 / 86400, 0, 1, 0, " days");
    convert("second1", "week2", val, 1 / 604800, 0, 1, 0, " weeks");
    convert("second1", "fortnight2", val, 1 / 1209600, 0, 1, 0, " fortnights");
    convert("second1", "month2", val, 1 / 2628000, 0, 1, 0, " months");
    convert("second1", "year2", val, 1 / 31536000, 0, 1, 0, " years");
    convert("second1", "decade2", val, 1 / 315360000, 0, 1, 0, " decades");
    convert("second1", "century2", val, 1 / 3.1536E+9, 0, 1, 0, " centuries");
    convert("second1", "millennium2", val, 1 / 3.1536E+10, 0, 1, 0, " millenniums");

    convert("millisecond1", "second2", val, 1 / 1000, 0, 1, 0, "s");
    convert("millisecond1", "millisecond2", val, 1, 0, 1, 0, " milliseconds");
    convert("millisecond1", "microsecond2", val, 1000, 0, 1, 0, " microseconds");
    convert("millisecond1", "nanosecond2", val, 1000000, 0, 1, 0, " nanoseconds");
    convert("millisecond1", "minute2", val, 1 / 60000, 0, 1, 0, "min");
    convert("millisecond1", "hour2", val, 1 / 3.6000E+6, 0, 1, 0, "hr");
    convert("millisecond1", "day2", val, 1 / 86400000, 0, 1, 0, " days");
    convert("millisecond1", "week2", val, 1 / 604800000, 0, 1, 0, " weeks");
    convert("millisecond1", "fortnight2", val, 1 / 1.2096E+9, 0, 1, 0, " fortnights");
    convert("millisecond1", "month2", val, 1 / 2.6280E+9, 0, 1, 0, " months");
    convert("millisecond1", "year2", val, 1 / 3.1536E+10, 0, 1, 0, " years");
    convert("millisecond1", "decade2", val, 1 / 3.1536E+11, 0, 1, 0, " decades");
    convert("millisecond1", "century2", val, 1 / 3.1536E+12, 0, 1, 0, " centuries");
    convert("millisecond1", "millennium2", val, 1 / 3.1536E+13, 0, 1, 0, " millenniums");

    convert("microsecond1", "second2", val, 1 / 1000000, 0, 1, 0, "s");
    convert("microsecond1", "millisecond2", val, 1 / 1000, 0, 1, 0, " milliseconds");
    convert("microsecond1", "microsecond2", val, 1, 0, 1, 0, " microseconds");
    convert("microsecond1", "nanosecond2", val, 1000, 0, 1, 0, " nanoseconds");
    convert("microsecond1", "minute2", val, 1 / 60000000, 0, 1, 0, "min");
    convert("microsecond1", "hour2", val, 1 / 3.600E+9, 0, 1, 0, "hr");
    convert("microsecond1", "day2", val, 1 / 8.64E+10, 0, 1, 0, " days");
    convert("microsecond1", "week2", val, 1 / 6.048E+11, 0, 1, 0, " weeks");
    convert("microsecond1", "fortnight2", val, 1 / 1.2096E+12, 0, 1, 0, " fortnights");
    convert("microsecond1", "month2", val, 1 / 2.628E+12, 0, 1, 0, " months");
    convert("microsecond1", "year2", val, 1 / 3.1536E+13, 0, 1, 0, " years");
    convert("microsecond1", "decade2", val, 1 / 3.1536E+14, 0, 1, 0, " decades");
    convert("microsecond1", "century2", val, 1 / 3.1536E+15, 0, 1, 0, " centuries");
    convert("microsecond1", "millennium2", val, 1 / 3.1536E+16, 0, 1, 0, " millenniums");

    convert("nanosecond1", "second2", val, 1 / 1.0000E+9, 0, 1, 0, "s");
    convert("nanosecond1", "millisecond2", val, 1 / 1.0000E+6, 0, 1, 0, " milliseconds");
    convert("nanosecond1", "microsecond2", val, 1 / 1.0000E+3, 0, 1, 0, " microseconds");
    convert("nanosecond1", "nanosecond2", val, 1, 0, 1, 0, " nanoseconds");
    convert("nanosecond1", "minute2", val, 1 / 6.0000E+10, 0, 1, 0, "min");
    convert("nanosecond1", "hour2", val, 1 / 3.6000E+12, 0, 1, 0, "hr");
    convert("nanosecond1", "day2", val, 1 / 8.6400E+13, 0, 1, 0, " days");
    convert("nanosecond1", "week2", val, 1 / 6.0480E+14, 0, 1, 0, " weeks");
    convert("nanosecond1", "fortnight2", val, 1 / 1.2096E+15, 0, 1, 0, " fortnights");
    convert("nanosecond1", "month2", val, 1 / 2.6280E+15, 0, 1, 0, " months");
    convert("nanosecond1", "year2", val, 1 / 3.1536E+16, 0, 1, 0, " years");
    convert("nanosecond1", "decade2", val, 1 / 3.1536E+17, 0, 1, 0, " decades");
    convert("nanosecond1", "century2", val, 1 / 3.1536E+18, 0, 1, 0, " centuries");
    convert("nanosecond1", "millennium2", val, 1 / 3.1536E+19, 0, 1, 0, " millenniums");

    convert("minute1", "second2", val, 60, 0, 1, 0, "s");
    convert("minute1", "millisecond2", val, 60000, 0, 1, 0, " milliseconds");
    convert("minute1", "microsecond2", val, 60000000, 0, 1, 0, " microseconds");
    convert("minute1", "nanosecond2", val, 60000000000, 0, 1, 0, " nanoseconds");
    convert("minute1", "minute2", val, 1, 0, 1, 0, "min");
    convert("minute1", "hour2", val, 1 / 60, 0, 1, 0, "hr");
    convert("minute1", "day2", val, 1 / 1440, 0, 1, 0, " days");
    convert("minute1", "week2", val, 1 / 10080, 0, 1, 0, " weeks");
    convert("minute1", "fortnight2", val, 1 / 20160, 0, 1, 0, " fortnights");
    convert("minute1", "month2", val, 1 / 43800, 0, 1, 0, " months");
    convert("minute1", "year2", val, 1 / 525600, 0, 1, 0, " years");
    convert("minute1", "decade2", val, 1 / 5256000, 0, 1, 0, " decades");
    convert("minute1", "century2", val, 1 / 52560000, 0, 1, 0, " centuries");
    convert("minute1", "millennium2", val, 1 / 525600000, 0, 1, 0, " millenniums");

    convert("hour1", "second2", val, 3600, 0, 1, 0, "s");
    convert("hour1", "millisecond2", val, 3600000, 0, 1, 0, " milliseconds");
    convert("hour1", "microsecond2", val, 3600000000, 0, 1, 0, " microseconds");
    convert("hour1", "nanosecond2", val, 3600000000000, 0, 1, 0, " nanoseconds");
    convert("hour1", "minute2", val, 60, 0, 1, 0, "min");
    convert("hour1", "hour2", val, 1, 0, 1, 0, "hr");
    convert("hour1", "day2", val, 1 / 24, 0, 1, 0, " days");
    convert("hour1", "week2", val, 1 / 168, 0, 1, 0, " weeks");
    convert("hour1", "fortnight2", val, 1 / 336, 0, 1, 0, " fortnights");
    convert("hour1", "month2", val, 1 / 730, 0, 1, 0, " months");
    convert("hour1", "year2", val, 1 / 8760, 0, 1, 0, " years");
    convert("hour1", "decade2", val, 1 / 87600, 0, 1, 0, " decades");
    convert("hour1", "century2", val, 1 / 876000, 0, 1, 0, " centuries");
    convert("hour1", "millennium2", val, 1 / 8760000, 0, 1, 0, " millenniums");

    convert("day1", "second2", val, 86400, 0, 1, 0, "s");
    convert("day1", "millisecond2", val, 86400000, 0, 1, 0, " milliseconds");
    convert("day1", "microsecond2", val, 86400000000, 0, 1, 0, " microseconds");
    convert("day1", "nanosecond2", val, 86400000000000, 0, 1, 0, " nanoseconds");
    convert("day1", "minute2", val, 1440, 0, 1, 0, "min");
    convert("day1", "hour2", val, 24, 0, 1, 0, "hr");
    convert("day1", "day2", val, 1, 0, 1, 0, " days");
    convert("day1", "week2", val, 1 / 7, 0, 1, 0, " weeks");
    convert("day1", "fortnight2", val, 1 / 14, 0, 1, 0, " fortnights");
    convert("day1", "month2", val, 1 / 30.4166667, 0, 1, 0, " months");
    convert("day1", "year2", val, 1 / 365, 0, 1, 0, " years");
    convert("day1", "decade2", val, 1 / 3650, 0, 1, 0, " decades");
    convert("day1", "century2", val, 1 / 36500, 0, 1, 0, " centuries");
    convert("day1", "millennium2", val, 1 / 365000, 0, 1, 0, " millenniums");

    convert("week1", "second2", val, 604800, 0, 1, 0, "s");
    convert("week1", "millisecond2", val, 604800000, 0, 1, 0, " milliseconds");
    convert("week1", "microsecond2", val, 604800000000, 0, 1, 0, " microseconds");
    convert("week1", "nanosecond2", val, 604800000000000, 0, 1, 0, " nanoseconds");
    convert("week1", "minute2", val, 10080, 0, 1, 0, "min");
    convert("week1", "hour2", val, 168, 0, 1, 0, "hr");
    convert("week1", "day2", val, 7, 0, 1, 0, " days");
    convert("week1", "week2", val, 1, 0, 1, 0, " weeks");
    convert("week1", "fortnight2", val, 1 / 2, 0, 1, 0, " fortnights");
    convert("week1", "month2", val, 1 / 4.3452381, 0, 1, 0, " months");
    convert("week1", "year2", val, 1 / 52.1428571, 0, 1, 0, " years");
    convert("week1", "decade2", val, 1 / 521.428571, 0, 1, 0, " decades");
    convert("week1", "century2", val, 1 / 5214.28571, 0, 1, 0, " centuries");
    convert("week1", "millennium2", val, 1 / 52142.8571, 0, 1, 0, " millenniums");

    convert("fortnight1", "second2", val, 1209600, 0, 1, 0, "s");
    convert("fortnight1", "millisecond2", val, 1209600000, 0, 1, 0, " milliseconds");
    convert("fortnight1", "microsecond2", val, 1209600000000, 0, 1, 0, " microseconds");
    convert("fortnight1", "nanosecond2", val, 1209600000000000, 0, 1, 0, " nanoseconds");
    convert("fortnight1", "minute2", val, 20160, 0, 1, 0, "min");
    convert("fortnight1", "hour2", val, 336, 0, 1, 0, "hr");
    convert("fortnight1", "day2", val, 14, 0, 1, 0, " days");
    convert("fortnight1", "week2", val, 2, 0, 1, 0, " weeks");
    convert("fortnight1", "fortnight2", val, 1, 0, 1, 0, " fortnights");
    convert("fortnight1", "month2", val, 1 / 2.17261905, 0, 1, 0, " months");
    convert("fortnight1", "year2", val, 1 / 26.0714286, 0, 1, 0, " years");
    convert("fortnight1", "decade2", val, 1 / 260.714286, 0, 1, 0, " decades");
    convert("fortnight1", "century2", val, 1 / 2607.14286, 0, 1, 0, " centuries");
    convert("fortnight1", "millennium2", val, 1 / 2607.14286, 0, 1, 0, " millenniums");

    convert("month1", "second2", val, 2628000, 0, 1, 0, "s");
    convert("month1", "millisecond2", val, 2628000000, 0, 1, 0, " milliseconds");
    convert("month1", "microsecond2", val, 2628000000000, 0, 1, 0, " microseconds");
    convert("month1", "nanosecond2", val, 2628000000000000, 0, 1, 0, " nanoseconds");
    convert("month1", "minute2", val, 43800, 0, 1, 0, "min");
    convert("month1", "hour2", val, 730, 0, 1, 0, "hr");
    convert("month1", "day2", val, 30.4166667, 0, 1, 0, " days");
    convert("month1", "week2", val, 4.3452381, 0, 1, 0, " weeks");
    convert("month1", "fortnight2", val, 2.17261905, 0, 1, 0, " fortnights");
    convert("month1", "month2", val, 1, 0, 1, 0, " months");
    convert("month1", "year2", val, 1 / 12, 0, 1, 0, " years");
    convert("month1", "decade2", val, 1 / 120, 0, 1, 0, " decades");
    convert("month1", "century2", val, 1 / 1200, 0, 1, 0, " centuries");
    convert("month1", "millennium2", val, 1 / 12000, 0, 1, 0, " millenniums");

    convert("year1", "second2", val, 31536000, 0, 1, 0, "s");
    convert("year1", "millisecond2", val, 31536000000, 0, 1, 0, " milliseconds");
    convert("year1", "microsecond2", val, 31536000000000, 0, 1, 0, " microseconds");
    convert("year1", "nanosecond2", val, 31536000000000000, 0, 1, 0, " nanoseconds");
    convert("year1", "minute2", val, 525600, 0, 1, 0, "min");
    convert("year1", "hour2", val, 8760, 0, 1, 0, "hr");
    convert("year1", "day2", val, 365, 0, 1, 0, " days");
    convert("year1", "week2", val, 52.1428571, 0, 1, 0, " weeks");
    convert("year1", "fortnight2", val, 26.0714286, 0, 1, 0, " fortnights");
    convert("year1", "month2", val, 12, 0, 1, 0, " months");
    convert("year1", "year2", val, 1, 0, 1, 0, " years");
    convert("year1", "decade2", val, 1 / 10, 0, 1, 0, " decades");
    convert("year1", "century2", val, 1 / 100, 0, 1, 0, " centuries");
    convert("year1", "millennium2", val, 1 / 1000, 0, 1, 0, " millenniums");

    convert("decade1", "second2", val, 315360000, 0, 1, 0, "s");
    convert("decade1", "millisecond2", val, 315360000000, 0, 1, 0, " milliseconds");
    convert("decade1", "microsecond2", val, 315360000000000, 0, 1, 0, " microseconds");
    convert("decade1", "nanosecond2", val, 315360000000000000, 0, 1, 0, " nanoseconds");
    convert("decade1", "minute2", val, 5256000, 0, 1, 0, "min");
    convert("decade1", "hour2", val, 87600, 0, 1, 0, "hr");
    convert("decade1", "day2", val, 3650, 0, 1, 0, " days");
    convert("decade1", "week2", val, 521.428571, 0, 1, 0, " weeks");
    convert("decade1", "fortnight2", val, 260.714286, 0, 1, 0, " fortnights");
    convert("decade1", "month2", val, 120, 0, 1, 0, " months");
    convert("decade1", "year2", val, 10, 0, 1, 0, " years");
    convert("decade1", "decade2", val, 1, 0, 1, 0, " decades");
    convert("decade1", "century2", val, 1 / 10, 0, 1, 0, " centuries");
    convert("decade1", "millennium2", val, 1 / 100, 0, 1, 0, " millenniums");

    convert("century1", "second2", val, 3.1536E+9, 0, 1, 0, "s");
    convert("century1", "millisecond2", val, 3.1536E+12, 0, 1, 0, " milliseconds");
    convert("century1", "microsecond2", val, 3.1536E+15, 0, 1, 0, " microseconds");
    convert("century1", "nanosecond2", val, 3.1536E+18, 0, 1, 0, " nanoseconds");
    convert("century1", "minute2", val, 52560000, 0, 1, 0, "min");
    convert("century1", "hour2", val, 876000, 0, 1, 0, "hr");
    convert("century1", "day2", val, 36500, 0, 1, 0, " days");
    convert("century1", "week2", val, 5214.28571, 0, 1, 0, " weeks");
    convert("century1", "fortnight2", val, 2607.14286, 0, 1, 0, " fortnights");
    convert("century1", "month2", val, 1200, 0, 1, 0, " months");
    convert("century1", "year2", val, 100, 0, 1, 0, " years");
    convert("century1", "decade2", val, 10, 0, 1, 0, " decades");
    convert("century1", "century2", val, 1, 0, 1, 0, " centuries");
    convert("century1", "millennium2", val, 1 / 10, 0, 1, 0, " millenniums");

    convert("millenium1", "second2", val, 3.1536E+10, 0, 1, 0, "s");
    convert("millenium1", "millisecond2", val, 3.1536E+13, 0, 1, 0, " milliseconds");
    convert("millenium1", "microsecond2", val, 3.1536E+16, 0, 1, 0, " microseconds");
    convert("millenium1", "nanosecond2", val, 3.1536E+19, 0, 1, 0, " nanoseconds");
    convert("millenium1", "minute2", val, 525600000, 0, 1, 0, "min");
    convert("millenium1", "hour2", val, 8760000, 0, 1, 0, "hr");
    convert("millenium1", "day2", val, 365000, 0, 1, 0, " days");
    convert("millenium1", "week2", val, 52142.8571, 0, 1, 0, " weeks");
    convert("millenium1", "fortnight2", val, 26071.4286, 0, 1, 0, " fortnights");
    convert("millenium1", "month2", val, 12000, 0, 1, 0, " months");
    convert("millenium1", "year2", val, 1000, 0, 1, 0, " years");
    convert("millenium1", "decade2", val, 100, 0, 1, 0, " decades");
    convert("millenium1", "century2", val, 10, 0, 1, 0, " centuries");
    convert("millenium1", "millennium2", val, 1, 0, 1, 0, " millenniums");





    convert("joule1", "joule2", val, 1, 0, 1, 0, "J");
    convert("joule1", "kilojoules2", val, 1 / 1000, 0, 1, 0, "kJ");
    convert("joule1", "calories2", val, 1 / 4.184, 0, 1, 0, " cal");
    convert("joule1", "kilocalories2", val, 1 / 4184, 0, 1, 0, " kcal");
    convert("joule1", "kilowatt-hour2", val, 1 / 3.6000E+6, 0, 1, 0, "kWh");
    convert("joule1", "btu2", val, 1 / 1055.05585, 0, 1, 0, "BTU");
    convert("joule1", "footpound2", val, 1 / 1.35581795, 0, 1, 0, " footpound");
    convert("joule1", "electronvolt2", val, 6.2415E+18, 0, 1, 0, " eV");

    convert("kilojoules1", "joule2", val, 1000, 0, 1, 0, "J");
    convert("kilojoules1", "kilojoules2", val, 1, 0, 1, 0, "kJ");
    convert("kilojoules1", "calories2", val, 239.005736, 0, 1, 0, " cal");
    convert("kilojoules1", "kilocalories2", val, 1 / 4.184, 0, 1, 0, " kcal");
    convert("kilojoules1", "kilowatt-hour2", val, 1 / 3600, 0, 1, 0, "kWh");
    convert("kilojoules1", "btu2", val, 1 / 1.05505585, 0, 1, 0, "BTU");
    convert("kilojoules1", "footpound2", val, 737.562148, 0, 1, 0, " footpound");
    convert("kilojoules1", "electronvolt2", val, 6.2415E+21, 0, 1, 0, " eV");

    convert("calories1", "joule2", val, 4.184, 0, 1, 0, "J");
    convert("calories1", "kilojoules2", val, 1 / 239.005736, 0, 1, 0, "kJ");
    convert("calories1", "calories2", val, 1, 0, 1, 0, " cal");
    convert("calories1", "kilocalories2", val, 1 / 1000, 0, 1, 0, " kcal");
    convert("calories1", "kilowatt-hour2", val, 1 / 860420.65, 0, 1, 0, "kWh");
    convert("calories1", "btu2", val, 1 / 252.1644, 0, 1, 0, "BTU");
    convert("calories1", "footpound2", val, 3.08596003, 0, 1, 0, " footpound");
    convert("calories1", "electronvolt2", val, 2.6114E+19, 0, 1, 0, " eV");

    convert("kilocalories1", "joule2", val, 4184, 0, 1, 0, "J");
    convert("kilocalories1", "kilojoules2", val, 4.184, 0, 1, 0, "kJ");
    convert("kilocalories1", "calories2", val, 1000, 0, 1, 0, " cal");
    convert("kilocalories1", "kilocalories2", val, 1, 0, 1, 0, " kcal");
    convert("kilocalories1", "kilowatt-hour2", val, 1 / 860.42065, 0, 1, 0, "kWh");
    convert("kilocalories1", "btu2", val, 3.96566684, 0, 1, 0, "BTU");
    convert("kilocalories1", "footpound2", val, 3085.96003, 0, 1, 0, " footpound");
    convert("kilocalories1", "electronvolt2", val, 2.6114E+22, 0, 1, 0, " eV");

    convert("kilowatt-hour1", "joule2", val, 3600000, 0, 1, 0, "J");
    convert("kilowatt-hour1", "kilojoules2", val, 3600, 0, 1, 0, "kJ");
    convert("kilowatt-hour1", "calories2", val, 860420.65, 0, 1, 0, " cal");
    convert("kilowatt-hour1", "kilocalories2", val, 860.42065, 0, 1, 0, " kcal");
    convert("kilowatt-hour1", "kilowatt-hour2", val, 1, 0, 1, 0, "kWh");
    convert("kilowatt-hour1", "btu2", val, 3412.14164, 0, 1, 0, "BTU");
    convert("kilowatt-hour1", "footpound2", val, 2.6552E+6, 0, 1, 0, " footpound");
    convert("kilowatt-hour1", "electronvolt2", val, 2.2469E+25, 0, 1, 0, " eV");

    convert("btu1", "joule2", val, 1055.05585, 0, 1, 0, "J");
    convert("btu1", "kilojoules2", val, 1.05505585, 0, 1, 0, "kJ");
    convert("btu1", "calories2", val, 252.1644, 0, 1, 0, " cal");
    convert("btu1", "kilocalories2", val, 3.96566684, 0, 1, 0, " kcal");
    convert("btu1", "kilowatt-hour2", val, 1 / 3412.14164, 0, 1, 0, "kWh");
    convert("btu1", "btu2", val, 1, 0, 1, 0, "BTU");
    convert("btu1", "footpound2", val, 778.169259, 0, 1, 0, " footpound");
    convert("btu1", "electronvolt2", val, 6.5851E+21, 0, 1, 0, " eV");

    convert("footpound1", "joule2", val, 1.35581795, 0, 1, 0, "J");
    convert("footpound1", "kilojoules2", val, 1 / 737.562148, 0, 1, 0, "kJ");
    convert("footpound1", "calories2", val, 1 / 3.08596003, 0, 1, 0, " cal");
    convert("footpound1", "kilocalories2", val, 1 / 3085.96003, 0, 1, 0, " kcal");
    convert("footpound1", "kilowatt-hour2", val, 1 / 2.6552E+6, 0, 1, 0, "kWh");
    convert("footpound1", "btu2", val, 1 / 778.169259, 0, 1, 0, "BTU");
    convert("footpound1", "footpound2", val, 1, 0, 1, 0, " footpound");
    convert("footpound1", "electronvolt2", val, 8.4624E+18, 0, 1, 0, " eV");

    convert("electronvolt1", "joule2", val, 1 / 6.2415E+18, 0, 1, 0, "J");
    convert("electronvolt1", "kilojoules2", val, 1 / 6.2415E+21, 0, 1, 0, "kJ");
    convert("electronvolt1", "calories2", val, 1 / 2.6114E+19, 0, 1, 0, " cal");
    convert("electronvolt1", "kilocalories2", val, 1 / 2.6114E+22, 0, 1, 0, " kcal");
    convert("electronvolt1", "kilowatt-hour2", val, 1 / 2.2469E+25, 0, 1, 0, "kWh");
    convert("electronvolt1", "btu2", val, 1 / 6.5851E+21, 0, 1, 0, "BTU");
    convert("electronvolt1", "footpound2", val, 1 / 8.4624E+18, 0, 1, 0, " footpound");
    convert("electronvolt1", "electronvolt2", val, 1, 0, 1, 0, " eV");


}