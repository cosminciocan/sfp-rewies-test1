package Utils;

import Utils.Constant;
import org.apache.commons.lang3.RandomStringUtils;
import org.junit.Assert;
import org.junit.internal.runners.statements.Fail;
import org.openqa.selenium.*;
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

    public void waitForElement(WebElement element, int timeOutSeconds) {
//        WebDriverWait wait = new WebDriverWait(driver, timeOut);
//        return wait.until(ExpectedConditions.visibilityOf(name));
        int timeOutLimit = timeOutSeconds * 1000;
        int timeOutTime = 0;
        boolean present = false;

        while(!isElementPresent(element)){
            try {
                Thread.sleep(100);
            } catch (Exception e) {
                e.printStackTrace();

            }
            timeOutTime = timeOutTime + 100;
            if(timeOutTime == timeOutLimit){
                System.err.println("Timed out while waiting for the element!");
                present = true;
                break;
            }
        }

        Assert.assertFalse(present);
    }

//  This method returns a boolean value if the element is found/not found
    public static boolean isElementPresent(WebElement webelement) {
        boolean exists = false;

        driver.manage().timeouts().implicitlyWait(0, TimeUnit.MILLISECONDS);

        try {
            webelement.getTagName();
            webelement.isDisplayed();
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

    public void Sleep(double seconds){
        double milliseconds = seconds * 1000;
        try {
            Thread.sleep((long) milliseconds);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public boolean isTextPresent(String text) {
        while(isAlertPresent()){
            driver.switchTo().alert().accept();
        }
        if (Driver.getWebdriver().getPageSource().contains(text)) {
            System.out.println("Text found");
            return true;
        } else {
            System.out.println("Expected text not found in the page source!");
            return false;
        }
    }

    public boolean elementContainsText(WebElement e, String text){
        waitForElement(e,defaultTimeOut);
        if (e.getText().contains(text)){
           System.out.println("Text found!");
            return true;
        }else {
            try {
                if(e.getAttribute("value").contains(text)) {
                    System.out.println("Text found!");
                    return true;
                }else{
                    System.out.println("Text not found!");
                    return false;
                }
            }catch (NullPointerException error){
                System.out.println("Text not found!");
                return false;
            }
        }
    }

    public void waitUntilElementNotPresent(WebElement element, int timeOutSeconds){
        int timeOutTime = 0;
        timeOutSeconds = timeOutSeconds * 1000;
        boolean present = false;
        while(isElementPresent(element)){
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
            timeOutTime = timeOutTime + 100;
            if(timeOutTime == timeOutSeconds){
                System.err.println("Timed out waiting for the element to disappear!");
                present = true;
                break;
            }
        }
        Assert.assertFalse(present);
    }

    public boolean isAlertPresent(){
        try{
            driver.switchTo().alert();
            return true;
        }
        catch(Exception e){
            return false;
        }
    }

    public void tryClick(WebElement element, int timeOutSeconds){
        boolean found;
        int count = 0; //Count needed for checking the Make Reservation button
        timeOutSeconds = timeOutSeconds * 10;
        do {
            try {
                element.click();
                found = true;
            } catch (Exception e) {
                found = false;
                Sleep(0.1);
            }
            if (count == timeOutSeconds){
                Assert.fail("Element not found!");
                break;
            }
            count++;
        } while(!found);
    }
    public void openUrl(String url){
        Driver.getWebdriver().get(url);
        while(isAlertPresent()){
            driver.switchTo().alert().accept();
        }
    }
}