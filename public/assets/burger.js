$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#new").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
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
            data: devouredBurger
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
        }).then(location.reload());
    });
});