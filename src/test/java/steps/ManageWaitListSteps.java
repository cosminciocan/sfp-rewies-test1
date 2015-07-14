package steps;

import Utils.TestBase;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pages.MakeReservationPage;
import pages.ManageWaitListPage;
import sun.invoke.anon.AnonymousClassLoader;
import webdriver.Driver;

public class ManageWaitListSteps extends TestBase{
    protected ManageWaitListPage manageWaitListPage;
    protected MakeReservationPage makeReservation;

    public  ManageWaitListSteps(){
        manageWaitListPage = PageFactory.initElements(Driver.getWebdriver(), ManageWaitListPage.class);
        makeReservation = PageFactory.initElements(Driver.getWebdriver(), MakeReservationPage.class);

    }

    @When("^I navigate to the Wai List Requests page$")
    public void I_navigate_to_the_Wai_List_Requests_page() throws Throwable {
        manageWaitListPage.openPage();
    }

    @Then("^I check if there are any waiting list requests, and if not I create one$")
    public void I_check_if_there_are_any_waiting_list_requests_and_if_not_I_create_one() throws Throwable {
        if(manageWaitListPage.checkWaitListRequests()){
            System.out.println("There are existing wait list requests.");
        }else{
            makeReservation.openPage();
            makeReservation.fillReservationDetails();
            makeReservation.highGroupNumberReservation();
            makeReservation.addToWaitList();
        }
    }

    @Then("^I choose to edit the waiting list request$")
    public void Edit_Wait_list_modal_window_will_be_visible() throws Throwable {
        manageWaitListPage.editWaitListRequest();
    }

    @Then("^I can modify the request group size$")
    public void I_can_modify_the_request_group_size() throws Throwable {
        manageWaitListPage.modifyRequestGroupSize();
    }

    @And("^I cancel all the wait list requests$")
    public void I_delete_all_the_wait_list_requests() throws Throwable {
        manageWaitListPage.cancelWaitListRequests();
    }

    @Then("^A message informing the user about no wait list found will be visible.$")
    public void A_message_informing_the_user_about_no_wait_list_found_will_be_visible() throws Throwable {
        manageWaitListPage.checkNoWLRequests();
    }

}
