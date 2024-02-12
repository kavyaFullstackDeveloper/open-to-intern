
const express = require("express");
const router = express.Router();
const collegeController = require("../src/models/collegeControllers")
const internController = require("../src/models/internControllers")


router.get("/test-me", function (req, res) {
res.send("My first ever api!");
});

router.post("/colleges", collegeController.createCollege)

router.post("/interns", internController.createIntern)

router.get("/collegeDetails", internController.getCollege)


module.exports = router;