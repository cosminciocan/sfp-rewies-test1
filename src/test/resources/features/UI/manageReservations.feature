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

