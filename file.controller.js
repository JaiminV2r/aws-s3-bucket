const awsS3Service = require("./awsS3.service");

module.exports = {
  /** Upload small size file */
  uploadFile: async (req, res) => {
    try {
      const { file } = req;
      console.log("file = ", file);
      if (!file) {
        throw new Error("File is required!");
      }

      /** Save small file to bucket */
      await awsS3Service.s3Upload({
        Key: `file/${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype,
      });

      res.status(200).json({
        success: true,
        message: "File uploading process is done!",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error?.message || "Error while file uploading!",
      });
    }
  },

  /** Upload big size file */
  uploadMultipartFile: async (req, res) => {
    try {
      const { file } = req;
      if (!file) {
        throw new Error("File is required!");
      }

      /** Save big file(multipart) to bucket */
      const uploading = await awsS3Service.s3UploadMultiPart({
        Key: `file/${file.originalname}`,
        Body: file.buffer,
      });

      /** Throw error while multipart uploading failed */
      if (!uploading.success) {
        throw new Error(uploading.message);
      }

      res.status(200).json({
        success: true,
        message: "Multipart file uploading process is done!",
        data: uploading.data,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error?.message || "Error while multipart file uploading!",
      });
    }
  },

  /** Delete the file */
  deleteFile: async (req, res) => {
    try {
      /** Delete single file from bucket */
      await awsS3Service.s3DeleteObject({
        Key: `file/file.png`, // replace your file name with file.png
      });

      res.status(200).json({
        success: true,
        message: "File deleting process is done!",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error?.message || "Error while file deleting!",
      });
    }
  },

  /** Delete multiple files */
  deleteMultipleFiles: async (req, res) => {
    try {
      /** Delete multiple files from bucket */
      await awsS3Service.s3DeleteObjects({
        Delete: {
          Objects: [
            { Key: `file/file.png` }, // replace your file name with file.png
            { Key: `file/file1.png` }, // replace your file name with file1.png
            { Key: `file/file2.png` }, // replace your file name with file2.png
          ],
        },
      });

      res.status(200).json({
        success: true,
        message: "Multiple files deleting process is done!",
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error?.message || "Error while file deleting!",
      });
    }
  },
};
