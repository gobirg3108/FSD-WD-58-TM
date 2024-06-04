const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/apiUser", userRoutes);

mongoose
  .connect("mongodb://localhost:27017/user-crud")
  .then(() => {
    console.log("connected MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port${PORT}`);
    });
  })

  .catch((error) => {
    console.error("connection error", error.message);
  });

app.get("/name", (req, res) => {
  res.json(displayName("Gobi"));
});

const displayName = (firstName) => {
  return `Hey its, ${firstName} there!!!`;
};
