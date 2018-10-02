// login.page.js
var Page = require('./page')

var SignInPage = Object.create(Page, {
    /**
     * define elements
     */
    header: { get: function () { return browser.element('h3=Sign In To Your Account'); } },
    email: { get: function () { return browser.element('#user_email'); } },
    pwd: { get: function () { return browser.element('#user_password'); } },
    submitBtn: { get: function () { return browser.element("input[name='commit']"); } },
    sign_up:    { get: function () { return browser.element('=Sign Up'); } },
    title: { get: function() {return browser.getTitle(); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/');
    } }
    
});

module.exports = SignInPage;