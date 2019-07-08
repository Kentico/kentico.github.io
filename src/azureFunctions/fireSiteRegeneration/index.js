const crypto = require('crypto');
var request = require('request');

const isValidSignature = (req, secret) => {
    const givenSignature = req.headers['x-kc-signature'];
    const computedSignature = crypto.createHmac('sha256', secret)
        .update(req.rawBody)
        .digest();

    return crypto.timingSafeEqual(Buffer.from(givenSignature, 'base64'), computedSignature);
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (!isValidSignature(req, process.env['KC_WEBHOOK_SECRET'])) {
        context.log('Signature was invalid');
        return;
    }

    request.post({
        url: "https://api.travis-ci.com/repo/Kentico%2Fkentico.github.io/requests",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Travis-API-Version": "3",
            "Authorization": `token ${process.env['TRAVIS_TOKEN']}`
        },
        json: {
            "request": {
                "branch": "source"
            }
        }
    }, (error, response, body) => {
        context.err(error);
        context.log(response);
        context.log(body);
    });    
};