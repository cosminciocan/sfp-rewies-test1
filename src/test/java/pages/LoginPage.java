package pages;

import Utils.TestBase;
import junit.framework.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import webdriver.Driver;


public class LoginPage extends TestBase {

    // URL
    public static String url = BaseURL + "/Account/Login";

    // LOCATORS
    @FindBy(id = "Username")
    public WebElement usernameField;
    @FindBy(id = "Password")
    public WebElement passwordField;

    // METHODS
    public void openPage(){
        Driver.getWebdriver().get(url);
    }

    public void employeeLogin(){
        usernameField.sendKeys(employeeUsername);
        passwordField.sendKeys(employeePassword);
        loginButton.click();
        waitForElement(profileLink, 5);
    }

    public void reviewerLogin(){
        usernameField.sendKeys(reviewerUsername);
        passwordField.sendKeys(reviewerPassword);
        loginButton.click();
        waitForElement(profileLink, 5);
    }

    public void adminLogin(){
        usernameField.sendKeys(adminUsername);
        passwordField.sendKeys(adminPassword);
        loginButton.click();
        waitForElement(profileLink, 5);
    }


}
