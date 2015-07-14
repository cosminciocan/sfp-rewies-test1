package pages;

import Utils.TestBase;
import webdriver.Driver;
import webdriver.LoginWindow;


public class Homepage extends TestBase{

    // URL
    public static String logOutUrl = BaseURL + logOutPath;


    // METHODS
    public void openUIPage(){
        openUrl(BaseURL);
    }



    public void openPage(){
//        This needs to be commented if tests are run in Chrome
        new Thread(new LoginWindow()).start();
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

