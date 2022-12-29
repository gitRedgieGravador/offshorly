const AWS = require("aws-sdk");

const s3 = require("./s3.config.js");
const s3Client = s3.s3Client;
const path = require('path')

const doUpload = async (params) => {
  const location = await s3Client.upload(params).promise();
  return location;
};

exports.appUpload = async (req, res) => {
  const params = s3.uploadParams;
  params.Key = await req.files.app.name;
  params.Body = await req.files.app.data;
  const data = await doUpload(params);
  return res.json({ error: false, filepath: data.Location });
};

exports.Upload = async (req, res) => {
  console.log("Upload enter...");
  console.log("Upload req...", req.body);
  const params = s3.uploadParams;
  const filename = `${path.parse(req.files.file.name).name}-${new Date().getTime()}${path.parse(req.files.file.name).ext}`;
  params.Key = filename;
  params.Body = await req.files.file.data;
  console.log("params: ", params);
  const data = await doUpload(params);
  return res.json({ error: false, filepath: data.Location, filename: filename });
};

exports.getApplePrivateKey = async () => {
  // https://slabco-db.s3.ap-southeast-1.amazonaws.com/AuthKey_Z459V8QTRG-1668065266796.p8
  const filename = 'AuthKey_Z459V8QTRG-1668065266796.p8'
  const data = await s3Client
    .getObject({
      Bucket: "slabco-db",
      Key: filename,
      ResponseContentType: 'text/plain;charset=UTF-8' //"application/json",
    })
    .promise();
  return data;
};
