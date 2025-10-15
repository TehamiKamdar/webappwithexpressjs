const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

const logRequest = (req, res, next) =>{
  console.log(`Received a ${req.method} request from ${req.ip}`);
  next();
}

app.use(logRequest)
app.use(express.static("public"))

app.get('/', (req, res) => {
  const data = {
    title: "Express Home",
    heading: "Welcome to Express Home."
  }
  res.render('index', { data })
});

app.get('/about', (req, res) => {
  const data = {
    title: "Express About",
    heading: "Welcome to Express About."
  }
  res.render('index', { data })
});

app.listen(3000, () => { console.log(`Server is running on http://localhost:3000`) })