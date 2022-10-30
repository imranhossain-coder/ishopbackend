const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config.env" });
require("./db/conn");

const PORT = process.env.PORT || 5000;

app.use(cookieParser());
app.use(express.json());
app.use(require("./router/auth"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
}

app.get("/", async (req, res) => {
  res.send(`Ishop backend 22 ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running in port number ${PORT}`);
});
