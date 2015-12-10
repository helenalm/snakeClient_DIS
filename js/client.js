// Sending an event. Waits for the document to be loaded, then throws the functions
$(document).ready(function () {

    /* login menu.
     When the login button is clicked a function will accrue.
     First, we define the variables so matches the id defined in the html*/
    $("#login").click(function () {
        var username = $("#username").val();
        var password = $("#password").val();

        // Create variable that contains data (username, password) and checks if it is in the db
        var data = {
            username: username,
            password: password
        };
        // JSON.stringify(data) converts the 'data' values into a JSON string
        console.log(JSON.stringify(data));

        /* making an ajax call that posts our data to an url.
         success - make a session that remembers userID for later,
         and user will be send to userMenu */
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/login",
            data: JSON.stringify(data),
            success: function (data) {
                $.session.set('userID', data.userid);
                window.location.href = 'userMenu.html';
            },
            // if an error accrue (for example, wrong username), an alert will pop-up.
            error: function () {
                alert("Wrong username or password. Try again")
            }
        });
    });

    /* create user
     When button is clicked, a function will accrue.
     First, we define the variables so matches the id defined in the html */
    $("#newuser").click(function () {
        var Firstname = $("#firstName").val();
        var Lastname = $("#lastName").val();
        var Username = $("#username").val();
        var Password = $("#password").val();
        var Email = $("#email").val();

        // Create variable that contains the data
        var user = {
            firstName: Firstname,
            lastName: Lastname,
            username: Username,
            password: Password,
            email: Email
        };

        /* making an ajax call that posts our data to an url.
         success - user will get an alert and send to login menu
         and user will be send to userMenu */

        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/users",
            data: JSON.stringify(user),
            success: function (data) {
                alert("Welcome to the best game ever!");
                window.location.href = 'loginMenu.html';
            },

            /* if an error accrue (for example, not a validate email), an alert will pop-up.
             see the validation form on "registerValidation.js" */

            error: function () {
                alert("Something went wrong. Try again")
            }
        });
    });

    /* create game
     when the button is clicked, a function will accrue.
     makes a variable that contains data, that will be posted to the database */
    $("#creategame").click(function () {
        var creategame = {
            name: $("#gameName").val(),
            host: {
                id: $.session.get('userID'),
                controls: $("#hostcontrols").val()
            },
            mapSize: $("#mapSize").val()
        };

        // Ajax request that post the data above into /api/games
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/games",
            data: JSON.stringify(creategame),

            /* succes - we gets the session we made in the login,
             so that the user don't have to write its userid - because the klient remember who
             is logged in. Then they will get an alert */
            success: function (data) {
                $.session.get('userID');
                alert("Game was created!");
            },

            // if an error accrue, an alert will pop-up
            error: function () {
                alert("Something went wrong. Try again")
            }
        })
    });

    /* delete game
     When the button is clicked a function will accrue. Makes a variable for the gameid,
     and gets the hostid by the session that we sat in the login */
    $("#deleteGame").click(function () {
        var gameid = $("#gameID").val();
        hostid: $.session.get('userID');

        // ajax request that post into a url with a specific gameid
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/games/" + gameid,

            // success - the user will get an alert
            success: function (data) {
                alert("Game was deleted!");
            },

            // if an error accrue, the user will also get an alert
            error: function () {
                alert("Something went wrong. Try again")
            }
        })
    });

    /* join game
     when button is clicked we make a variable for joingame.
     With the session set i the login, we already got the for the user logged in */
    $("#joinGame").click(function () {
        var joingame = {
            gameId: $("#gameID").val(),
            opponent: {
                id: $.session.get('userID')
            }
        };

        // ajax request that post to the url in stringified version
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/games/join/",
            data: JSON.stringify(joingame),

            // success - user gets an alert so they know they can play now
            success: function (data) {
                /* $.session.set('gameID', data.game); - so they don't have to write
                 gameID everytime they will play the game in "start game" BUT it doesn't work :'( */
                alert("Game was joined. Go play!");
            },

            // if an error accrue an alert will pop up
            error: function () {
                alert("Something went wrong. Try again")
            }
        })
    });

    /* Start game
     when button is clicked a function will accrue. Make an variabel that contains some data,
     that fits the id's that you find in the HTML */
    $("#startGame").click(function () {
        var startgame = {
            gameId: $("#gameid").val(),
            opponent: {
                controls: $("#opponentcontrols").val()
            }
        };

        // ajax request that posts the data into an url
        $.ajax({
            type: "POST",
            url: "http://localhost:8888/api/games/start/",
            data: JSON.stringify(startgame),

            // if success - the user gets an alert
            success: function (data) {
                //$.session.get('gameID'), - but it doesn't work for me :(
                alert("Cool! Take a look, maybe you reached the leaderboard");
            },

            // if an error accrue, the user will get an alert
            error: function () {
                alert("Something went wrong. Try again")
            }
        })
    });

    /* highscore
     Here we make an ajax request straight away. This time, we get some data from the url */

    $.ajax({
        type: "GET",
        url: "http://localhost:8888/api/scores/",

        // if there is success then…
        success: function (data) {

            /* ...we make a forEach() method that execute the function once pr array element.
             In this, it creates a copy of a given object. */
            data.forEach(function (item) {

                /* we make an variable named table, that puts the data in the table.
                 td means table data (which is an table cell) and tr means table row.
                 in the first cell in the first row the score will be shown, in the
                 second cell in the first row the username will be shown, and so on*/
                var table =
                    "<tr><td>" + item.score + "</td><td>" + item.user.username + "</td></tr>";

                // the table in the html shall show the information (table defined) above
                $("#highscores").append(table);

                // this data will also be shown in the console
                console.log(data);
            });
        },

        // in an error accrue, the user wil get an alert
        error: function () {
            alert("Something went wrong. Try again")
        }
    });
});
