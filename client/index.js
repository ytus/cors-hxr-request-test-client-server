var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("hello client");
});

app.listen(4000, function() {
  console.log("Example client listening on port 4000!");
});
