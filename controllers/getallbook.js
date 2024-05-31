const book = require("../models/sche");

exports.getAllBook = async (req, res) => {
  try {
    const response = await book.find({});
    res.json(response);
  } catch (err) {
    res.status(400).json({
      success: false,
      data: "Internal server Error",
    });
  }
};
exports.getOneBook = async (req, res) => {
  const id = req.params.id;
  try {
    const response = await book.findOne({ _id: id });
    res.json(response);
  } catch (err) {
    res.status(400).json({
      success: false,
      data: "Internal server Error",
    });
  }
};
