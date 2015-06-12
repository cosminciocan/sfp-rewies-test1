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
    public static String UIUrl = "http://sfvm22/VMS";
    public static String url = "http://sfvm22/VMSStaff";

    // LOCATORS
    @FindBy(css = "a[href*='/VMS/Account/LogOff']")
    public WebElement signOutButton;



    // METHODS
    public void openUIPage(){
        Driver.getWebdriver().get(UIUrl);
    }


    public void openPage(){
        Driver.getWebdriver().get(url);
    }

    public void logOut(){
        waitForElement(signOutButton,5);
        signOutButton.click();
    }

}
