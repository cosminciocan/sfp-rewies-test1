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
  "duration": 5387741681,
  "status": "passed"
});
formatter.match({
  "location": "CreateCapacityShiftSteps.I_create_a_capacity_shift()"
});
formatter.result({
  "duration": 772718085,
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
  "duration": 5536983234,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_navigate_to_the_Wai_List_Requests_page()"
});
formatter.result({
  "duration": 266997658,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_check_if_there_are_any_waiting_list_requests_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 104556604,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_navigate_to_the_Wai_List_Requests_page()"
});
formatter.result({
  "duration": 287944664,
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
  "duration": 386210417,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_can_modify_the_request_group_size()"
});
formatter.result({
  "duration": 655699783,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 440507705,
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
  "duration": 1602361754,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_navigate_to_the_Wai_List_Requests_page()"
});
formatter.result({
  "duration": 241190794,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_check_if_there_are_any_waiting_list_requests_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 107246086,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.I_navigate_to_the_Wai_List_Requests_page()"
});
formatter.result({
  "duration": 217173759,
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
  "duration": 1538181716,
  "status": "passed"
});
formatter.match({
  "location": "ManageWaitListSteps.A_message_informing_the_user_about_no_wait_list_found_will_be_visible()"
});
formatter.result({
  "duration": 59448476,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 266381047,
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
  "duration": 1453785762,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 34952207,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 312140524,
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
  "duration": 2069258590,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 81153417,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.I_navigate_to_the_contact_us_page()"
});
formatter.result({
  "duration": 707623001,
  "status": "passed"
});
formatter.match({
  "location": "ContactUsSteps.I_complete_the_form_and_I_submit_it()"
});
formatter.result({
  "duration": 1681143470,
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
  "duration": 641493256,
  "status": "passed"
});
formatter.match({
  "location": "CreateCapacityShiftSteps.I_create_a_capacity_shift()"
});
formatter.result({
  "duration": 502106425,
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
  "duration": 2170553316,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 26635854,
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
  "duration": 334104031,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_fill_in_the_details()"
});
formatter.result({
  "duration": 811932092,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_should_see_the_list_of_available_reservations()"
});
formatter.result({
  "duration": 84327661,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_choose_to_make_a_reservation()"
});
formatter.result({
  "duration": 656257574,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.the_details_of_my_reservation_are_saved()"
});
formatter.result({
  "duration": 497920024,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 377170869,
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
  "duration": 209470859,
  "status": "passed"
});
formatter.match({
  "location": "CreateCapacityShiftSteps.I_create_a_capacity_shift()"
});
formatter.result({
  "duration": 445720081,
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
  "duration": 1703063553,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_should_be_logged_in()"
});
formatter.result({
  "duration": 26803626,
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
  "duration": 1418955535,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_fill_in_the_details()"
});
formatter.result({
  "duration": 1166764041,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_should_see_the_list_of_available_reservations()"
});
formatter.result({
  "duration": 56265154,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_choose_to_make_a_reservation_for_a_higher_number_than_available()"
});
formatter.result({
  "duration": 269559632,
  "status": "passed"
});
formatter.match({
  "location": "MakeReservationSteps.I_can_choose_to_add_my_group_to_the_waiting_list()"
});
formatter.result({
  "duration": 950436246,
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
  "duration": 2132512133,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 246834639,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 574562945,
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
  "duration": 91735676,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 273522601,
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
  "duration": 1552587594,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 565322071,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 411797401,
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
  "duration": 1080887351,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.The_new_value_is_saved()"
});
formatter.result({
  "duration": 837989627,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 280334533,
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
  "duration": 3239941781,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 378493701,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 308934700,
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
  "duration": 882271134,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_should_be_re_directed_to_the_Add_View_Group_Members_page()"
});
formatter.result({
  "duration": 67149007,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 247481646,
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
  "duration": 1490759520,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 386292526,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 295527953,
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
  "duration": 351892190,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_can_add_and_save_a_Group_Name()"
});
formatter.result({
  "duration": 352741708,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.The_name_is_saved()"
});
formatter.result({
  "duration": 385593806,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_can_choose_to_change_or_delete_it()"
});
formatter.result({
  "duration": 1437549788,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 401754380,
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
  "duration": 1719376504,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 518756894,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 985547145,
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
  "duration": 373682004,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_can_modify_the_reservation_Date_or_Time()"
});
formatter.result({
  "duration": 1618915112,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 348885324,
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
  "duration": 1681508225,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_navigate_to_the_Manage_Reservations_page()"
});
formatter.result({
  "duration": 521422689,
  "status": "passed"
});
formatter.match({
  "location": "ManageReservationsSteps.I_check_if_there_are_any_reservations_created_and_if_not_I_create_one()"
});
formatter.result({
  "duration": 278332324,
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
  "duration": 1757494665,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.I_log_out()"
});
formatter.result({
  "duration": 357194965,
  "status": "passed"
});
});