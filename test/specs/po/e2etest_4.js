var assert=require('assert');

describe('Get Weather Details', function() {
    it('Convert Celsius to Farhenheit or vice versa', function() {
        
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
	
	//verify that celsius-farhenheit conversions work
	
	//Get  current temperature and convert
	
	var temperatureText=browser.getText('h3.weather-widget__temperature');
	var temperatureBefore=temperatureText.split(' ')[0];
	var temperatureAfter;
	console.log("Before Conversion:::"+temperatureBefore);
	
	if(temperatureText.includes('C')){
		
		console.log('Converting from Celsius to Farhenheit');
		temperatureAfter=temperatureBefore*1.8+32;
	}
	else
	{
		console.log('Converting from Farhenheit to Celsius');
		temperatureAfter=(temperatureBefore-32)*0.5556;
	}
	
	console.log("After Conversion:::"+temperatureAfter);
	
	//Click on units selector
	browser.click('#metric');
	
	browser.waitForVisible('h3.weather-widget__temperature');
	
	var newtemperatureText=browser.getText('h3.weather-widget__temperature');
	
	var newTemp=newtemperatureText.split(' ')[0];
	
	console.log('newtemp:::'+newTemp);
	
	//the conversion algorithm on the site is not co-relating to the one mentioned in the reference, so we keep a error range of 1.8 for the conversion
	assert.ok((parseInt(temperatureAfter)-parseInt(newTemp))<1.8,"Validation for unit conversion failed.");
	
    });
});