package steps;

import Utils.TestBase;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.openqa.selenium.support.PageFactory;
import pages.MakeReservationPage;
import pages.ManageReservationsPage;
import webdriver.Driver;


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
        Assert.assertTrue(manageReservationsPage.reservationsActive());
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
}
