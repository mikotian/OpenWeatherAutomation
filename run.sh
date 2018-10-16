#!/bin/sh
echo "Starting Selenium Server and Tests"

sh ./runSeleniumServer.sh &

./node_modules/.bin/wdio wdio.conf.js
