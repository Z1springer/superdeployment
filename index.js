const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

const amphibian = [
  {
    name: "Leo",
    isTeenageMutant: true,
  },
  {
    name: "Sheldon",
    isTeenageMutant: false,
  },
];

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/amphibian", (req, res) => {
  req.json(amphibian);
});

app.listen(PORT, function () {
  console.log(`listening on PORT ${PORT}`);
});
