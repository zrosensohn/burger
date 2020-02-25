$(function(){
    $(".devourBtn").on("click", function(event) {
        event.preventDefault();
        let id = $(this).attr("id");
        let burgerName = $(this).data("burger-name");
        let devoured = $(this).data("devoured");

        let newBurgerState = {
            id: id,
            name: burgerName,
            devoured: devoured
        }

        $.ajax("/api/burgers", {
            method: "PUT",
            data: newBurgerState
        }).then( function(){
            console.log("changed state to devoured");
            location.reload();
        });
    });

    $("#newBurger").on("click", function(event) {
        event.preventDefault();
        let burgerName = $("#burgerName").val().trim();
        console.log(burgerName);
        if(burgerName.length > 0){
            console.log("Greater Than Zero");
            $(".valid").removeClass("d-none").addClass("d-block");
            $(".invalid").removeClass("d-block").addClass("d-none");

            let newBurger = {
                name: burgerName
            }

            $.ajax("/api/burgers", {
                method: "POST",
                data: newBurger
            }).then(function() {
                console.log("Entered New Burger");
                location.reload();
            })

        } else {
            console.log("Not acceptable");
            $(".invalid").removeClass("d-none").addClass("d-block");
            $(".valid").removeClass("d-block").addClass("d-none");
        }
    });

});

