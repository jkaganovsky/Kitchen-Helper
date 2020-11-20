function getRecipesbyIngredients(){
    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=24796d1ddf8d413ba7e254114bc839c3";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        $("instructions").attr("src", response[0].image);
        console.log(response[0].id);
    });

}

getRecipesbyIngredients();


function getRecipeInstructions(){
    var queryURL = "https://api.spoonacular.com/recipes/324694/analyzedInstructions?&apiKey=24796d1ddf8d413ba7e254114bc839c3";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });

}

getRecipeInstructions();


function getNutrition(){

    var secondQueryURL = "https://api.edamam.com/api/nutrition-data?app_id=17b937a5&app_key=02f27b66f18bc4bf93156f026eabe8f8&ingr=1%20large%20apple&apiKey=3d8504ff72124b3790e1881e4619a59c"
    $.ajax({
        url:secondQueryURL,
        method:"GET"

    }).then(function(response){
         console.log(response);
        $("#calories").text("Calories: "+ response.totalNutrientsKCal.ENERC_KCAL.quantity + "kcal");
        $("#carbs").text("Carbohydrates: "+ response.totalNutrientsKCal.CHOCDF_KCAL.quantity + "g");
        $("#fat").text("Fat: "+ response.totalNutrientsKCal.FAT_KCAL.quantity + "g");
        $("#protein").text("Protein: "+ response.totalNutrientsKCal.PROCNT_KCAL.quantity + "g");
    });
}

getNutrition();