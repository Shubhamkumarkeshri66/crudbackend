const book = require("../models/sche");

const mongoose = require("mongoose");

exports.addBook= async(req,res)=>{

    try{
        const {title,author,genre,published}=req.body;
        const response = await book.create({ title,author,genre,published});
        // send a json response with success flag
        res.status(200).json({
          success: true,
          data: response,
          message: "Entry created successfully",
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
          success: false,
          data: "Internal Server Error",
          // message: error.message,
        });
    }
   
}