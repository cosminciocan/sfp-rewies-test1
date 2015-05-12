package pages;

import Utils.TestBase;
import org.junit.Assert;
import webdriver.Driver;

public class SelfAssessmentPage extends TestBase{

    // URL
    public static String url = BaseURL + "/SelfAssessmentForm";


    // LOCATORS

    // METHODS
    public void openPage(){
        Driver.getWebdriver().get(url);
    }

    public void completeSelfAssessmnet() {
        waitForElement(commentField, 5);
        waitForElement(nextQuestionButton, 5);
        while(nextQuestionButton.isDisplayed() && !isElementPresent(nextFormDisabled)){
            commentField.sendKeys(generateRandomString(10));
            nextQuestionButton.click();
        }
        commentField.sendKeys(generateRandomString(10));
        Assert.assertTrue(isElementPresent(submitButton));
        submitButton.click();
    }

}
