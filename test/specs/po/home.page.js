// login.page.js
var Page = require('./page')

var HomePage = Object.create(Page, {
    /**
     * define elements
     */
    nav: { get: function () { return browser.element('#nav-search'); } },
    nav_search: { get: function () { return browser.element('#q'); } },
    navsearch_button: { get: function () { return browser.element('.input-group-btn'); } },
    search_main: { get: function () { return browser.element('#q.form-control.border-color.col-sm-12'); } },
    search_mainBtn: {get: function(){return browser.element('button.btn.btn-orange');}},
    sign_in:     { get: function () { return browser.element('=Sign In'); } },
    sign_up:    { get: function () { return browser.element('=Sign Up'); } },
    title: { get: function() {return browser.getTitle(); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/');
    } }
    
});

module.exports = HomePage;