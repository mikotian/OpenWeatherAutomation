#OpenWeatherAutomation

######Sample Test Automation using WebDriver.io

This repository contains 5 test cases for OpenWeatherMap.org

Test 1: Navigates to OpenWeatherMap.org and verifies a few aspects of the site.

Test 2: Navigates to OpenWeatherMap.org and verifies searching for an invalid city.

Test 3: Navigates to OpenWeatherMap.org and verifies searching for a valid city and the results.

Test 4: Navigates to OpenWeatherMap.org and verifies units conversion (F->C or C->F)

Test 5: Test 1 demonstrated using PageObject Model

####Pre Requisites:

**Node.js** : Install Node.js from: [here](https://nodejs.org/en/)

Tests were written on Nodejs version 8.11.4. The current stable version should do just fine. npm will be installed alongwith nodejs. This will be required to download and install our dependencies.

Windows: Has an installer that can be downloaded and is straightforward.
Linux: Depends on the distribution; 

On Enterprise Linux, this works fine: 

`curl -sL https://rpm.nodesource.com/setup_8.x | bash -
yum install -y nodejs`

**Java JRE/JDK**: This should already be installed on your machine. In case it is not, please download version 1.8 from https://www.java.com/en/download/. This is needed to run the Selenium Server that webdrive.io uses.

**Firefox**: https://www.mozilla.org/en-US/firefox/new/ 

**GeckoDriver**: Needed so that selenium can control Firefox [geckodriver v0.23](https://github.com/mozilla/geckodriver/releases/download/v0.23.0/geckodriver-v0.23.0-win32.zip)
 
Unzip this to C:\Windows\System32 or to a folder in your PATH

In case of linux this can be done using the following commands:

`wget https://github.com/mozilla/geckodriver/releases/download/v0.23.0/geckodriver-v0.23.0-linux64.tar.gz`

`tar -xvzf geckodriver* `

`chmod +x geckodriver`	

`sudo mv geckodriver /usr/local/bin/`

or if you do not have sudoer access:

`export PATH=$PATH:/path-to-extracted-file/geckodriver`

###Steps to run the automation:

Download the repository in the following URL:  
Download [OpenWeatherAutomation](https://github.com/mikotian/OpenWeatherAutomation/archive/master.zip)

On Windows: 

Use your browser and follow the link above.

On Linux: 

`wget https://github.com/mikotian/OpenWeatherAutomation/archive/master.zip`

Extract this to a folder

On Linux: 

`unzip -q master.zip`

Open a command prompt and navigate to the extracted folder *OpenWeatherAutomation-master*

Running the following command from within *OpenWeatherAutomation-master* will install all the dependencies needed to get the automation to run:

`setup.bat` *or* `setup.sh`

To run the tests, execute the following batch/shell file:

`run.bat` *or* `run.sh`
	
This will run all the tests. 

The console will show a summary of test cases executed. 

Reports in junit and json format are generated inside the reports folder and screenshots are generated on error conditions and copied to errorshots.

To generate reports, execute the following batch/shell file:

`generate_reports.bat` *or* `generate_reports.sh`


