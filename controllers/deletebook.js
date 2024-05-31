const book = require("../models/sche");

exports.deleteBook = async (req, res) => {
    const id = req.params.id;

  try {
    const deletetodo = await book.findByIdAndDelete({_id:id});
    res.status(200).json({
        success: true,
        data: deletetodo,
        message: "entry deleted",
      });


  } catch (error) {
    res.status(400).json({
        success: false,
        data: "Internal server Error",
      });
  }
};
