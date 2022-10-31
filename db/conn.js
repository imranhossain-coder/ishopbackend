const mongoose = require("mongoose");
const DB =
  "mongodb+srv://ishop:ishop552@cluster0.hqvztwf.mongodb.net/ishop?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to the database");
  })
  .catch((e) => {
    console.log("Not connect to the database");
  });
