# OpenWeatherAutomation
Sample Test Automation using WebDriver.io

This repository contains 5 test cases for OpenWeatherMap.org

Test 1: Navigates to OpenWeatherMap.org and verifies a few aspects of the site.

Test 2: Navigates to OpenWeatherMap.org and verifies searching for an invalid city.

Test 3: Navigates to OpenWeatherMap.org and verifies searching for an valid city and the results.


Test 4: Navigates to OpenWeatherMap.org and verifies temperature units conversion after searching for a valid city.

Test 5: Test 1 demonstrated using PageObject Model

  The tests are all located in the test\specs dierctory and are named e2etests_<number> as mentioned above. Each file contains one testcase.
  
  All the tests could have been accomodated in one file, but I split them to maintain brevity.

  
  The errorshots folder contains screenshots in case test fails.

  
  The reports folder has test reports in junit and json formats. 
  
  These can be used to generate test reports and for integration into Jenkins, since Jenkins understands the formats of these reports.

  The po folder inside the specs folder contains the Page Objects used in test 5.
  
  There is a Selenium Server jar file located under the selenium server folder that can be used to launch the selenium server manually. 
  
  This is required for the scripts to communicate with the browser(s). This can be automated using a wdio service, which is installed via npm.

Tests are written in Javscript using WebDriver.io on Node.JS


Given below are steps on how to run these tests.

Install Node.js from :  https://nodejs.org/en/

Tests were written on Nodejs version 8.11.4. The current stable version should do just fine.

npm will be installed alongwith nodejs. This will be required to download and install our dependencies.

Download/clone this repository from: https://github.com/mikotian/OpenWeatherAutomation.git

  The working directory is OpenWeatherAutomation

A one time setup of geckodriver/chromedriver etc is needed. This can be done by downloading 

  for Google Chrome: chromedriver[https://chromedriver.storage.googleapis.com/index.html?path=2.42/] or 

  for Firefox: geckodriver[https://github.com/mozilla/geckodriver/releases]

  and copying the exe over to any directory your PATH. I usually plonk it into the system32 directory on my windows machine(if security     permits). 

This ensures that any PATH issues never come up.

Open a nodejs command prompt and navigate to the working directory.

Running the following command should install all the dependencies needed to get the automation to run:

  npm install

The major dependencies can be installed manually like this:
  
  npm install wdio-firefox-profile-service --save-dev
  
  npm install webdriverio --save-dev
  
  npm install wdio-selenium-standalone-service --save-dev

To run the tests, the following manual steps have to be carried out:

1. Launch the selenium server. This is a one time activity, unless one kills the server process.
   
   On windows: java -jar <workingdir>\seleniumserver\selenium-server-standalone-3.14.0.jar
   
   On Linux: java -jar <workingdir>/seleniumserver/selenium-server-standalone-3.14.0.jar
   
   This will launch the server and will listen on 4444

2. Launch the tests:
   
   Using a node.js command prompt navigate to <workingdirectory> and run the following command:
   .\node_modules\.bin\wdio wdio.conf.js
   
   This should run all the tests. The console will show a summary of test cases executed. Reports in junit and json format are generated inside the reports folder and screenshots are generated on error conditions and copied to errorshots.
  
