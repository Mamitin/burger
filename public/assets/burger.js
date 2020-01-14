$(document).ready(function () {
    $("#addburger").on("submit", function (event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#newburger").val(),
            devoured: 0
        };
        console.log($("#newburger").val());

        $.ajax("/api/burger", {
            type: "POST",
            data: JSON.stringify(newBurger),
            contentType: "application/json"
        }).then(function () {
            console.log("Added new burger");
            //location.reload();
        });
    });

    $(".eatburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var devouredBurger = {
            devoured: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: JSON.stringify(devouredBurger),
            contentType: "application/json"
        }).then(function () {
            console.log("Burger has been eaten!");
            location.reload();
        });
    });

    $(".deleteburger").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");

        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(function () {
            location.reload();
        });
    });
});