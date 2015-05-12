@ready
Feature: Testing self assessment

  Background: Login
    Given I login with a valid "employee" user

  Scenario: Create self assessment
    And I navigate to the Self Assessment page
    Then I complete my Self Assessment