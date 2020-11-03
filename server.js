
//import the express and path packages
const http = require('http');
const express = require("express");
const path = require("path");
// create an instance of an Express application, which you then store in app.
const app = express();
app.use(express.json());
app.use(express.static("client"));

app.use("/", function(req,res){
    res.sendFile(path.join(__dirname+'/client/index.html'));
    //__dirname : It will resolve to your project folder.
  });
//define the port the server will use to listen for requests.
const port = 3000;

//create a simple route handler for the HTTP GET / request that replies with a string.
app.get("/", (req, res) => {
    res.status(200).send("CSV Report Generator");
});
//start a server listening for incoming requests on port 
//and display a message to confirm it's listening.
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});