const express = require("express");
const {
  applyJob,
  myApplications,
} = require("../controllers/applicationController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, applyJob);

router.get("/my", protect, myApplications);

module.exports = router;