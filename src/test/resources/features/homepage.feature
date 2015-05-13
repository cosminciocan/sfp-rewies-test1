@ready
Feature: Login Feature
  This feature tests the login

  Scenario Outline:  Testing login with different user types
    Given I login with a valid "<user>" user
    Then I should be logged in
    And I log out

    Examples:
    |user |
    |employee |
    |Reviewer  |
    |ADMIN  |