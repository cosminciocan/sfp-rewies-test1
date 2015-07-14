package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.openqa.selenium.support.PageFactory;
import pages.ContactUsPage;
import webdriver.Driver;


public class ContactUsSteps {
    protected ContactUsPage contactUsPage;

    public ContactUsSteps(){
        contactUsPage = PageFactory.initElements(Driver.getWebdriver(), ContactUsPage.class);
    }

    @And("^I navigate to the contact us page$")
    public void I_navigate_to_the_contact_us_page() throws Throwable {
        contactUsPage.openPage();
    }

    @And("^I complete the form and I submit it$")
    public void I_complete_the_form_and_I_submit_it() throws Throwable {
        contactUsPage.submitContactUsForm();
    }

    @Then("^I can see the thank you message$")
    public void I_can_see_the_thank_you_message() throws Throwable {
        contactUsPage.checkSuccessSubmitMessage();
    }
}
