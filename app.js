const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));




app.get("/", function(req, res){
  res.render("home");
});

app.get("/projects", function(req, res){
  res.render("home");
});

app.get("/about", function(req, res){
  res.render("about");
})

app.get("/contact", function(req, res){
  res.render("contact");
})

app.get("/projects/pomodoro", function(req, res){
  res.render("pomodoro");
})

app.get("/projects/snake", function(req, res){
  res.render("snake");
})

app.get("/projects/todo", function(req, res){
  res.render("todo");
})

app.get("/projects/expense", function(req, res){
  res.render("expense");
})
app.get("/projects/clock", function(req, res){
  res.render("home");
})

app.get("/projects/chat", function(req, res){
  res.render("home");
})




app.listen(port, ()=> console.log(`listening on port ${port}`));