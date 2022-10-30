const dotenv = require("dotenv");
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
dotenv.config({ path: "./config.env" });
require("./db/conn");
const cors = require("cors");

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(require("./router/auth"));

app.get("/", async (req, res) => {
  res.send(`Ishop backend 22 ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server is running in port number ${PORT}`);
});
