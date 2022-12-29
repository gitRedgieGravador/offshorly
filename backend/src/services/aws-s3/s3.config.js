const AWS = require("aws-sdk");
// const awsconfig = require("./awsconfig")
// const s3Client = new AWS.S3(awsconfig);
const s3Client = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESSKEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESSKEY,
});
const uploadParams = {
  ACL: "public-read",
  Bucket: "slabco-db",
  // ContentLength: 500000000,
  Key: "", // pass key
  Body: null, // pass file body
};

const s3 = {};
s3.s3Client = s3Client;
s3.uploadParams = uploadParams;

module.exports = s3;
