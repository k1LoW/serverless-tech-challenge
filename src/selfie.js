'use strict';

module.exports.upload = (event, context, callback) => {
    console.log(event);

    const username = event.requestContext.authorizer.claims['cognito:username'];
    const selfie = event.body;
    
    let data = {
        username: username
    };
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(data)
    };
    callback(null, response);
};
