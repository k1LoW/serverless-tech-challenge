'use strict';

const ejs = require('ejs');
const fs = require('fs');

module.exports.handler = (event, context, callback) => {
    console.log(event);

    const username = event.requestContext.authorizer.claims['cognito:username'];

    let data = {
        username: username
    };
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(data)
    };
    callback(null, response);
};
