@ready
Feature: Self Assessment Feature
  This Feature tests the self assessments

  @wip
  Background: Login
    Given I login with a valid "admin" user
    And I start a new assessment session
    Then I log out
    And I login with a valid "employee" user

    @wip
  Scenario: Create self assessment
    And I navigate to the Self Assessment page
    Then I complete my Self Assessment
