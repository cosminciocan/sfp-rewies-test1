package steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import Utils.TestBase;
import org.openqa.selenium.support.PageFactory;
import pages.SelfAssessmentPage;
import webdriver.Driver;

public class SelfAssessmentSteps extends TestBase{

    protected SelfAssessmentPage assessmentPage;

    public SelfAssessmentSteps() { assessmentPage = PageFactory.initElements(Driver.getWebdriver(), SelfAssessmentPage.class);}

    @And("^I navigate to the Self Assessment page$")
    public void I_navigate_to_the_Self_Assessment_page() throws Throwable {
        assessmentPage.openPage();
    }

    @Then("^I complete my Self Assessment$")
    public void I_complete_my_Self_Assessment() throws Throwable {
        assessmentPage.completeSelfAssessmnet();
    }

}
