package Utils;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class Constant {

    //BASE URL
    public static final String BaseURL = "http://sfvm22:82";


    //CREDENTIALS
    public static final String employeeUsername = "cciocan";
    public static final String employeePassword = "impersonate";

    public static final String reviewerUsername = "dcrisan";
    public static final String reviewerPassword = "impersonate";

    public static final String adminUsername = "horatiu";
    public static final String adminPassword = "impersonate";


    /*
    Define locator elements using lower CamelCase
    Example:
     - nameOfLocator;
     */
    // LOCATORS
    @FindBy(css ="[id='selfAssessmentForm'] .tab-pane.active .panel-body .form-control")
    public WebElement commentField;
    @FindBy(css =".tab-pane.active[id^='tab_'] .btn-primary")
    public WebElement nextQuestionButton;
    @FindBy(css =".tab-pane.active[id^='tab_'] .next.disabled .btn-primary")
    public WebElement nextFormDisabled;
    @FindBy(css = ".btn.btn-success[value='submit']")
    public WebElement submitButton;
    @FindBy(css = ".dropdown-toggle .glyphicon-user")
    public WebElement profileLink;
    @FindBy(linkText = "Sign out")
    public WebElement logoutButton;
    @FindBy(css = ".btn.btn-lg.btn-primary.btn-block")
    public WebElement loginButton;
    @FindBy(id = "btnSave")
    public WebElement saveButton;
}
