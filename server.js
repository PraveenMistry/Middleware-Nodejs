var app = require("express")();


// Middleware
function checkLogin()
{
    return false; 
}

function logRequest()
{
    console.log("New request");
}

app.get("/", function(httpRequest, httpResponse, next){
    httpResponse.send("Welcome, Enter /test on url");
});

app.get("/test", function(httpRequest, httpResponse, next){

    logRequest();

    if(checkLogin())
    {
        httpResponse.send("This is the dashboard page");
    }
    else
    {
        httpResponse.send("You are not logged in!!!");
    }
});

app.listen(8080);