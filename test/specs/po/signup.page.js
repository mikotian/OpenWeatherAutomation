// login.page.js
var Page = require('./page')

var SignUpPage = Object.create(Page, {
    /**
     * define elements
     */
    header: { get: function () { return browser.element('h3=Create New Account'); } },
    username: { get: function () { return browser.element('#user_username'); } },
    email: { get: function () { return browser.element('#user_email'); } },
    pwd: { get: function () { return browser.element('#user_password'); } },
    pwd_confirm: { get: function () { return browser.element('#user_password_confirmation'); } },
    submitBtn: { get: function () { return browser.element("input[name='commit']"); } },
    price: { get: function () { return browser.element('=Price'); } },
    title: { get: function() {return browser.getTitle(); } },
    recaptcha: { get: function () { return browser.element('div.g-recaptcha ');}},
    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/');
    } }
    
});

module.exports = SignUpPage;