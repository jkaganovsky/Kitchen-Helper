$("#find-recipe-btn").on("click",getRecipesbyIngredients);

function getRecipesbyIngredients(event){
    // var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient1 + ",+" + ingredient2 + ",+" + ingredient3+ "&number=6?&apiKey=b2d13b9f8a22412e84d84453f24eac78";
    var testURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=71f2f23377744d319243a4c76fa7c648"
    event.preventDefault();
    $.ajax({
        url: testURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var ingredient1 = $("#ingredient_1").val();
        console.log(ingredient1);
        var ingredient2 = $("#ingredient_2").val();
        console.log(ingredient2);
        var ingredient3 = $("#ingredient_3").val();
        console.log(ingredient3);
        var recipeId = response[0].id;
        console.log(recipeId);
        // getNutrition(ingredient1,ingredient2,ingredient3)
        getRecipeInstructions(recipeId);
    });
    
}

getRecipeInstructions();


function getRecipeInstructions(recipeId){
    var queryURL = "https://api.spoonacular.com/recipes/" + recipeId + "/analyzedInstructions?apiKey=71f2f23377744d319243a4c76fa7c648";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
        });
}

/* function getNutrition(ingredient1,ingredient2,ingredient3){

    var secondQueryURL = "https://api.edamam.com/api/nutrition-data?app_id=17b937a5&app_key=02f27b66f18bc4bf93156f026eabe8f8&ingr=" + num1 + "%20" + "medium" + ingredient1 + "%2C" + num2 + "%20"+ "medium" + "%20" + ingredient2 + "%2C" + num3 + "%20" + "medium" + "%20" + ingredient3
        $.ajax({
            url:secondQueryURL,
            method:"GET"

        }).then(function(response){
            console.log(response);
        });
}; */

// getNutrition();
