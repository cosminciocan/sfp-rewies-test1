package pages;


import Utils.TestBase;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import webdriver.Driver;

import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class SessionsPage extends TestBase {

    //URl
    public static String url = BaseURL + "/Session";


    //Locators
    @FindBy(xpath = "//button[contains(.,'Add New Session')]")
    public WebElement addNewSessionButton;
    @FindBy(xpath = "//div[@id='divDialog']/form/div/div/input")
    public WebElement sessionNameField;
    @FindBy(xpath = "//div/div/form/div[2]/div/input")
    public WebElement startDate;
    @FindBy(xpath = "//div/div/form/div[3]/div/input")
    public WebElement sendFeedbackDate;
    @FindBy(xpath = "//div/div/form/div[4]/div/input")
    public WebElement finishSelfDate;
    @FindBy(xpath = "//div/div/form/div[5]/div/input")
    public WebElement finishTeamLeadDate;
    @FindBy(xpath = "//div/div/form/div[6]/div/input")
    public WebElement finish1on1Date;
    @FindBy(css = ".btn.btn-danger.disabled")
    public WebElement currentSessionClosed;
    @FindBy(id = "btnEndCurrentSession")
    public WebElement closeCurrentSession;
    @FindBy(id = "btnSave")
    public WebElement saveButton;
    @FindBy(xpath = "//div/div/form/div[7]/input")
    public WebElement isActiveCheckbox;

    //Methods
    public void openPage() {
        Driver.getWebdriver().get(url);
    }


    public void startNewSession() {
//        TODO: Finnish it!
        waitForElement(addNewSessionButton, 5);
        if (isElementPresent(currentSessionClosed)) {
            addSessionDetails();
        } else {
            closeCurrentSession.click();
            waitForElement(saveButton, 5);
            saveButton.click();
            waitForElement(addNewSessionButton, 5);
            addSessionDetails();
        }

    }


    public void addSessionDetails() {
        addNewSessionButton.click();
        waitForElement(sessionNameField, 5);
        try {
            startDate.sendKeys(setDateNow());
            sendFeedbackDate.sendKeys(setDateNow());
            finishSelfDate.sendKeys(setDateNow());
            finishTeamLeadDate.sendKeys(setDateNow());
            finish1on1Date.sendKeys(setDateNow());
            sessionNameField.sendKeys(generateRandomString(8));
            isActiveCheckbox.click();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        saveButton.click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        Assert.assertFalse(isElementPresent(sessionNameField));
    }
}