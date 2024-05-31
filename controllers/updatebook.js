const book = require("../models/sche");

exports.updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, genre, published } = req.body;
    const response = await book.findByIdAndUpdate(
      { _id: id },
      { title, author, genre, published }
    );
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "server error",
    });
  }
};
