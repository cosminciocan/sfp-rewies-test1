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

import java.util.Base64;


public class Homepage extends TestBase{

    // URL
    public static String url = BaseURL;
    public static String urlStaff = StaffURL;
    public static String logOutUrl = BaseURL + "/Account/LogOff";


    // METHODS
    public void openUIPage(){
        Driver.getWebdriver().get(url);
    }


    public void openPage(){
        Driver.getWebdriver().get(urlStaff);
    }

    public void logOut(){
        Driver.getWebdriver().get(logOutUrl);
    }

}
