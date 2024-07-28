# aws-s3-bucket

This repository contains Node.js implementations for uploading files to AWS S3 Bucket. It includes examples for both normal file uploads and multipart file uploads or manage file deletions, providing a comprehensive guide for efficiently handling file uploads to S3 Bucket.

## Features

- Upload files to `AWS S3 Bucket`
- Upload large files to `AWS S3 Bucket` using multipart upload
- Delete a file from `AWS S3 Bucket`
- Delete multiple files from `AWS S3 Bucket`

## Technologies Used

- `@aws-sdk/client-s3`
- `aws-sdk`
- `dotenv`
- `express`
- `multer`

## Folder Structure

```
.
├── config.js
├── upload.js
├── file.route.js
├── file.controller.js
├── awsS3bucket.service.js
├── index.js
├── package.json
├── .env
```

## Setup

1. Clone the repository:

   ```sh
   https://github.com/JaiminV2r/aws-s3-bucket.git
   ```

2. Navigate to the project directory:

   ```sh
   cd aws-s3-bucket
   ```

3. Install dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

4. Create a `.env` file in the root directory and add your AWS credentials:

   ```
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   AWS_REGION=your-region
   AWS_BUCKET_NAME=your-bucket-name
   ```

   Also add the `PORT` in .env file

   ```
   PORT=3000
   ```

5. Start the server:
   ```sh
   npm start
   # or
   yarn start
   ```

## Usage

### Upload a File

- **Method:** `POST`
- **Endpoint:** `/file/upload`
- **Description:** Upload a single file to AWS S3
- **Request:** Form-data containing the file

### Upload a Multipart File (Large File)

- **Method:** `POST`
- **Endpoint:** `/file/upload-multipart`
- **Description:** Upload a large file to AWS S3 using multipart upload
- **Request:** Form-data containing the file

### Delete a File

- **Method:** `DELETE`
- **Endpoint:** `/file/delete`
- **Description:** Delete a single file from AWS S3

### Delete Multiple Files

- **Method:** `DELETE`
- **Endpoint:** `/file/delete-multiple`
- **Description:** Delete multiple files from AWS S3

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements.

## License

This project is licensed under the ISC License.
