$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Reviews",
  "description": "",
  "id": "login-reviews",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Employee Login test",
  "description": "",
  "id": "login-reviews;employee-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I login with a valid \"employee\" user",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "employee",
      "offset": 22
    }
  ],
  "location": "HomepageSteps.I_login_with_a_valid_user(String)"
});
formatter.result({
  "duration": 5701430130,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 65828700,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 1597894912,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Reviewer Login test",
  "description": "",
  "id": "login-reviews;reviewer-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I login with a valid \"Reviewer\" user",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Reviewer",
      "offset": 22
    }
  ],
  "location": "HomepageSteps.I_login_with_a_valid_user(String)"
});
formatter.result({
  "duration": 1126840166,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 23633387,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 598571923,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Admin login test",
  "description": "",
  "id": "login-reviews;admin-login-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I login with a valid \"ADMIN\" user",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ADMIN",
      "offset": 22
    }
  ],
  "location": "HomepageSteps.I_login_with_a_valid_user(String)"
});
formatter.result({
  "duration": 1024463563,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 35463107,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 694540020,
  "status": "passed"
});
formatter.uri("self_assessment.feature");
formatter.feature({
  "line": 2,
  "name": "Testing self assessment",
  "description": "",
  "id": "testing-self-assessment",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I login with a valid \"employee\" user",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "employee",
      "offset": 22
    }
  ],
  "location": "HomepageSteps.I_login_with_a_valid_user(String)"
});
formatter.result({
  "duration": 972614041,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Create self assessment",
  "description": "",
  "id": "testing-self-assessment;create-self-assessment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I navigate to the Self Assessment page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I complete my Self Assessment",
  "keyword": "Then "
});
formatter.match({
  "location": "SelfAssessmentSteps.I_navigate_to_the_Self_Assessment_page()"
});
formatter.result({
  "duration": 661698898,
  "status": "passed"
});
formatter.match({
  "location": "SelfAssessmentSteps.I_complete_my_Self_Assessment()"
});
formatter.result({
  "duration": 5292179918,
  "error_message": "org.openqa.selenium.TimeoutException: Timed out after 5 seconds waiting for visibility of Proxy element for: org.openqa.selenium.support.pagefactory.DefaultElementLocator@f31c0c6\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027SF14\u0027, ip: \u0027192.168.0.147\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d11.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 356349bd-f930-4d99-a849-90a137e7b56c\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:79)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:228)\r\n\tat Utils.TestBase.waitForElement(TestBase.java:33)\r\n\tat pages.SelfAssessmentPage.completeSelfAssessmnet(SelfAssessmentPage.java:21)\r\n\tat steps.SelfAssessmentSteps.I_complete_my_Self_Assessment(SelfAssessmentSteps.java:23)\r\n\tat ✽.Then I complete my Self Assessment(self_assessment.feature:9)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[id\u003d\u0027selfAssessmentForm\u0027] .tab-pane.active .panel-body .form-control\"}\nCommand duration or timeout: 10 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027SF14\u0027, ip: \u0027192.168.0.147\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d11.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 356349bd-f930-4d99-a849-90a137e7b56c\n*** Element info: {Using\u003dcss selector, value\u003d[id\u003d\u0027selfAssessmentForm\u0027] .tab-pane.active .panel-body .form-control}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:441)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:425)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\r\n\tat com.sun.proxy.$Proxy13.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:227)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:39)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:213)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:210)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:208)\r\n\tat Utils.TestBase.waitForElement(TestBase.java:33)\r\n\tat pages.SelfAssessmentPage.completeSelfAssessmnet(SelfAssessmentPage.java:21)\r\n\tat steps.SelfAssessmentSteps.I_complete_my_Self_Assessment(SelfAssessmentSteps.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:78)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:212)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:68)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:140)\r\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"[id\u003d\u0027selfAssessmentForm\u0027] .tab-pane.active .panel-body .form-control\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027SF14\u0027, ip: \u0027192.168.0.147\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous8196088173220013737webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10271)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous8196088173220013737webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10280)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous8196088173220013737webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12274)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous8196088173220013737webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12279)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous8196088173220013737webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12221)\r\n",
  "status": "failed"
});
});