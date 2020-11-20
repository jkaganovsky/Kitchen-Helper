$("#container").on("click","button",getRecipesbyIngredients);
function getRecipesbyIngredients(){
    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient1 + ",+" + ingredient2 + ",+" + ingredient3+ "&number=6&apiKey=3d8504ff72124b3790e1881e4619a59c";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });
    var ingredient1 = $().val();
    var ingredient2 = $().val();
    var ingredient3 = $().val();
    var recipeId = response[0].id;
    console.log(recipeId);
    getNutrition(ingredient1,ingredient2,ingredient3)
}
// getRecipesbyIngredients();

function getRecipeInstructions(recipeId){

    var queryURL = "https://api.spoonacular.com/recipes/" + recipeId + "/analyzedInstructions?&apiKey=24796d1ddf8d413ba7e254114bc839c3";
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
        });
}
getRecipeInstructions();

function getNutrition(ingredient1,ingredient2,ingredient3){

    var secondQueryURL = "https://api.edamam.com/api/nutrition-data?app_id=17b937a5&app_key=02f27b66f18bc4bf93156f026eabe8f8&ingr=" + num1 + "%20" + "medium" + ingredient1 + "%2C" + num2 + "%20"+ "medium" + "%20" + ingredient2 + "%2C" + num3 + "%20" + "medium" + "%20" + ingredient3
        $.ajax({
            url:secondQueryURL,
            method:"GET"

        }).then(function(response){
            console.log(response);
        });
};

// getNutrition();
