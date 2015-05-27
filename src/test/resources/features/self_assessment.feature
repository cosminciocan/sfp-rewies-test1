@ready
Feature: Self Assessment Feature
  This Feature tests the self assessments

  Background: Login
    Given I login with a valid "admin" user
    And I start a new assessment session
    Then I log out
    And I login with a valid "employee" user

  Scenario: Create self assessment
    Given I navigate to the Self Assessment page
    When I complete my Self Assessment
    Then The Self Assessment is saved