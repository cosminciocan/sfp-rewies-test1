package pages;

import Utils.TestBase;
import webdriver.Driver;


public class Homepage extends TestBase{

    // URL
    public static String logOutUrl = BaseURL + logOutPath;


    // METHODS
    public void openUIPage(){
        openUrl(BaseURL);
    }

    public void openPage(){
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

