package pages;

import Utils.TestBase;
import junit.framework.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import webdriver.Driver;


public class MakeReservationPage extends TestBase{

//    URL
    private static String url = BaseURL + "/ReservationWizard";

//    Locators
    @FindBy(id = "5071")
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



//    Methods

    public void openPage(){
        Driver.getWebdriver().get(url);
    }

    public void fillReservationDetails(){
        waitForElement(processingCenterId, defaultTimeOut);
        processingCenterId.click();
        dateCheckbox.click();
        groupSizeText.sendKeys(reservationGroupSize);
        findReservationButton.click();
    }

    public void check_list_loaded(){
        waitForElement(table, defaultTimeOut);
        waitForElement(makeReservationButton,defaultTimeOut);
    }

    public void makeReservation(){
        makeReservationButton.click();
        waitForElement(confirmationDiv, defaultTimeOut);
    }

    public void checkReservationDetails(){
        Assert.assertTrue(elementContainsText(congratulateDiv, "Congratulations!"));
        System.out.println("This is the date from the reservation: " + reservationDate.getText());
        System.out.println("This is the date from the reservation: " + simpleDate.format(date));
        Assert.assertTrue(elementContainsText(reservationDate, simpleDate.format(date)));
    }

}
