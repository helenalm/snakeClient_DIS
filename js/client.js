$(document).ready(function () {

    $("#button").click(function () {


        $.ajax({
            type: "GET",
            url: "http://localhost:9998/api/user",
            success: function (msg) {
                console.log(msg);
            }
        });

    });


});