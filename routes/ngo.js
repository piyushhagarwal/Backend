const express = require("express");

const router = express.Router();
const { createNgo, getAllNgos, getNgo } = require("../controllers/ngo");

router.route("/").post(createNgo).get(getAllNgos);

router.route("/:id").get(getNgo);

module.exports = router;
