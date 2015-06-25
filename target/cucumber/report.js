$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Staff/CreateCapacityShift.feature");
formatter.feature({
  "line": 2,
  "name": "Create capacity shift",
  "description": "",
  "id": "create-capacity-shift",
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
  "name": "Create a capacity shift",
  "description": "",
  "id": "create-capacity-shift;create-a-capacity-shift",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I access the \"staff\" site",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "staff",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 17350280001,
  "status": "passed"
});
formatter.uri("UI/homepage.feature");
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
formatter.scenario({
  "line": 6,
  "name": "Login to the UI site",
  "description": "",
  "id": "login-feature;login-to-the-ui-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 11442869538,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 40554208,
  "status": "passed"
});
formatter.uri("UI/makeReservation.feature");
formatter.feature({
  "line": 2,
  "name": "Making reservations tests",
  "description": "",
  "id": "making-reservations-tests",
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
  "name": "Create a capacity shift",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I access the \"staff\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a capacity shift",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I access the \"ui\" site",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "staff",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 195481450,
  "status": "passed"
});
formatter.match({
  "location": "CreateCapacityShiftSteps.I_create_a_capacity_shift()"
});
formatter.result({
  "duration": 11228477,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open\n  (Session info: chrome\u003d43.0.2357.124)\n  (Driver info: chromedriver\u003d2.15.322448 (52179c1b310fec1797c81ea9a20326839860b7d3),platform\u003dWindows NT 6.3 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 4 milliseconds: null\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027SF14\u0027, ip: \u0027192.168.0.147\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_40\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, chrome\u003d{userDataDir\u003dC:\\Users\\cciocan\\AppData\\Local\\Temp\\scoped_dir14148_16792}, takesHeapSnapshot\u003dtrue, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d43.0.2357.124, platform\u003dWIN8_1, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 5e8296c9b82c12fa3970784951078022\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:162)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:304)\r\n\tat pages.EditCapacityShiftPage.openPage(EditCapacityShiftPage.java:39)\r\n\tat steps.CreateCapacityShiftSteps.I_create_a_capacity_shift(CreateCapacityShiftSteps.java:22)\r\n\tat ✽.And I create a capacity shift(UI/makeReservation.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Make a reservation",
  "description": "",
  "id": "making-reservations-tests;make-a-reservation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I navigate to the Make a Reservation page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I fill in the details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the list of available reservations",
  "keyword": "Then "
});
formatter.match({
  "location": "MakeReservationSteps.I_navigate_to_the_Make_a_Reservation_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeReservationSteps.I_fill_in_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MakeReservationSteps.I_should_see_the_list_of_available_reservations()"
});
formatter.result({
  "status": "skipped"
});
});