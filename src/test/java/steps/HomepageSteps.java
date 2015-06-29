package steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import Utils.TestBase;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;
import pages.Homepage;
import pages.LoginPage;
import webdriver.Driver;


public class HomepageSteps extends TestBase {
    protected Homepage homepage;
    protected LoginPage loginPage;

    public HomepageSteps(){
        homepage = PageFactory.initElements(Driver.getWebdriver(), Homepage.class);
        loginPage = PageFactory.initElements(Driver.getWebdriver(), LoginPage.class);
    }


    @Then("^I should be logged in$")
    public void I_should_be_logged_in() throws Throwable {
        Assert.assertTrue(isTextPresent(volunteerName));
    }


    @And("^I log out$")
    public void I_log_out() throws Throwable {
        homepage.logOut();
        Assert.assertFalse(isTextPresent("Hello, "));
    }

    @Given("^I access the \"([^\"]*)\" site$")
    public void I_access_the_site(String site) throws Throwable {
        homepage.checkIfLoggedIn();
        boolean fail = false;
        switch (site.toLowerCase()){
            case "ui": homepage.openUIPage();
                loginPage.volunteerLogin();
                break;
            case "staff": homepage.openPage();
                break;
            default: fail = true;
                break;
        }
        Assert.assertFalse("The supplied site is not in the list of predefined sites!",fail);
    }
}