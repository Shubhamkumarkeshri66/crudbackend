const express = require("express");
const app = express();
require("dotenv").config();
const cors= require("cors");


const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());


const allroutes = require("./routes/bookroute")
app.use("/api/v1",allroutes);

app.listen(PORT, () => {
  console.log(`app is started at port no ${PORT}`);
});

require("./config/databse").dbConnect();
// dbConnection();

app.get("/", (req, res) => {
  res.send("hello ji kaisa ho sara ka sara");
});
