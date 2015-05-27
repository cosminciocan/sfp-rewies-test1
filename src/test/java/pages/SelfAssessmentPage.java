package pages;

import Utils.TestBase;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import webdriver.Driver;

public class SelfAssessmentPage extends TestBase{

    // URL
    public static String url = BaseURL + "/SelfAssessmentForm";


    // LOCATORS

    @FindBy(className = "box-title")
    public WebElement pageName;
    // METHODS
    public void openPage(){
        Driver.getWebdriver().get(url);
        waitForElement(pageName, 5);
        Assert.assertTrue(elementContainsText(pageName, "My Current Self Assessment"));
    }

    public void completeSelfAssessment() {
        waitForElement(commentField, 5);
        waitForElement(nextQuestionButton, 5);
        while(nextQuestionButton.isDisplayed() && !isElementPresent(nextFormDisabled)){
            commentField.sendKeys(generateRandomString(10));
            nextQuestionButton.click();
        }
        commentField.sendKeys(generateRandomString(10));
        Assert.assertTrue(isElementPresent(submitButton));
        submitButton.click();
        waitForElement(saveButton, 5);
        saveButton.click();

//        Assert.assertTrue(isTextPresent("Assessment submitted"));
    }
}
