const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/apiUser", userRoutes);

mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log("connected MongoDB");

    app.listen(process.env.PORT, () => {
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
