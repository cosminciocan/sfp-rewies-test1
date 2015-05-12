package steps;

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

    @Given("^I open the Reviews login page$")
    public void I_Open_Reviews() throws Throwable {
        homepage.openPage();
    }

    @Then("^I should be logged in$")
    public void I_should_be_logged_in() throws Throwable {
        Assert.assertTrue(Driver.getWebdriver().getPageSource().contains("Hello, "));
    }

    @And("^I login with a valid \"([^\"]*)\" user$")
    public void I_login_with_a_valid_user(String user) throws Throwable {
        loginPage.openPage();
        boolean fail = false;
        switch (user.toLowerCase()) {
            case "employee": loginPage.employeeLogin();
                break;
            case "reviewer": loginPage.reviewerLogin();
                break;
            case "admin": loginPage.adminLogin();
                break;
            default: System.out.println("Invalid user type");
                fail = true;
                break;
        }
        Assert.assertFalse(fail);
    }

    @And("^I log out$")
    public void I_log_out() throws Throwable {
        homepage.logOut();
    }
}