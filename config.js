const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

module.exports = {
  port: process.env.PORT,
  aws: {
    region: process.env.AWS_REGION,
    access_key_id: process.env.AWS_ACCESS_KEY_ID,
    secret_access_key: process.env.AWS_SECRET_ACCESS_KEY,
    bucket_name: process.env.AWS_BUCKET_NAME,
  },
};
