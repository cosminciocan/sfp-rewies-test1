@ready
Feature: Managing the waiting list
  View, Edit, Delete waiting list requests

  Background: Background actions that are needed tot prepare the tests
    Given I access the "ui" site
    When I navigate to the Wai List Requests page
    Then I check if there are any waiting list requests, and if not I create one
    And I navigate to the Wai List Requests page

#    TODO: Fails. known Issue. Uncomment when fixed.
#  Scenario: The user clicks on Information Processing Center
#    Then I should be able to view the processing center information by clicking on the info link

  Scenario: The user clicks on Edit button for a reservation.
    When I choose to edit the waiting list request
    Then I can modify the request group size
    And I log out

  Scenario: Delete all waiting list requests
    And I cancel all the wait list requests
    Then A message informing the user about no wait list found will be visible.
    And I log out