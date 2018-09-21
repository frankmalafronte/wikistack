const express = require("express");
const morgan = require("morgan");
const app = express();
const layout = require("./views/layout");


const { db } = require('./models');


app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send(layout("Hello world!"));
});

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const models = require('./models')

const PORT = 1337;
//other stuff?
const init = async () => {
  // await models.User.sync()
  // await models.Page.sync()
  await db.sync()
  //make sure you have a port constant and replace the name bloew with your express app
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
  
}

 init()






