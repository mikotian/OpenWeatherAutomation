var assert=require('assert');

describe('Open Application and Search for Weather', function() {
    it('searches for mumbai', function() {
        
	//Opens the website url defined in wdio.conf.js under the 'baseurl' key
	browser.url('/');
	
	//This will be evaluated when thw page loads.
	browser.waitForVisible('#nav-search');
	
	//clicking on top navbar. This activates the hidden search bar.
	browser.click('#nav-search');
	browser.waitForEnabled('#q');
	
	var toSearch='Mumbai';    
	    
	//input 'mumbai' into search bar input
        browser.setValue('#q', toSearch);
	
	//waitfor the search button on the navbar to be active and then click
	browser.waitForEnabled('.input-group-btn',3000);
        browser.click('.input-group-btn');

        //just checking
	var title = browser.getTitle();
        console.log('Title is: ' + title);
	    
	//click on link text with same string as our search string
	assert.ok(browser.getText('*='+toSearch).toLowerCase().includes(toSearch.toLowerCase()));
	browser.click('*='+toSearch)
	
	browser.waitForVisible('#weather-widget > h2');
	//verify that weather/forecast is visible for our search string
	var weatherHeader=browser.getText('#weather-widget > h2');
	
	console.log('weatherHeader ::: '+weatherHeader);
	
	var expWeatherHeader='Weather in '+toSearch;
	
	assert.ok(weatherHeader.toLowerCase().includes(expWeatherHeader.toLowerCase()));
	
	browser.waitForVisible('h2.weather-forecast-hourly-graphic__header');
	
	var weatherGraphicHeader=browser.getText('h2.weather-forecast-hourly-graphic__header');
	
	console.log('weatherGraphicHeader ::: '+weatherGraphicHeader);
	
	var expWeatherGraphicHeader='Weather and forecasts in '+toSearch;
	
	assert.ok(weatherGraphicHeader.toLowerCase().includes(expWeatherGraphicHeader.toLowerCase()));
	
    });
});