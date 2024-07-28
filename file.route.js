const express = require("express");
const { upload } = require("./upload");
const fileController = require("./file.controller");

const router = express.Router();

/** Upload small size file */
router.post("/upload", upload.single("file"), fileController.uploadFile);

/** Upload big size file */
router.post(
  "/upload-multipart",
  upload.single("file"),
  fileController.uploadMultipartFile
);

/** Delete file */
router.delete("/delete", fileController.deleteFile);

/** Delete multiple files */
router.delete("/delete-multiple", fileController.deleteMultipleFiles);

module.exports = router;
