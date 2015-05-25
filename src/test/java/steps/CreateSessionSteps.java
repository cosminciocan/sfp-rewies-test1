package steps;

import Utils.TestBase;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;
import pages.SelfAssessmentPage;
import pages.SessionsPage;
import webdriver.Driver;

/**
 * Created by cciocan on 25-May-15.
 */
public class CreateSessionSteps extends TestBase{

    protected SessionsPage sessionPage;

    public CreateSessionSteps() { sessionPage = PageFactory.initElements(Driver.getWebdriver(), SessionsPage.class);}

    @And("^I start a new assessment session$")
    public void I_start_a_new_assessment_session() throws Throwable {
        sessionPage.openPage();
        sessionPage.startNewSession();
        Assert.assertFalse(Driver.getWebdriver().getPageSource().contains("is required"));

    }
}
