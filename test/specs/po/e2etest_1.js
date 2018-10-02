var assert=require('assert');

describe('Open Application and Verify', function() {
    it('Verifies that major input fields exist and can be written to or clicked', function() {
        browser.url('/');
	browser.waitForVisible('#nav-search');
	//browser.alertDismiss();
	
	var toSearch='Mumbai';
	
	browser.click('#nav-search');
	browser.waitForEnabled('#q');
        browser.setValue('#q', toSearch);
	browser.waitForEnabled('.input-group-btn',3000);
        
	//verify that string entered is present in text field
	
	var searchText=browser.getValue('#q');
	console.log(searchText);
	assert.ok(searchText[0]==toSearch);

        //verify title contains openweathermap
	var title = browser.getTitle();
        console.log('Title is: ' + title);
	
	assert.ok(title.toLowerCase().includes('openweathermap'));
	
	//verify main search field
	
	var toSearch2='Bombay';
	
	browser.click('#q.form-control.border-color.col-sm-12');
	browser.setValue('#q.form-control.border-color.col-sm-12',toSearch2);
	browser.waitForEnabled('button.btn.btn-orange');
	var searched=browser.getValue('#q.form-control.border-color.col-sm-12');
	console.log(searched);
	assert.ok(toSearch2,searched);
	
	//click sign in and verify fields
	browser.click('=Sign In');
	
	title = browser.getTitle();
        console.log('Title is: ' + title);
	
	assert.ok(title.toLowerCase().includes('members'));
	
	assert.ok(browser.isVisible('h3=Sign In To Your Account'));
	
	assert.ok(browser.isVisible('#user_email'));
	assert.ok(browser.isVisible('#user_password'));
	assert.ok(browser.isVisible("input[name='commit']"));
	
	assert.ok(browser.isEnabled('#user_email'));
	assert.ok(browser.isEnabled('#user_password'));
	assert.ok(browser.isEnabled("input[name='commit']"));
	
	browser.click('=Sign Up');
	
	title = browser.getTitle();
        console.log('Title is: ' + title);
	
	assert.ok(title.toLowerCase().includes('members'));
	
	assert.ok(browser.isVisible('h3=Create New Account'));
	
	assert.ok(browser.isVisible('#user_username'));
	assert.ok(browser.isVisible('#user_email'));
	assert.ok(browser.isVisible('#user_password'));
	assert.ok(browser.isVisible('#user_password_confirmation'));
	assert.ok(browser.isVisible("input[name='commit']"));
	
	//verify that recaptcha is visible 
	
	assert.ok(browser.isVisible('div.g-recaptcha '));
	
	//verify that fields are enabled
	assert.ok(browser.isEnabled('#user_username'));
	assert.ok(browser.isEnabled('#user_email'));
	assert.ok(browser.isEnabled('#user_password'));
	assert.ok(browser.isEnabled('#user_password_confirmation'));
	assert.ok(!browser.isEnabled("input.btn.btn-color.btn-submit")); //button is disabled
	
	
	//load price page & verify that different tiers are shown
	
	browser.click('=Price');
	
	browser.waitForVisible('h4=Free');
	assert.ok(browser.isVisible('h4=Free'));
	assert.ok(browser.isVisible('h4=Startup'));
	assert.ok(browser.isVisible('h4=Professional'));
	assert.ok(browser.isVisible('h4=Developer'));
	assert.ok(browser.isVisible('h4=Enterprise'));
	
    });
});