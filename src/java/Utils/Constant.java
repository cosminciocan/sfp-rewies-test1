package Utils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.text.SimpleDateFormat;
import java.util.Date;


public class Constant {

    //BASE URL
    public static final String BaseURL = "http://sfvm22/VMS";
    public static final String StaffURL = "http://sfvm22/VMSStaff";


    //CREDENTIALS
    public static final String volunteerUser = "cciocan@smallfootprint.com";
    public static final String volunteerPassword = "11111111";

    //VALUES
    public static final String capacityShiftValue = "100"; //This should be a number
    public static final String reservationGroupSize = "2"; // This should be a number
    public static final int defaultTimeOut = 5;

        //time now value
    public static java.util.Date date = new Date();
            // The date format should be changed after september to: MM/dd/yyyy
    public static SimpleDateFormat simpleDate = new SimpleDateFormat("M/dd/yyyy");

    /*
    Define locator elements using lower CamelCase
    Example:
     - nameOfLocator;
     */
    // LOCATORS
    @FindBy(id = "list")
    public WebElement table;

    @FindBy(id = "btnMakeReservation")
    public WebElement makeReservationButton;

}
