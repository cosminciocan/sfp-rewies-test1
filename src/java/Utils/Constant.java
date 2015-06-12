package Utils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class Constant {

    //BASE URL
    public static final String BaseURL = "http://sfvm22/VMS/";


    //CREDENTIALS
    public static final String volunteerUser = "cciocan@smallfootprint.com";
    public static final String volunteerPassword = "11111111";


    /*
    Define locator elements using lower CamelCase
    Example:
     - nameOfLocator;
     */
    // LOCATORS
    @FindBy(css ="[id='selfAssessmentForm'] .tab-pane.active .panel-body .form-control")
    public WebElement commentField;

}
