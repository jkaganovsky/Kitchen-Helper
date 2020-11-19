
function getRecipesbyIngredients(){
    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=3d8504ff72124b3790e1881e4619a59c";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });

}
// getRecipesbyIngredients();

function getNutrition(){

    var secondQueryURL = "https://api.edamam.com/api/nutrition-data?app_id=17b937a5&app_key=02f27b66f18bc4bf93156f026eabe8f8&ingr=1%20large%20apple"
    $.ajax({
        url:secondQueryURL,
        method:"GET"

    }).then(function(response){
        console.log(response);
    });
}

getNutrition();
