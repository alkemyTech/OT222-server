const AWS = require('./config')

const s3 = new AWS.S3();

const Bucket = process.env.AWS_BUCKET_NAME

module.exports = {
    listBuckets: () => s3.listBuckets().promise(),
    listObjects: () => s3.listObjects({ Bucket }).promise(),
    uploadObject: (Body, Key, ContentType) => s3.upload({ Bucket, Key, Body, ContentType }).promise(),
    getObject: (Key) => s3.getObject({ Bucket, Key }).promise(),
    deleteObject: (Key) => s3.deleteObject({ Bucket, Key }).promise()
}