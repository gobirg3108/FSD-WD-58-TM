const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on  ${PORT}port`);
});

app.get("/name", (req, res) => {
  res.json(displayaName("Gobi"));
});

const displayaName = (firstnmae) => {
  return `Hey its, ${firstnmae} there!!!`;
};
