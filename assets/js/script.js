$("#find-recipe-btn").on("click", getRecipesbyIngredients);
function getRecipesbyIngredients(event) {
    // var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredient1 + ",+" + ingredient2 + ",+" + ingredient3+ "&number=6?&apiKey=b2d13b9f8a22412e84d84453f24eac78";
    var testURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=6&apiKey=71f2f23377744d319243a4c76fa7c648"
    event.preventDefault();
    $.ajax({
        url: testURL,
        method: "GET"
    }).then(function (response) {
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

function getRecipeInstructions(recipeId) {
    var queryURL = "https://api.spoonacular.com/recipes/" + recipeId + "/analyzedInstructions?apiKey=71f2f23377744d319243a4c76fa7c648";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
    });
}

function getNutrition(ingredient1, ingredient2, ingredient3) {

    var secondQueryURL = "https://api.edamam.com/api/nutrition-data?app_id=17b937a5&app_key=02f27b66f18bc4bf93156f026eabe8f8&ingr=" + num1 + "%20" + "medium" + ingredient1 + "%2C" + num2 + "%20" + "medium" + "%20" + ingredient2 + "%2C" + num3 + "%20" + "medium" + "%20" + ingredient3
    $.ajax({
        url: secondQueryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response);
    });
};

// getNutrition();


// Click event for revealing the tiles from hidden
$("#find-recipe-btn").click(function () {
    var recipeTile = $(".recipe-tile").removeClass("is-hidden");
});

// Pulling response data into recipe-tiles
function renderRecipeTile() {

    // For loop to run through the 6 tiles
    for (var i = 0; i < something; i++) {

        // Pull recipe name into "recipe-name"
        var recipeName = $(".recipe-name")
        recipeName.textContent = recipeResponse

        // Pull image into
        var recipeImage = $(".recipe-image")
        recipeImage.attr("src", "url")
    }
}

// Click event for the recipe tile to display the modal
$(".recipe-tile").click(function (event) {

    event.preventDefault();

    // var modalBackground = $(".modal-background").removeClass("is-hidden");
    // var modalCard = $(".modal-card").removeClass("is-hidden");

    var recipeModal = $(".modal").removeClass("is-hidden");


    // $("event.target").
});

$("#close-button").click(function (event) {

    event.preventDefault();

    var modalBackground = $(".modal-background").addClass("is-hidden");
    var modalCard = $(".modal-card").addClass("is-hidden");

    // $("event.target").
});