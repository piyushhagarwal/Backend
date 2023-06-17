const mongoose = require("mongoose");

const NgoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxlength: 50,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ], //This is used to check the official format of email
      unique: true,
    },
    tel: {
      type: Number,
      required: [true, "Please provide Phone Number"],
    },
    description: {
      type: String,
      required: [true, "Please provide description"],
      minlength: 3,
    },
    status: {
      type: String,
      enum: ["accepted", "declined", "pending"],
      default: "pending",
    },
    quantity: {
      type: Number,
      required: [true, "Plese provide quantity"],
    },
  },
  { timestamps: true } //This will automatically put dates of creation and updation of the document
);

module.exports = mongoose.model("Ngo", NgoSchema);
