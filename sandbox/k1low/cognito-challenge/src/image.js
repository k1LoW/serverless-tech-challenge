'use strict';

const ejs = require('ejs');
const fs = require('fs');
const stage = process.env.SLSCONF_STAGE;

module.exports.recognize = (event, context, callback) => {
    const data = {
        stage: stage
    };

    /*
    var key = event.Records[0].s3.object.key;
    var ids = key.split('/');
    var params = {
      CollectionId: "コレクション名", 
      DetectionAttributes: [
      ], 
      ExternalImageId: ids[ids.length-1], 
      Image: {
       S3Object: {
        Bucket: "バケット名", 
        Name: key
       }
      }
     };
     rekognition.indexFaces(params, function(err, data) {
       if (err) console.log(err, err.stack); 
       else     console.log(data);           
     });
    */
    
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: ejs.render(fs.readFileSync(__dirname + '/signup.html').toString('utf-8'), data)
    };
    callback(null, response);
};
