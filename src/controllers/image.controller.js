const Image = require("../models/image.model");
const { success, error } = require("../middlewares/response");

exports.getImage = async (req, res) => {
  try {
    let result = await Image.getImage(req.query);
    success(res, result.data, 201, result.message);
  } catch (err) {
    error(res, err.data, 422, err.message);
  }
};
