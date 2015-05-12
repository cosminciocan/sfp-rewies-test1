@ready
Feature: Login Feature
  This feature tests the login

  Scenario: Employee Login test
    When I login with a valid "employee" user
    Then I should be logged in
    And I log out

  Scenario: Reviewer Login test
    When I login with a valid "Reviewer" user
    Then I should be logged in
    And I log out

  Scenario: Admin login test
    When I login with a valid "ADMIN" user
    Then I should be logged in
    And I log out

