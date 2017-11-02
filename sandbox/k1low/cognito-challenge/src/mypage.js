'use strict';

const ejs = require('ejs');
const fs = require('fs');
const stage = process.env.SLSCONF_STAGE;

module.exports.handler = (event, context, callback) => {
    const data = {
        stage: stage
    };
    
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: ejs.render(fs.readFileSync(__dirname + '/mypage.html').toString('utf-8'), data)
    };
    callback(null, response);
};
