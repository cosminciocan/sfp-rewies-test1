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
  "duration": 6351127587,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 21060352,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 634651247,
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
  "duration": 1253606511,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 80234613,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 821542036,
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
  "duration": 1261776428,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 60256688,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 1290434297,
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
  "duration": 2168988503,
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
  "duration": 954804129,
  "status": "passed"
});
formatter.match({
  "location": "SelfAssessmentSteps.I_complete_my_Self_Assessment()"
});
formatter.result({
  "duration": 14218780939,
  "status": "passed"
});
});