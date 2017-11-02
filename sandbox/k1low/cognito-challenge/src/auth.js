'use strict';

const ejs = require('ejs');
const fs = require('fs');
const stage = process.env.SLSCONF_STAGE;

module.exports.signup = (event, context, callback) => {
    const data = {
        stage: stage
    };
    
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: ejs.render(fs.readFileSync(__dirname + '/signup.html').toString('utf-8'), data)
    };
    callback(null, response);
};

module.exports.activation = (event, context, callback) => {
    const data = {
        stage: stage
    };
    
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: ejs.render(fs.readFileSync(__dirname + '/activation.html').toString('utf-8'), data)
    };
    callback(null, response);
};

module.exports.login = (event, context, callback) => {
    const data = {
        stage: stage
    };
    
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html'
        },
        body: ejs.render(fs.readFileSync(__dirname + '/login.html').toString('utf-8'), data)
    };
    callback(null, response);
};
