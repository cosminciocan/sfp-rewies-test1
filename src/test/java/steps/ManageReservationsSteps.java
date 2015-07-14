package steps;

import Utils.TestBase;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.openqa.selenium.support.PageFactory;
import pages.MakeReservationPage;
import pages.ManageReservationsPage;
import webdriver.Driver;

import static junit.framework.Assert.*;


public class ManageReservationsSteps extends TestBase{
    protected ManageReservationsPage manageReservationsPage;
    protected MakeReservationPage makeReservation;

    public ManageReservationsSteps(){
        manageReservationsPage = PageFactory.initElements(Driver.getWebdriver(), ManageReservationsPage.class);
        makeReservation = PageFactory.initElements(Driver.getWebdriver(), MakeReservationPage.class);
    }

    @And("^I navigate to the Manage Reservations page$")
    public void I_navigate_to_the_Manage_Reservations_page() throws Throwable {
        manageReservationsPage.openPage();
    }

    @And("^I check if there are any active reservations, and if not I create one$")
    public void I_check_if_there_are_any_reservations_created_and_if_not_I_create_one() throws Throwable {
        if (!manageReservationsPage.reservationsActive()){
            makeReservation.openPage();
            makeReservation.fillReservationDetails();
            makeReservation.check_list_loaded();
            makeReservation.makeReservation();
            makeReservation.checkReservationDetails();
            manageReservationsPage.openPage();

        }else
            System.out.println("There are active reservation on the Manage Reservation page.");
    }

    @Then("^I can see the reservations my user has$")
    public void I_can_see_the_reservations_my_user_has() throws Throwable {
        assertTrue(manageReservationsPage.reservationsActive());
    }

    @Then("^I select to cancel all the active reservations$")
    public void I_select_to_cancel_all_the_active_reservations() throws Throwable {
        manageReservationsPage.cancelAllActiveReservations();
    }

    @When("^I choose to modify the group size$")
    public void I_choose_to_modify_the_group_size() throws Throwable {
        manageReservationsPage.editGroupSize();
    }

    @Then("^The new value is saved$")
    public void The_new_value_is_saved() throws Throwable {
        manageReservationsPage.isGroupSizeValid();
    }

    @When("^I click on the Add/View Group Members Link$")
    public void I_click_on_the_Add_View_Group_Members_Link() throws Throwable {
        manageReservationsPage.goToGroupListPage();
    }

    @Then("^I should be re-directed to the Add/View Group Members page$")
    public void I_should_be_re_directed_to_the_Add_View_Group_Members_page() throws Throwable {
        manageReservationsPage.checkGroupMembersPage();
    }

    @When("^I click on Add Organization/Group Name link$")
    public void I_click_on_Add_Organization_Group_Name_link() throws Throwable {
        manageReservationsPage.openGroupName();
    }

    @And("^I can add and save a Group Name$")
    public void I_can_add_and_save_a_Group_Name() throws Throwable {
        manageReservationsPage.addGroupName();
    }

    @Then("^The name is saved$")
    public void The_name_is_saved() throws Throwable {
        manageReservationsPage.checkSavedGroupName();
    }

    @And("^I can choose to change or delete it$")
    public void I_can_choose_to_change_or_delete_it() throws Throwable {
        manageReservationsPage.deleteGroupName();
    }

    @Then("^I should be able to view the processing center information by clicking on the info link$")
    public void I_should_be_able_to_view_the_processing_center_information_by_clicking_on_the_info_link() throws Throwable {
        manageReservationsPage.checkProcessingCenterInfo();
    }

    @Given("^I click on the Modify Reservation Date/Time button$")
    public void I_click_on_the_Modify_Reservation_Date_Time_button() throws Throwable {
        manageReservationsPage.openModifyPopUp();
    }

    @Then("^I can modify the reservation Date or Time$")
    public void I_can_modify_the_reservation_Date_or_Time() throws Throwable {
        manageReservationsPage.modifyReservation();
    }
}
