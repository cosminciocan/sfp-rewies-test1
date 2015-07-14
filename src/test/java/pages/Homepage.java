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
import webdriver.LoginWindow;

import java.util.Base64;


public class Homepage extends TestBase{

    // URL
    public static String logOutUrl = BaseURL + logOutPath;


    // METHODS
    public void openUIPage(){
        openUrl(BaseURL);
    }



    public void openPage(){
//        This needs to be commented if tests are run in Chrome
        (new Thread(new LoginWindow())).start();
        Driver.getWebdriver().get(StaffURL);
    }

    public void logOut(){
        Driver.getWebdriver().get(logOutUrl);
    }

    public void checkIfLoggedIn(){
        if(isElementPresent(menuButton)){
            logOut();
        }
    }


}

