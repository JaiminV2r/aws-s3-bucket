const multer = require("multer");

module.exports = {
  /** Using memoryStorage */
  upload: multer({
    storage: multer.memoryStorage(),
  }),
};
