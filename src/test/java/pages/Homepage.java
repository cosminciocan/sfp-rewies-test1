package pages;

import Utils.TestBase;
        import org.openqa.selenium.WebElement;
        import org.openqa.selenium.support.FindBy;
        import webdriver.Driver;


public class Homepage extends TestBase{

    // URL
    public static String url = BaseURL;

    // LOCATORS



    // METHODS
    public void openPage(){
        Driver.getWebdriver().get(url);
    }

    public void logOut(){
        waitForElement(profileLink, 5);
        profileLink.click();
        logoutButton.click();
        waitForElement(loginButton, 5);
    }
}
