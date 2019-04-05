
const axios = require("axios");
const qs = require("qs");
const Octokit = require('@octokit/rest');


module.exports = async function (context, req) {
    context.log('Invitation request accepted.');
    if (!(req.query.code)) {
        context.res = {
            status: 400,
            body: "Please pass an invitaiton code on the query string"
        };
        return;
    }

    const response = await axios.post('https://github.com/login/oauth/access_token', {
        client_id: process.env['GITHUB_OAUTH_APP_CLIENT_ID'],
        client_secret: process.env['GITHUB_OAUTH_APP_CLIENT_SECRET'],
        code: req.query.code
    });

    const responseData = qs.parse(response.data, { ignoreQueryPrefix: true });

    if (responseData.error) {
        context.log(responseData.error);
        context.res = {
            status: 400,
            body: responseData.error_description
        };
        return;
    }


    const accessToken = responseData.access_token;

    const clientWithAuth = new Octokit({
        auth: `token ${accessToken}`
    });

    const user = await clientWithAuth
        .users
        .getAuthenticated({});

    const clientWithAdminAuth = new Octokit({
        auth: `token ${process.env['GITHUB_INVITATION_API_KEY']}`,
        previews: [
            "dazzler-preview"
        ]
    });

    try {
        const invitationResult = await clientWithAdminAuth.orgs.createInvitation({
            org: "kentico",
            invitee_id: user.data.id,
            team_ids: [3126564] // Global Collaborators
        });
        context.log(invitationResult);

        context.res = {
            status: invitationResult.status, // 201
            body: `User  ${user.data.login} successfully invited to Kentico organization!`
        };
        return;
    } catch (error) {
        context.log(error);
        context.res = {
            status: 400,
            body: error
        };
        return;
    }
};