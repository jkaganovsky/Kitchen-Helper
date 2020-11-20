
// function getRecipesbyIngredients(){
//     var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=ba1a88bc885e47ad9ebb5dd9c219d86d";

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response){
//         console.log(response);
//     });

// }
// // getRecipesbyIngredients();

// function getNutrition(){

//     var secondQueryURL = "https://api.edamam.com/api/nutrition-data?app_id=17b937a5&app_key=02f27b66f18bc4bf93156f026eabe8f8&ingr=1%20large%20apple"
//     $.ajax({
//         url:secondQueryURL,
//         method:"GET"

//     }).then(function(response){
//         console.log(response);
//     });
// }

// getNutrition();

$("#search-button").click(function () {
    var recipeTile = $(".recipe-tile").removeClass("is-hidden");
});