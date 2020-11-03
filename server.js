
//import the express and path packages
const express = require("express");
const path = require("path");
// create an instance of an Express application, which you then store in app.
//define the port the server will use to listen for requests.
const app = express();
const port = process.env.PORT || "8000";
//create a simple route handler for the HTTP GET / request that replies with a string.
app.get("/", (req, res) => {
    res.status(200).send("WHATABYTE: Food For Devs");
});
//start a server listening for incoming requests on port 
//and display a message to confirm it's listening.
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});