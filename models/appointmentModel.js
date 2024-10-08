const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doctor', 
      required: true,
    },
    doctorInfo: {
      type: Object, 
      required: true,
    },
    userInfo: {
      type: Object,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "pending",
    },
    time: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const appointmentModel = mongoose.model("Appointment", appointmentSchema); // Updated to singular
module.exports = appointmentModel;
