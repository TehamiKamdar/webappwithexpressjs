const express = require("express");
const app = express();

const logRequest = (req, res, next) =>{
  console.log(`Received a ${req.method} request from ${req.ip}`);
  next();
}

app.use(logRequest)

app.get('/', (req, res) => {
  res.send("Hello World!")
});


app.listen(3000, () => { console.log(`Server is running on http://localhost:3000`) })