$(function () {
    // Add Burger
    $(".burger-form").on("submit", function (event) {
        event.preventDefalt();

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

    // Delete burger
    $(".remove-btn").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

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

// });