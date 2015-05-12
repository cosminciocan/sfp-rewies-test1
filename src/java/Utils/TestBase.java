package Utils;

import Utils.Constant;
import org.apache.commons.lang3.RandomStringUtils;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import webdriver.Driver;

import java.util.concurrent.TimeUnit;


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


}