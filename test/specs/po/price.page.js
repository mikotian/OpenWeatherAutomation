// login.page.js
var Page = require('./page')

var pricePage = Object.create(Page, {
    /**
     * define elements
     */
    header_free: { get: function () { return browser.element('h4=Free'); } },
    header_startup: { get: function () { return browser.element('h4=Startup'); } },
    header_prof: { get: function () { return browser.element('h4=Professional'); } },
    header_dev: { get: function () { return browser.element('h4=Developer'); } },
    header_ent: { get: function () { return browser.element('h4=Enterprise'); } },

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, '/');
    } }
    
});

module.exports = pricePage;