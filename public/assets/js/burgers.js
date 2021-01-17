$(function () {
    // Add Burger
    $(".burger-form").on("submit", function (event) {
        event.preventDefault();
        
        const newBurger = {
            burger_name: $("#burgerName").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("Add new Burger!");
                location.reload();
            }
        )
    })

    // Update Devoured
    $(".devoured-btn").on("click", function(event){
        event.preventDefault();

        const id = $(this).data("id");

        const devouredBurger = {
            devoured: devoured = 1
        }

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: devouredBurger
        }).then(
            function(){
                console.log("Devoured my Burger")
                location.reload();
            }
        )
    })

    // Delete burger
    $(".remove-btn").on("click", function (event) {
        event.preventDefault();

        const id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted Burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
})