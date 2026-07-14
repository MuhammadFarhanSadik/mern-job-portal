const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },

    companyName: {
      type: String,
      required: true
    },

    category: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    jobType: {
      type: String,
      enum: [
        "Full Time",
        "Part Time",
        "Remote",
        "Internship"
      ],
      default: "Full Time"
    },

    salary: {
      type: String
    },

    description: {
      type: String,
      required: true
    },

    requirements: {
      type: [String],
      default: []
    },

    deadline: {
      type: Date,
      required: true
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    createdAt: {
      type: Date,
      default: Date.now
    }
  }
);


module.exports = mongoose.model("Job", jobSchema);