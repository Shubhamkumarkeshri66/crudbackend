const mongoose = require("mongoose");
require("dotenv").config();

exports.dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("Db Connected Successfully");
    })
    .catch((error) => {
      console.log("Db bot Connected");
      console.error(error);
      process.exit(1);
    });
};
