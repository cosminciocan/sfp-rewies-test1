package Utils;

import Utils.Constant;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.security.Credentials;
import org.openqa.selenium.security.UserAndPassword;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import webdriver.Driver;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import java.util.function.Function;


public abstract class TestBase extends Constant {

    public static WebDriver driver;

    static {
        startSuite();
    }

    private static void startSuite() {
        try {
            Driver.initWebdriver();
            driver = Driver.getWebdriver();
        } catch (Exception e) {
            System.out.println("Exception when start suite:\n" + e);
        }
    }

    public WebElement waitForElement(WebElement name, int timeOut) {
        WebDriverWait wait = new WebDriverWait(driver, timeOut);
        WebElement element = wait.until(ExpectedConditions.visibilityOf(name));
        return element;
    }

//  This method returns a boolean value if the element is found/not found
    public static boolean isElementPresent(WebElement webelement) {
        boolean exists = false;

        driver.manage().timeouts().implicitlyWait(0, TimeUnit.MILLISECONDS);

        try {
//           webelement.isDisplayed();
            webelement.getTagName();
            exists = true;

        } catch (Throwable e) {
            /// Do nothing!
        }
        driver.manage().timeouts().implicitlyWait(1000, TimeUnit.MILLISECONDS);

        return exists;
    }

    public String generateRandomString(int length){
        return RandomStringUtils.randomAlphabetic(length);
    }

    public String generateRandomNumber(int length){
        return RandomStringUtils.randomNumeric(length);
    }

    public String generateRandomAlphaNumeric(int length){
        return RandomStringUtils.randomAlphanumeric(length);
    }

    public static String setDateNow() throws ParseException{
        java.util.Date d = new Date();
        SimpleDateFormat sd = new SimpleDateFormat("MM/dd/yyyy");
        return sd.format(d);
    }

    public void Sleep(int seconds){
        int milliseconds = seconds * 1000;
        try {
            Thread.sleep(milliseconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public boolean isTextPresent(String text) {
        if (Driver.getWebdriver().getPageSource().contains(text)) {
            System.out.println("Text found");
            return true;
        } else {
            System.out.println("Expected text not found in the page source!");
            return false;
        }
    }

    public boolean elementContainsText(WebElement e, String text){
        String pageText = e.getText();
        if  (pageText.contains(text)){
           System.out.println("Text found!");
            return true;
        } else {
            System.out.println("Text not found!");
            return false;
        }
}


}