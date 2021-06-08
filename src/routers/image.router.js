const router = require("express").Router();

const imageController = require("../controllers/image.controller");

router.get("/images", imageController.getImage);

module.exports = router;
