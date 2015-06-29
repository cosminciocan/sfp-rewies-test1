@ready
Feature: Manage reservations feature
  View, edit, cancel reservations

  Background: Check if there are active reservations
    Given I access the "ui" site
    When I navigate to the Manage Reservations page
    Then I check if there are any active reservations, and if not I create one

  Scenario: View my reservations
    Then I can see the reservations my user has
    And I log out

  Scenario: Cancel active reservations
    Then I select to cancel all the active reservations
    And I log out

  Scenario: Modify group size
    When I choose to modify the group size
    Then The new value is saved
    And I log out

  Scenario: The user clicks on the Add/View Group Members link
    When I click on the Add/View Group Members Link
    Then I should be re-directed to the Add/View Group Members page
    And I log out

  Scenario: The user clicks on 'Add Organization/Group Name' link
    When I click on Add Organization/Group Name link
    And I can add and save a Group Name
    Then The name is saved
    And I can choose to change or delete it
    And I log out
