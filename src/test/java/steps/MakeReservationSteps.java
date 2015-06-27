package steps;

import Utils.TestBase;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import org.openqa.selenium.support.PageFactory;
import pages.Homepage;
import pages.LoginPage;
import pages.MakeReservationPage;
import webdriver.Driver;

public class MakeReservationSteps extends TestBase{
    protected MakeReservationPage makeReservation;

    public MakeReservationSteps(){
        makeReservation = PageFactory.initElements(Driver.getWebdriver(), MakeReservationPage.class);
    }

    @Given("^I navigate to the Make a Reservation page$")
    public void I_navigate_to_the_Make_a_Reservation_page() throws Throwable {
        makeReservation.openPage();
    }

    @When("^I fill in the details$")
    public void I_fill_in_the_details() throws Throwable {
        makeReservation.fillReservationDetails();
    }

    @Then("^I should see the list of available reservations$")
    public void I_should_see_the_list_of_available_reservations() throws Throwable {
        makeReservation.check_list_loaded();
    }

    @And("^I choose to make a reservation$")
    public void I_choose_to_make_a_reservation() throws Throwable {
        makeReservation.makeReservation();
    }

    @Then("^the details of my reservation are saved$")
    public void the_details_of_my_reservation_are_saved() throws Throwable {
        makeReservation.checkReservationDetails();
    }
}