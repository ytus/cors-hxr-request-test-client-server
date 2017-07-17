var express = require("express");
var app = express();

app.use(function(req, res, next) {
  // ERROR: XMLHttpRequest cannot load http://localhost:3000/.
  // Response to preflight request doesn't pass access control check:
  // No 'Access-Control-Allow-Origin' header is present on the requested resource.
  // Origin 'http://localhost:4000' is therefore not allowed access.
  // ->
  // res.header("Access-Control-Allow-Origin", "*");

  // ERROR: XMLHttpRequest cannot load http://localhost:3000/.
  // Response to preflight request doesn't pass access control check:
  // A wildcard '*' cannot be used in the 'Access-Control-Allow-Origin' header
  // when the credentials flag is true.
  // Origin 'http://localhost:4000' is therefore not allowed access.
  // The credentials mode of an XMLHttpRequest is controlled by the withCredentials attribute.
  // ->
  res.header("Access-Control-Allow-Origin", req.get("Origin"));

  // ERROR: XMLHttpRequest cannot load http://localhost:3000/.
  // Response to preflight request doesn't pass access control check:
  // Credentials flag is 'true', but the 'Access-Control-Allow-Credentials' header
  // is ''. It must be 'true' to allow credentials.
  // Origin 'http://localhost:4000' is therefore not allowed access.
  // ->
  res.header("Access-Control-Allow-Credentials", true);

  // ERROR: XMLHttpRequest cannot load http://localhost:3000/.
  // Request header field Authorization is not allowed by Access-Control-Allow-Headers
  // in preflight response.
  // ->
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Accept, Authorization"
  );
  next();
});

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function(req, res) {
  res.send("Your cookies are " + req.get("Cookie"));
});

app.listen(3000, function() {
  console.log("Example server listening on port 3000!");
});
