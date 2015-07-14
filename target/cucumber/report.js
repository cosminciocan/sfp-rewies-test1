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
formatter.step({
  "line": 6,
  "name": "I create a capacity shift",
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
  "duration": 8753383663,
  "status": "passed"
});
formatter.match({
  "location": "CreateCapacityShiftSteps.I_create_a_capacity_shift()"
});
formatter.result({
  "duration": 1478653499,
  "status": "passed"
});
formatter.uri("UI/ManageWaitList.feature");
formatter.feature({
  "line": 2,
  "name": "Managing the waiting list",
  "description": "View, Edit, Delete waiting list requests",
  "id": "managing-the-waiting-list",
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
  "name": "Background actions that are needed tot prepare the tests",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Wai List Requests page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any waiting list requests, and if not I create one",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Wai List Requests page",
  "keyword": "And "
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
