$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Staff/CreateCapacityShift.feature");
formatter.feature({
  "line": 2,
  "name": "Create capacity shift",
  "description": "",
  "id": "create-capacity-shift",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Create a capacity shift",
  "description": "",
  "id": "create-capacity-shift;create-a-capacity-shift",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I access the \"staff\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a capacity shift",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "staff",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 10153676256,
  "status": "passed"
});
formatter.match({
  "location": "CreateCapacityShiftSteps.I_create_a_capacity_shift()"
});
formatter.result({
  "duration": 1651479432,
  "status": "passed"
});
formatter.uri("UI/ManageWaitList.feature");
formatter.feature({
  "line": 2,
  "name": "Managing the waiting list",
  "description": "View, Edit, Delete waiting list requests",
  "id": "managing-the-waiting-list",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "Background actions that are needed tot prepare the tests",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Wai List Requests page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any waiting list requests, and if not I create one",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Wai List Requests page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 4060056403,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_navigate_to_the_Wai_List_Requests_page()"
});
formatter.result({
  "duration": 508177792,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_check_if_there_are_any_waiting_list_requests_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 96468027,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_navigate_to_the_Wai_List_Requests_page()"
});
formatter.result({
  "duration": 219223733,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 11,
      "value": "#    TODO: Fails. known Issue. Uncomment when fixed."
    },
    {
      "line": 12,
      "value": "#  Scenario: The user clicks on Information Processing Center"
    },
    {
      "line": 13,
      "value": "#    Then I should be able to view the processing center information by clicking on the info link"
    }
  ],
  "line": 15,
  "name": "The user clicks on Edit button for a reservation.",
  "description": "",
  "id": "managing-the-waiting-list;the-user-clicks-on-edit-button-for-a-reservation.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I choose to edit the waiting list request",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I can modify the request group size",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "ManageWaitListSteps.Edit_Wait_list_modal_window_will_be_visible()"
});
formatter.result({
  "duration": 479368404,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_can_modify_the_request_group_size()"
});
formatter.result({
  "duration": 659414844,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 419224365,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Background actions that are needed tot prepare the tests",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Wai List Requests page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any waiting list requests, and if not I create one",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I navigate to the Wai List Requests page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1444710292,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_navigate_to_the_Wai_List_Requests_page()"
});
formatter.result({
  "duration": 277804139,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_check_if_there_are_any_waiting_list_requests_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 114311058,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_navigate_to_the_Wai_List_Requests_page()"
});
formatter.result({
  "duration": 234422679,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Delete all waiting list requests",
  "description": "",
  "id": "managing-the-waiting-list;delete-all-waiting-list-requests",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I cancel all the wait list requests",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "A message informing the user about no wait list found will be visible.",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "ManageWaitListSteps.I_delete_all_the_wait_list_requests()"
});
formatter.result({
  "duration": 1463353495,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.A_message_informing_the_user_about_no_wait_list_found_will_be_visible()"
});
formatter.result({
  "duration": 64628087,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 260844970,
  "status": "passed"
});
formatter.uri("UI/homepage.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "This feature tests the login",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Login to the UI site",
  "description": "",
  "id": "login-feature;login-to-the-ui-site",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1386271209,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 37859594,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 260444687,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User submits a Contact Us form",
  "description": "",
  "id": "login-feature;user-submits-a-contact-us-form",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I should be logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I navigate to the contact us page",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 15,
      "value": "#    It\u0027s not submitting the form for spamming reasons"
    }
  ],
  "line": 16,
  "name": "I complete the form and I submit it",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1335266197,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 26612958,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.I_navigate_to_the_contact_us_page()"
});
formatter.result({
  "duration": 561191331,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.I_complete_the_form_and_I_submit_it()"
});
formatter.result({
  "duration": 1265739961,
  "status": "passed"
});
formatter.uri("UI/makeReservation.feature");
formatter.feature({
  "line": 2,
  "name": "Making reservations tests",
  "description": "",
  "id": "making-reservations-tests",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "Create a capacity shift",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I access the \"staff\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a capacity shift",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I access the \"ui\" site",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "staff",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 565710907,
  "status": "passed"
});
formatter.match({
  "location": "CreateCapacityShiftSteps.I_create_a_capacity_shift()"
});
formatter.result({
  "duration": 450831398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1494622616,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 209505598,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Make a reservation",
  "description": "",
  "id": "making-reservations-tests;make-a-reservation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I navigate to the Make a Reservation page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I fill in the details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I should see the list of available reservations",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I choose to make a reservation",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "the details of my reservation are saved",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "MakeReservationSteps.I_navigate_to_the_Make_a_Reservation_page()"
});
formatter.result({
  "duration": 1104530551,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_fill_in_the_details()"
});
formatter.result({
  "duration": 782598467,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_should_see_the_list_of_available_reservations()"
});
formatter.result({
  "duration": 75720767,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_choose_to_make_a_reservation()"
});
formatter.result({
  "duration": 737412176,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.the_details_of_my_reservation_are_saved()"
});
formatter.result({
  "duration": 490617014,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 326782862,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Create a capacity shift",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I access the \"staff\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a capacity shift",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I access the \"ui\" site",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I should be logged in",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "staff",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 219719943,
  "status": "passed"
});
formatter.match({
  "location": "CreateCapacityShiftSteps.I_create_a_capacity_shift()"
});
formatter.result({
  "duration": 430201381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1400473787,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 269279355,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Add to waiting list",
  "description": "",
  "id": "making-reservations-tests;add-to-waiting-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I navigate to the Make a Reservation page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I fill in the details",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should see the list of available reservations",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I choose to make a reservation for a higher number than available",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I can choose to add my group to the waiting list",
  "keyword": "When "
});
formatter.match({
  "location": "MakeReservationSteps.I_navigate_to_the_Make_a_Reservation_page()"
});
formatter.result({
  "duration": 518172259,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_fill_in_the_details()"
});
formatter.result({
  "duration": 812557388,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_should_see_the_list_of_available_reservations()"
});
formatter.result({
  "duration": 77933777,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_choose_to_make_a_reservation_for_a_higher_number_than_available()"
});
formatter.result({
  "duration": 339271799,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_can_choose_to_add_my_group_to_the_waiting_list()"
});
formatter.result({
  "duration": 951419192,
  "status": "passed"
});
formatter.uri("UI/manageReservations.feature");
formatter.feature({
  "line": 2,
  "name": "Manage reservations feature",
  "description": "View, edit, cancel reservations",
  "id": "manage-reservations-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ready"
    }
  ]
});
formatter.background({
  "line": 5,
  "name": "Check if there are active reservations",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Manage Reservations page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any active reservations, and if not I create one",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1730074427,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 394677961,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 288884187,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "View my reservations",
  "description": "",
  "id": "manage-reservations-feature;view-my-reservations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I can see the reservations my user has",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "ManageReservationsSteps.I_can_see_the_reservations_my_user_has()"
});
formatter.result({
  "duration": 56353184,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 287049354,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Check if there are active reservations",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Manage Reservations page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any active reservations, and if not I create one",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1378992675,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 378424224,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 274061444,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Modify group size",
  "description": "",
  "id": "manage-reservations-feature;modify-group-size",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I choose to modify the group size",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "The new value is saved",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "ManageReservationsSteps.I_choose_to_modify_the_group_size()"
});
formatter.result({
  "duration": 1149967117,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.The_new_value_is_saved()"
});
formatter.result({
  "duration": 826749703,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 275617183,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Check if there are active reservations",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Manage Reservations page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any active reservations, and if not I create one",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1346602442,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 397366258,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 332899626,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "The user clicks on the Add/View Group Members link",
  "description": "",
  "id": "manage-reservations-feature;the-user-clicks-on-the-add/view-group-members-link",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I click on the Add/View Group Members Link",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I should be re-directed to the Add/View Group Members page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "ManageReservationsSteps.I_click_on_the_Add_View_Group_Members_Link()"
});
formatter.result({
  "duration": 1189980507,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_should_be_re_directed_to_the_Add_View_Group_Members_page()"
});
formatter.result({
  "duration": 67443496,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 250443115,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Check if there are active reservations",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Manage Reservations page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any active reservations, and if not I create one",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1333218986,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 415039148,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 353074884,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Modify group name",
  "description": "",
  "id": "manage-reservations-feature;modify-group-name",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I click on Add Organization/Group Name link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I can add and save a Group Name",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "The name is saved",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I can choose to change or delete it",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "ManageReservationsSteps.I_click_on_Add_Organization_Group_Name_link()"
});
formatter.result({
  "duration": 394160829,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_can_add_and_save_a_Group_Name()"
});
formatter.result({
  "duration": 326135460,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.The_name_is_saved()"
});
formatter.result({
  "duration": 397429419,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_can_choose_to_change_or_delete_it()"
});
formatter.result({
  "duration": 940730743,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 253697494,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Check if there are active reservations",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Manage Reservations page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any active reservations, and if not I create one",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1369674428,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 430658115,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 307419226,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#    TODO: Uncomment this when issue with displaying the info is fixed"
    },
    {
      "line": 32,
      "value": "#  Scenario: View processing center information"
    },
    {
      "line": 33,
      "value": "#    Then I should be able to view the processing center information by clicking on the info link"
    }
  ],
  "line": 35,
  "name": "Modify reservation time and date",
  "description": "",
  "id": "manage-reservations-feature;modify-reservation-time-and-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I click on the Modify Reservation Date/Time button",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I can modify the reservation Date or Time",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "ManageReservationsSteps.I_click_on_the_Modify_Reservation_Date_Time_button()"
});
formatter.result({
  "duration": 139446835,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_can_modify_the_reservation_Date_or_Time()"
});
formatter.result({
  "duration": 1326980241,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 369791671,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "Check if there are active reservations",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I access the \"ui\" site",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to the Manage Reservations page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I check if there are any active reservations, and if not I create one",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ui",
      "offset": 14
    }
  ],
  "location": "HomepageSteps.I_access_the_site(String)"
});
formatter.result({
  "duration": 1433856834,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 470135426,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 277217529,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Cancel active reservations",
  "description": "",
  "id": "manage-reservations-feature;cancel-active-reservations",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "I select to cancel all the active reservations",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I log out",
  "keyword": "And "
});
formatter.match({
  "location": "ManageReservationsSteps.I_select_to_cancel_all_the_active_reservations()"
});
formatter.result({
  "duration": 2835520816,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 256220783,
  "status": "passed"
});
});