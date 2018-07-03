

// const http = require ("http"); // what is necessary to do communication w/ server
// const server = http.createServer(function(req, res) { 
    // req is everything coming from the user 
    //  res is what you want to send back for the request - like status codes 
  // console.log(`user visited ${req.url}`); 
  // res.end("hello!"); // how the server knows you are done 
// })

// console.log("listening on http://localhost:3000"); // how listens for requests 
// server.listen(3000); 

// const express = require ("express"); 
// const app = express(); // how you create a new server

// app.get("/", function (req, res) { // how to handle a new 'route' : default homepage 
//   res.end("Welcome to my site!"); 
// }); 

// app.get("/compliment", function(req, res) { // other page - the compliment 
//   res.end("You look nice today"); 
// }); 

// app.listen(3000); 
// console.log("listening on http://localhost:3000"); 




const express = require("express");
const path = require("path");

const compliments = [
  "You like nice today",
  "That dress looks nice on you",
  "Have you been working out?",
  "You can do hard things",
  "You've gotten far in this course. You're really smart",
  "You're programming! How cool is that?",
  "I'm really proud of you",
  "You made this",
  "You've learned a lot of things, and that's pretty hard to do"
];

function getRandomComplement() {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

const app = express();

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/compliment", function(req, res) {
  res
    .json({
      compliment: getRandomComplement()
    })
    .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");



// const express = require("express"); // obtains the specific modules in Node folder 
// const path = require("path"); 

// const compliments = [ 
//   "You look nice today", 
//   "That dress looks nice on you",
//   "Have you been working out?",
//   "You can do hard things",
//   "You've gotten far in this course. You're really smart",
//   "You're programming! How cool is that?",
//   "I'm really proud of you",
//   "You made this",
//   "You've learned a lot of things, and that's pretty hard to do"
// ]; 

// function getRandomCompliment() { 
//   const randomIndex = Math.floor(Math.random() * compliments.length); 
//   return compliments[randomIndex]; 
// }

// const app = express(); 

// app.get("/", function(req,res) { 
//   res.sendFile(path.join(__dirname, "index.html")); // sends the user the index.html
//     // path is a library for getting correct file locations --> we are doing this so that express can find html file 
//     //_dirname is a node varialbe that's the folder where the server.js file is 
// }); 

// app.get("/compliment", function (req, res) { 
//   res 
//     .json({ 
//       compliment: getRandomCompliment()
//     })
//     .end(); 
// }); 

// app.use("/public", express.static("./public")); // serves everything in the public directory publicily 
//     // we'll put images, client JS files, CSS files, etc 

// app.listen(3000); 
// console.log("listening on http://localhost:3000"); 

// //  keyword "fetch" can do 'fetch', 'get', and/or 'pulse' payloads




