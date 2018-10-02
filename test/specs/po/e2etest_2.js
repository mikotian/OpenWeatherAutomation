var assert=require('assert');

describe('Open Application and Search', function() {
    it('searches for tardis', function() {
        browser.url('/');
	
	browser.waitForVisible('#nav-search');
	browser.click('#nav-search');
	browser.waitForEnabled('#q');
        browser.setValue('#q', 'tardis');
	browser.waitForEnabled('.input-group-btn',3000);
        browser.click('.input-group-btn');

        var title = browser.getTitle();
        console.log('Title is: ' + title);
	    
	var citylist=browser.getText("//*[@id='forecast_list_ul']/div");
	console.log(citylist);
	    
	assert.ok(citylist.toLowerCase().includes('not found'));
	
    });
});