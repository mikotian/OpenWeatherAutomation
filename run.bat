start runSeleniumServer.bat

call "C:\Program Files\nodejs\nodevars.bat"

echo %cd%

node --version

.\\node_modules\\.bin\\wdio wdio.conf.js

allure generate .\\reports\\junit

allure open .\\allure-report