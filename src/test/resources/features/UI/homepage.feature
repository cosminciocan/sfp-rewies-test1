@ready
Feature: Login Feature
  This feature tests the login


  Scenario: Login to the UI site
    Given I access the "ui" site
    Then I should be logged in
    And I log out

  Scenario: User submits a Contact Us form
    Given I access the "ui" site
    Then I should be logged in
    And I navigate to the contact us page
#    It's not submitting the form for spamming reasons
    And I complete the form and I submit it
#    Then I can see the thank you message