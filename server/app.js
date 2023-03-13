const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

//to send data to react frontend
app.use(cors());

app.get("/home",(req, res) => {
      res.send("Home");
});


//port 5500
app.listen(5500, () => {
      console.log("Server up and running on port 5500...");
})