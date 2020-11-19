
function getRecipesbyIngredients(){
    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=ba1a88bc885e47ad9ebb5dd9c219d86d";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    });

}
getRecipesbyIngredients();