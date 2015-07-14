@ready
  Feature: Making reservations tests

    Background: Create a capacity shift
      Given I access the "staff" site
      And I create a capacity shift
      Then I access the "ui" site
      And I should be logged in

    Scenario: Make a reservation
      Given I navigate to the Make a Reservation page
      When I fill in the details
      Then I should see the list of available reservations
      And I choose to make a reservation
      Then the details of my reservation are saved
      And I log out

    Scenario: Add to waiting list
      Given I navigate to the Make a Reservation page
      When I fill in the details
      Then I should see the list of available reservations
      And I choose to make a reservation for a higher number than available
      When I can choose to add my group to the waiting list
