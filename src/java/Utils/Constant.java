package Utils;

import org.apache.commons.lang3.time.DateUtils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.text.SimpleDateFormat;
import java.util.Date;


public class Constant {

    //BASE URL
    public static final String BaseURL = "http://sfvm22/VMS";
    public static final String StaffURL = "http://sfvm22/VMSStaff";

    //CREDENTIALS
    public static final String volunteerUser = "ACVC@actests.rou";
    public static final String volunteerPassword = "11111111";

    //VALUES
    public static final String capacityShiftValue = "100"; //This should be a number
    public static final String reservationGroupSize = "2"; // This should be a number
    public static final int defaultTimeOut = 5;
    public static final String volunteerName = "Automation Testing";
    public static final String processingCenterID = "5072";

    //time now value
//    public static java.util.Date date = new Date();
    public static Date myDate = DateUtils.addDays((new Date()), 1);
    // The date format should be changed after september to: MM/dd/yyyy
    public static SimpleDateFormat simpleDate = new SimpleDateFormat("M/dd/yyyy");

    /*
    Define locator elements using lower CamelCase
    Example:
     - nameOfLocator;
     */
    // LOCATORS

//    Header
    @FindBy(css = ".welcomeText .userName.hideMobile")
    public WebElement expandNameMenu;

//      Edit Capacity Shift Page
    @FindBy(id = "btnAddShift")
    public WebElement addShiftButton;
    @FindBy(id = "StartTime")
    public WebElement startTimeSelect;
    @FindBy(id = "ddlLength")
    public WebElement shiftLengthSelect;
    @FindBy(id = "capacity")
    public WebElement shiftCapacityArea;
    @FindBy(id = "0_1")
    public WebElement tdtr1;
    @FindBy(css = ".btnOk.ui-button.ui-widget.ui-state-default.ui-corner-all.ui-button-text-only")
    public WebElement saveButton;

//    Make a reservation page
    @FindBy(id = "btnMakeReservation")
    public WebElement makeReservationButton;
    @FindBy(id = "list")
    public WebElement table;
    @FindBy(id = processingCenterID)
    public WebElement processingCenterId;
    @FindBy(css = ".multiselectList .datesCheckbox")
    public WebElement dateCheckbox;
    @FindBy(id = "txtCapacity")
    public WebElement groupSizeText;
    @FindBy(id = "btnFindReservations")
    public WebElement findReservationButton;
    @FindBy(id = "ui-dialog-title-divConfirmMakeReservation")
    public WebElement congratulateDiv;
    @FindBy(css = ".ui-dialog-titlebar")
    public WebElement confirmationDiv;
    @FindBy(css = ".resLocation .date")
    public WebElement reservationDate;



//    Manage reservation page
    @FindBy(id = "searchReservations")
    public WebElement manageMakeReservation;
    @FindBy(className = "resItem")
    public WebElement reservationDivs;
    @FindBy(css = ".formAddGroup .cancel")
    public WebElement cancelButton;
    @FindBy(css = ".ui-dialog-buttonset .btnOk")
    public WebElement confirmCancelReservations;
    @FindBy(id = "HeaderReservationDiv")
    public WebElement headerReservationsDiv;
    @FindBy(className = "modifyGroupSizeGlobal")
    public WebElement modifyGroupSizeButton;
    @FindBy(id = "Spots")
    public WebElement spotsField;
    @FindBy(id = "saveSizeModification")
    public WebElement groupSizeSaveButton;
    @FindBy(className = "displayModifySizeClass")
    public WebElement groupSizeNotEditable;


}