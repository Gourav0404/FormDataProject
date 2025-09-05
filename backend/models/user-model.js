// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    ip:{
    type: String,
 
   }
  },
   
  { timestamps: true },
   
);

module.exports = mongoose.model("Contact", contactSchema);
