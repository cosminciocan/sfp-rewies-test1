$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "This feature tests the login",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Testing login with different user types",
  "description": "",
  "id": "login-feature;testing-login-with-different-user-types",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I login with a valid \"\u003cuser\u003e\" user",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I log out",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "login-feature;testing-login-with-different-user-types;",
  "rows": [
    {
      "cells": [
        "user"
      ],
      "line": 11,
      "id": "login-feature;testing-login-with-different-user-types;;1"
    },
    {
      "cells": [
        "employee"
      ],
      "line": 12,
      "id": "login-feature;testing-login-with-different-user-types;;2"
    },
    {
      "cells": [
        "Reviewer"
      ],
      "line": 13,
      "id": "login-feature;testing-login-with-different-user-types;;3"
    },
    {
      "cells": [
        "ADMIN"
      ],
      "line": 14,
      "id": "login-feature;testing-login-with-different-user-types;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Testing login with different user types",
  "description": "",
  "id": "login-feature;testing-login-with-different-user-types;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login with a valid \"employee\" user",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
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
  "duration": 26670090139,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 33141113,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 1198506000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Testing login with different user types",
  "description": "",
  "id": "login-feature;testing-login-with-different-user-types;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login with a valid \"Reviewer\" user",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
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
  "duration": 2391359855,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 66867256,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 1411304999,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Testing login with different user types",
  "description": "",
  "id": "login-feature;testing-login-with-different-user-types;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I login with a valid \"ADMIN\" user",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
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
  "duration": 2094546104,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 46744076,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 1267604427,
  "status": "passed"
});
formatter.uri("notes.feature");
formatter.feature({
  "line": 2,
  "name": "Notes Feature",
  "description": "This feature tests the notes",
  "id": "notes-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Add a note to self",
  "description": "",
  "id": "notes-feature;add-a-note-to-self",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I login with a valid \"employee\" user",
  "keyword": "Given "
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
  "duration": 2213875505,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 2504908420,
  "status": "passed"
});
formatter.uri("self_assessment.feature");
formatter.feature({
  "line": 2,
  "name": "Self Assessment Feature",
  "description": "This Feature tests the self assessments",
  "id": "self-assessment-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "Login",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I login with a valid \"admin\" user",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I start a new assessment session",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I log out",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I login with a valid \"employee\" user",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 22
    }
  ],
  "location": "HomepageSteps.I_login_with_a_valid_user(String)"
});
formatter.result({
  "duration": 2191447332,
  "status": "passed"
});
formatter.match({
  "location": "CreateSessionSteps.I_start_a_new_assessment_session()"
});
formatter.result({
  "duration": 22519888694,
  "error_message": "org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nCommand duration or timeout: 1.14 seconds\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027SF14\u0027, ip: \u0027192.168.0.147\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{applicationCacheEnabled\u003dtrue, rotatable\u003dfalse, handlesAlerts\u003dtrue, databaseEnabled\u003dtrue, version\u003d11.0, platform\u003dWINDOWS, nativeEvents\u003dfalse, acceptSslCerts\u003dtrue, webStorageEnabled\u003dtrue, locationContextEnabled\u003dtrue, browserName\u003dfirefox, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 1bedef61-9cda-46be-804e-b6a7e42b4813\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:268)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:79)\r\n\tat sun.reflect.GeneratedMethodAccessor13.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:497)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:50)\r\n\tat com.sun.proxy.$Proxy13.click(Unknown Source)\r\n\tat pages.SessionsPage.addSessionDetails(SessionsPage.java:77)\r\n\tat pages.SessionsPage.startNewSession(SessionsPage.java:63)\r\n\tat steps.CreateSessionSteps.I_start_a_new_assessment_session(CreateSessionSteps.java:22)\r\n\tat ✽.And I start a new assessment session(self_assessment.feature:7)\r\nCaused by: org.openqa.selenium.ElementNotVisibleException: Element is not currently visible and so may not be interacted with\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027SF14\u0027, ip: \u0027192.168.0.147\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: driver.version: unknown\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous6478182573360640660webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:9587)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous6478182573360640660webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12257)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous6478182573360640660webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12274)\r\n\tat \u003canonymous class\u003e.\u003canonymous method\u003e(file:///C:/Users/cciocan/AppData/Local/Temp/anonymous6478182573360640660webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:603)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.scenario({
  "line": 11,
  "name": "Create self assessment",
  "description": "",
  "id": "self-assessment-feature;create-self-assessment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I navigate to the Self Assessment page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I complete my Self Assessment",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "The Self Assessment is saved",
  "keyword": "Then "
});
formatter.match({
  "location": "SelfAssessmentSteps.I_navigate_to_the_Self_Assessment_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelfAssessmentSteps.I_complete_my_Self_Assessment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "SelfAssessmentSteps.The_Self_Assessment_is_saved()"
});
formatter.result({
  "status": "skipped"
});
});