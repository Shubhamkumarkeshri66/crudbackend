const express = require("express");

const router = express.Router();

const { addBook } = require("../controllers/addbook");
const { getAllBook, getOneBook } = require("../controllers/getallbook");
const { deleteBook } = require("../controllers/deletebook");
const { updateBook } = require("../controllers/updatebook");
router.post("/addbook", addBook);
router.get("/getallbook", getAllBook);
router.delete("/deletebook/:id", deleteBook);
router.get("/getonebook/:id", getOneBook);
router.put("/updatebook/:id", updateBook);

module.exports = router;
