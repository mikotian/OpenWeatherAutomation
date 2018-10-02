var assert=require('assert');
var HomePage=require('./po/home.page');
var pricePage=require('./po/price.page');
var SignInPage=require('./po/signin.page');
var SignUpPage=require('./po/signup.page');

describe('Open Application and Verify--Using Page Objects--', function() {
    it('Verifies that major input fields exist and can be written to or clicked--Using Page Objects--', function() {
        browser.url('/');
	HomePage.nav.waitForVisible();
	//browser.alertDismiss();
	
	var toSearch='Mumbai';
	
	HomePage.nav.click();
	HomePage.nav_search.waitForEnabled();
        HomePage.nav_search.setValue(toSearch);
	HomePage.navsearch_button.waitForEnabled(3000);
        
	//verify that string entered is present in text field
	
	var searchText=HomePage.nav_search.getValue();
	console.log(searchText);
	assert.ok(searchText==toSearch);

        //verify title contains openweathermap
	var title = HomePage.title;
        console.log('Title is: ' + title);
	
	assert.ok(title.toLowerCase().includes('openweathermap'));
	
	//verify main search field
	
	var toSearch2='Bombay';
	
	HomePage.search_main.click();
	HomePage.search_main.setValue(toSearch2);
	HomePage.search_mainBtn.waitForEnabled();
	var searched=HomePage.search_main.getValue();
	console.log(searched);
	assert.ok(toSearch2,searched);
	
	//click sign in and verify fields
	HomePage.sign_in.click();
	
	title = SignInPage.title;
        console.log('Title is: ' + title);
	
	assert.ok(title.toLowerCase().includes('members'));
	SignInPage.submitBtn.waitForVisible();
	assert.ok(SignInPage.header.isVisible());
	
	assert.ok(SignInPage.email.isVisible());
	assert.ok(SignInPage.pwd.isVisible());
	assert.ok(SignInPage.submitBtn.isVisible());
	
	assert.ok(SignInPage.email.isEnabled());
	assert.ok(SignInPage.pwd.isEnabled());
	assert.ok(SignInPage.submitBtn.isEnabled());
	
	SignInPage.sign_up.click();
	
	title = SignUpPage.title;
        console.log('Title is: ' + title);
	
	assert.ok(title.toLowerCase().includes('members'));
	
	assert.ok(SignUpPage.header.isVisible());
	
	assert.ok(SignUpPage.username.isVisible());
	assert.ok(SignUpPage.email.isVisible());
	assert.ok(SignUpPage.pwd.isVisible());
	assert.ok(SignUpPage.pwd_confirm.isVisible());
	assert.ok(SignUpPage.submitBtn.isVisible());
	
	//verify that recaptcha is visible 
	
	assert.ok(SignUpPage.recaptcha.isVisible());
	
	//verify that fields are enabled
	assert.ok(SignUpPage.username.isEnabled());
	assert.ok(SignUpPage.email.isEnabled());
	assert.ok(SignUpPage.pwd.isEnabled());
	assert.ok(SignUpPage.pwd_confirm.isEnabled());
	assert.ok(!SignUpPage.submitBtn.isEnabled()); //button is disabled
	
	
	//load price page & verify that different tiers are shown
	
	SignUpPage.price.click();
	
	pricePage.header_free.waitForVisible();
	assert.ok(pricePage.header_free.isVisible());
	assert.ok(pricePage.header_startup.isVisible());
	assert.ok(pricePage.header_prof.isVisible());
	assert.ok(pricePage.header_dev.isVisible());
	assert.ok(pricePage.header_ent.isVisible());
	
    });
});