package pages;

import Utils.TestBase;
import junit.framework.Assert;
import org.openqa.selenium.support.ui.Select;
import webdriver.Driver;

import static junit.framework.Assert.*;


public class ContactUsPage extends TestBase {
    public String url = BaseURL + contactUsPath;


    public void openPage(){
        Driver.getWebdriver().get(url);
    }

    public void submitContactUsForm(){
        new Select(selectProcessingCenter).selectByValue(processingCenterID);
        String[] name = volunteerName.split(" ");
        assertTrue(elementContainsText(firstNameField, name[0]));
        assertTrue(elementContainsText(lastNameField, name[1]));
        assertTrue(elementContainsText(emailField, volunteerUser));
        messageField.sendKeys(generateRandomAlphaNumeric(50));
        assertTrue(isElementPresent(submitButton));
        assertTrue(isElementPresent(phoneField));
//        This is commented because of spamming reasons
//        submitButton.click();

    }

    public void checkSuccessSubmitMessage(){
//        Driver.getWebdriver().get("http://sfvm22/VMS/Contact?message=Thank%20you%20for%20submitting%20your%20message.");
        waitForElement(mainDiv,defaultTimeOut);
        assertTrue(elementContainsText(mainDiv,thankYouForSubbmitContactUsMessage));
    }
}
