'use strict';
var AWS = require("aws-sdk");
var rekognition = new AWS.Rekognition({region: 'us-east-1'});

const stage = process.env.SLSCONF_STAGE;

module.exports.recognize = (event, context, callback) => {
    const data = {
        stage: stage
    };

    const bucketName = event.Records[0].s3.bucket.name;
    const key = event.Records[0].s3.object.key;
    var params = {
      Image: {
       S3Object: {
        Bucket: bucketName, 
        Name: key
       }
      }
     };
     rekognition.detectFaces(params, function(err, data) {
       if (err) {
            const response = {
                statusCode: 500,
                body: JSON.stringify(err),
            };
            console.log(response);
            callback(null, response);
        } else {
            const response = {
                statusCode: 200,
                body: JSON.stringify(data),
            };
            console.log(response);
            callback(null, response);
        }
    });    
};
