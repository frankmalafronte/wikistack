const express = require("express");
const router = express.Router();
const { Page } = require("../models");
const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("got to GET /wiki/");
});

router.post("/", async (req, res, next) => {
  //   res.send("got to POST /wiki/");
  const page = new Page({
    title: `???????`,
    content: `???????`
  });
  //   res.json(req.body);
  try {
    await page.save();
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

router.get("/add", (req, res) => {
  res.send(addPage());
});

module.exports = router;
