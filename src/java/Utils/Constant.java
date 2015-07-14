package Utils;

import org.apache.commons.lang3.time.DateUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.text.SimpleDateFormat;
import java.util.Date;


public class Constant{

    //BASE URL
    public static final String BaseURL = "http://sfvm22/VMS";
    public static final String StaffURL = "http://sfvm22/VMSStaff";
//    PATHS
    public static final String waitListPath = "/WaitList";
    public static final String makeReservationPath = "/ReservationWizard";
    public static final String logOutPath = "/Account/LogOff";
    public static final String contactUsPath = "/Contact";


    //CREDENTIALS
    public static final String volunteerUser = "ACVC@actests.rou";
    public static final String volunteerPassword = "11111111";

    //VALUES
    public static final String capacityShiftValue = "100"; //This should be a number
    public static final String reservationGroupSize = "2"; // This should be a number
    public static final String highReservationGroupSize = "200"; // This should be a number above 100
    public static final int defaultTimeOut = 5;
    public static final String volunteerName = "Automation Testing";
    public static final String processingCenterID = "5072";
    public static final String capacityDuration = "8"; //This should be a number (3-8)
    public static final String processingCenterName = "ATPC";
    public static final String groupName = "ATGroupName";
    public static final String makeReservationButtonID = "btnMakeReservation";
    public static final String saveToWaitListID= "btnSaveToWaitList";
    public static final String noWaitListRequestMessage = "No wait list requests found";
    public static final String editWaitListDivTitle = "Edit Wait List";
    public static final String congratulationMessage = "Congratulations!";
    public static final String thankYouForSubbmitContactUsMessage = "Thank you for submitting your message.";

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
    @FindBy(linkText = "SIGN OUT")
    public WebElement signOutButton;
    @FindBy(className = "menuButton")
    public WebElement menuButton;

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
    @FindBy(css = ".ui-icon.ui-icon-closethick")
    public WebElement closeConfirmationDiv;
    @FindBy(id = "btnSaveToWaitList")
    public WebElement saveToWaitListButton;
    @FindBy(css = ".dialogMobile[style^='display: block'] .ui-dialog-titlebar .ui-dialog-title")
    public WebElement addToWaitListConfirmationDiv;
    @FindBy(id = "notifDays")
    public WebElement selectNotifyDays;
    @FindBy(id = "btnWLConfirmAndContinueSearch")
    public WebElement confirmAddToWaitList;

//    Manage reservation page
    @FindBy(id = "searchReservations")
    public WebElement manageMakeReservation;
    @FindBy(className = "resItem")
    public WebElement reservationDivs;
    @FindBy(css = ".resItem .cancelReservation")
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
    @FindBy(css = ".displayModifySizeClass.hide")
    public WebElement groupSizeEditable;
    @FindBy(css = ".editGroup")
    public WebElement groupNameEditButton;

    @FindBy(css = ".displayModifySizeClass")
    public WebElement groupSizeNotEditable;
    @FindBy(id = "gotoGroupMember")
    public WebElement addViewGroupMembers;
    @FindBy(id = "addGroupMember")
    public WebElement inviteGroupMembersButton;
    @FindBy(id = "memberList")
    public WebElement membersListTable;
    @FindBy(css = ".ui-dialog.ui-widget.ui-widget-content.ui-corner-all.dialogMobile.ui-draggable")
    public WebElement addGroupNameDiv;
    @FindBy(id = "GroupName")
    public WebElement groupNameField;
    @FindBy(id = "replaceReservationID")
    public WebElement saveGroupName;
    @FindBy(id = "addOrganisation")
    public WebElement groupInfoDiv;
    @FindBy(css =".buttonDialog .button")
    public WebElement deleteGroupNameButton;

    @FindBy(xpath = "//button[contains(., 'Y')]")
    public WebElement confirmGroupNameDeletionButton;

    @FindBy(id ="ui-dialog-title-preview")
    public WebElement processingCenterInformationSpan;
    @FindBy(id = "closeReplaceReservationID")
    public WebElement closePCInfoDiv;
    @FindBy(css =".btnRes.rescheduleReservation")
    public WebElement modifyReservatioDate;
    @FindBy(id = "ui-dialog-title-reservationGroup")
    public WebElement changeReservationTimeDiv;
    @FindBy(css =".ui-datepicker-days-cell-over.ui-datepicker-current-day")
    public WebElement calendarActiveDate;
    @FindBy(css = ".ui-datepicker-calendar")
    public WebElement datePicker;
    @FindBy(css = ".ui-widget-content.jqgrow.ui-row-ltr")
    public WebElement PCDetailsModify;
    @FindBy(name = "rbShifts")
    public WebElement selectAnotherReservation;
    @FindBy(css = ":not(.editResDialog).dialogMobile[style^='display: block'] .btnOk")
    public WebElement confirmReservationChange;
    @FindBy(id = "divSaveLoadingImg")
    public WebElement loadingImg;

    @FindBy(css = ":not(.editResDialog).dialogMobile[style^='display: block']")
    public WebElement confirmResChangeDiv;

//    Manage Wait List Page
    @FindBy(id = "waitListTable")
    public WebElement waitListTable;
    @FindBy(css = ".editWaitList.actionButton")
    public WebElement editWaitListRequest;
    @FindBy(id = "modifyWaitListGroupSize")
    public WebElement modifyRequestGroupSizeButton;
    @FindBy(id = "saveWLModification")
    public WebElement saveWLModification;
    @FindBy(css = ".ui-state-default.ui-notify-message")
    public WebElement successMessageDiv;
    @FindBy(css = ".button.cancel.cancelReservation")
    public WebElement cancelWaitListRequestButton;
    @FindBy(id = "insideContent")
    public WebElement insideContentDiv;
    @FindBy(id = "waitList")
    public WebElement watListDiv;

//    Contact Us Page
    @FindBy(id = "locationDdl")
    public WebElement selectProcessingCenter;
    @FindBy(id = "FirstName")
    public WebElement firstNameField;
    @FindBy(id = "LastName")
    public WebElement lastNameField;
    @FindBy(id = "phone")
    public WebElement phoneField;
    @FindBy(id = "Email")
    public WebElement emailField;


    @FindBy(id = "Message")
    public WebElement messageField;
    @FindBy(id = "submitBttn")
    public WebElement submitButton;
    @FindBy(id = "main")
    public WebElement mainDiv;



}