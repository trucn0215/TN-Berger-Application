
$(".burger-input").on("submit", function(event){
    event.preventDefalt();
    
    const newBurger = {
        burger_name: $("#burgerName").val().trim()
    };

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(){
            console.log("Add new Burger!");
            location.reload();
        }
    )
})