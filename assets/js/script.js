renderStorage();

var ingredientItemsList = [];

$("#find-recipe-btn").on("click", getRecipesbyIngredients);

function getRecipesbyIngredients(event) {
    var ingredient1 = $("#ingredient_1").val();
    // console.log(ingredient1);
    var ingredient2 = $("#ingredient_2").val();
    // console.log(ingredient2);
    var ingredient3 = $("#ingredient_3").val();
    // console.log(ingredient3);
    var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient1 + ",+" + ingredient2 + ",+" + ingredient3 + "&number=6&apiKey=71f2f23377744d319243a4c76fa7c648";
    event.preventDefault();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var recipeId = response[0].id;
        console.log(recipeId);
        console.log(response[0].image);

        for (i = 0; i < response.length; i++) {
            $("#tile" + i).text(response[i].title);
            $("#img" + i).attr("src", response[i].image);
            $("#result"+ i).attr("data-recipeid",response[i].id);
        }
               
    });

}

$(".test").click(function(event){
    event.preventDefault()
    // event.target.data("")
    console.log(event.target);
    console.log($(this)[0]);
    var selectedRecipe = $(this).data("recipeid");
    console.log(selectedRecipe);
    // console.log($(".test").data("recipeid"));
     var recipeModal = $(".modal").removeClass("is-hidden");
    getRecipeInstructions(selectedRecipe);
})

function getRecipeInstructions(recipeId) {
    var queryURL = "https://api.spoonacular.com/recipes/" + recipeId + "/analyzedInstructions?apiKey=71f2f23377744d319243a4c76fa7c648";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response[0]);
        var stepsInstructions = response[0].steps;
        console.log(stepsInstructions);
        /* for (i=0;i<stepsInstructions.length;i++){
             var step = $("<p>").text(stepsInstructions[i].step);
             console.log($(step));
        } */
    });
}

  

function getNutrition(ingredient1, ingredient2, ingredient3) {

    var secondQueryURL = "https://api.edamam.com/api/nutrition-data?app_id=17b937a5&app_key=02f27b66f18bc4bf93156f026eabe8f8&ingr=" + num1 + "%20" + "medium" + ingredient1 + "%2C" + num2 + "%20" + "medium" + "%20" + ingredient2 + "%2C" + num3 + "%20" + "medium" + "%20" + ingredient3
    $.ajax({
        url: secondQueryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response);
        $("#calories").text("Calories: " + response.totalNutrientsKCal.ENERC_KCAL.quantity + "kcal");
        $("#carbs").text("Carbohydrates: " + response.totalNutrientsKCal.CHOCDF_KCAL.quantity + "g");
        $("#fat").text("Fat: " + response.totalNutrientsKCal.FAT_KCAL.quantity + "g");
        $("#protein").text("Protein: " + response.totalNutrientsKCal.PROCNT_KCAL.quantity + "g");
    });
};

// Click event for revealing the tiles from hidden
$("#find-recipe-btn").click(function () {
    var recipeTile = $(".recipe-tile").removeClass("is-hidden");
});


// Click event for the recipe tile to display the modal
$(".recipe-tile").click(function (event) {

    event.preventDefault();

    var recipeModal = $(".modal").removeClass("is-hidden");

});

$("#close-button").click(function (event) {

    event.preventDefault();

    var recipeModal = $(".modal").addClass("is-hidden");

});

$("#find-recipe-btn").click(function (event) {

    event.preventDefault();

    var ingredient1 = $("#ingredient_1").val();
    var ingredient2 = $("#ingredient_2").val();
    var ingredient3 = $("#ingredient_3").val();

    var ingredients = ingredient1 + ", " + ingredient2 + ", " + ingredient3

    ingredientItemsList.push(ingredients);

    localStorage.setItem("ingredients", JSON.stringify(ingredientItemsList));

    $("#ingr-save").prepend("<li>" + ingredient1 + ", " + ingredient2 + ", " + ingredient3 + "</li>");

})

function renderStorage() {

    var savedIngredients = JSON.parse(localStorage.getItem("ingredients"));

    if (savedIngredients !== null) {
        ingredientItemsList = savedIngredients;

        for (var i = 0; i < ingredientItemsList.length; i++) {

            var ingredients = ingredientItemsList[i];

            $("#ingr-save").prepend("<li>" + ingredients + "</li>");
        }
    }
}

// $("#ingr-save").click(function () {
//     getRecipesbyIngredients();
// })
