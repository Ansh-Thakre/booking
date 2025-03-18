const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema({
    userName: { type: String },
    email: { type: String, required: true },
    service: { type: String },
    reservationTime: { type: String }, // Store time separately if needed
    reservationDate: { type: Date, required: true }, // Store full Date object
  }, { timestamps: true }); // Adds createdAt and updatedAt automatically

const userModel = mongoose.model("userSchema", userSchema);
module.exports = userModel;