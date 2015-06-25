package pages;

import Utils.TestBase;
import webdriver.Driver;


public class CapacityShiftsPage extends TestBase{

    //URL
    public static String url =  StaffURL + "/CapacityShifts";

//    LOCATORS


//    METHODS

    public void openPage(){
        Driver.getWebdriver().get(url);
    }


}
