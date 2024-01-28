function addFoodEntry() {
    var foodEntries = document.getElementById('foodEntries');
    var newEntry = document.createElement('div');
    newEntry.classList.add('foodEntry');
    newEntry.innerHTML = `
        <input type="text" class="foodName" placeholder="Food Name">
        <input type="number" class="foodQuantity" placeholder="Quantity (grams)">
    `;
    foodEntries.appendChild(newEntry);
}

function calculate() {
    var foodEntries = document.querySelectorAll('.foodEntry');
    var totalCO2 = 0;

    foodEntries.forEach(function(entry) {
        var foodName = entry.querySelector('.foodName').value;
        var foodQuantity = parseInt(entry.querySelector('.foodQuantity').value);

        if (foodName && foodQuantity && foodQuantity > 0) {
            var co2Emissions = getCO2Emissions(foodName.toLowerCase());
            if (co2Emissions !== null) {
                totalCO2 += foodQuantity * co2Emissions;
            } else {
                alert("CO2 emissions data not available for: " + foodName);
            }
        }
    });

    var result = "Total CO2 emissions for all foods: " + totalCO2.toFixed(2) + " grams";
    document.getElementById("result").innerText = result;
    speak(result);
}

function speak(text) {
    var utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

function getCO2Emissions(foodName) {
    var co2Emissions = {
        "nuts": 0.45,               // CO2 emissions per gram for nuts
        "citrus fruit": 0.13,       // CO2 emissions per gram for citrus fruit
        "apples": 0.15,             // CO2 emissions per gram for apples
        "root vegetables": 0.24,    // CO2 emissions per gram for root vegetables
        "bananas": 0.18,            // CO2 emissions per gram for bananas
        "peas": 0.17,               // CO2 emissions per gram for peas
        "soymilk": 0.14,            // CO2 emissions per gram for soymilk
        "cassava": 0.26,            // CO2 emissions per gram for cassava
        "corn": 0.25,               // CO2 emissions per gram for corn
        "tomatoes": 0.18,            // CO2 emissions per gram for tomatos
        "wheat": 0.35,              // CO2 emissions per gram for wheat
        "groundnut": 0.37,      // CO2 emissions per gram for groundnut can
        "sugar cane": 0.32,         // CO2 emissions per gram for sugar cane
        "milk": 0.21,               // CO2 emissions per gram for milk
        "fish": 0.22,               // CO2 emissions per gram for fish
        "rice": 0.49,               // CO2 emissions per gram for rice
        "eggs": 0.27,               // CO2 emissions per gram for eggs
        "olive oil": 0.19,          // CO2 emissions per gram for olive oil
        "poultry meal": 0.29,       // CO2 emissions per gram for poultry meal
        "pig meal": 0.34,           // CO2 emissions per gram for pig meal
        "palm oil": 0.35,           // CO2 emissions per gram for palm oil
        "prawn": 0.25,              // CO2 emissions per gram for prawn
        "coffee": 0.34,             // CO2 emissions per gram for coffee
        "chocolate": 0.82,          // CO2 emissions per gram for chocolate
        "beef": 26.5,               // CO2 emissions per gram for beef
        "cheese": 13.5,             // CO2 emissions per gram for cheese
        "lamb": 20,                  // CO2 emissions per gram for lamb
    };



    return co2Emissions[foodName];

}




function rep()
{
    var foods = ["nuts", "citrus fruit", "apples", "root vegetables", "bananas", 
                     "peas", "soymilk", "cassava", "corn", "tomatoes", "wheat", 
                     "groundnut can", "sugar cane", "milk", "fish", "rice", "eggs", 
                     "olive oil", "poultry meal", "pig meal", "palm oil", "prawn", 
                     "coffee", "chocolate", "beef", "cheese", "lamb"];

        var foodListDiv = document.getElementById("foodList");
        foods.forEach(function(food) {
            var foodItem = document.createElement("p");
            foodItem.textContent = food;
            foodListDiv.appendChild(foodItem);
        });

}