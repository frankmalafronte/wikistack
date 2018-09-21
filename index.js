const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");

const layout = require("./views/layout");
const { db } = require("./models");
const wikiRouter = require("./routes/wiki");
const userRouter = require("./routes/user");

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/wiki", wikiRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.redirect("/wiki");
});

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const models = require("./models");

const PORT = 1337;
//other stuff?
const init = async () => {
  // await models.User.sync()
  // await models.Page.sync()
  await db.sync();
  //make sure you have a port constant and replace the name below with your express app
  app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });
};

init();
