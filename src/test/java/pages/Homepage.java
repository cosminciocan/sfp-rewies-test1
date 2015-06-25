package pages;

import Utils.TestBase;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.security.Credentials;
import org.openqa.selenium.security.UserAndPassword;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.WebDriverWait;
import webdriver.Driver;


public class Homepage extends TestBase{

    // URL
    public static String url = BaseURL;
    public static String urlStaff = StaffURL;

    // LOCATORS
    @FindBy(css = "a[href*='/VMS/Account/LogOff']")
    public WebElement signOutButton;



    // METHODS
    public void openUIPage(){
        Driver.getWebdriver().get(url);
    }


    public void openPage(){
        Driver.getWebdriver().get(urlStaff);
    }

    public void logOut(){
        waitForElement(signOutButton, defaultTimeOut);
        signOutButton.click();
    }

}
