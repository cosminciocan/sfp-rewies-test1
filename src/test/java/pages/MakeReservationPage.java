package pages;

import Utils.TestBase;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import webdriver.Driver;

import static junit.framework.Assert.*;


public class MakeReservationPage extends TestBase{

//    URL
    private static String url = BaseURL + "/ReservationWizard";


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
    }

    public void makeReservation(){
        searchForCurrentReservation();
        waitForElement(confirmationDiv, defaultTimeOut);
    }

    public void checkReservationDetails(){
        waitForElement(reservationDate, defaultTimeOut);
        assertTrue(elementContainsText(congratulateDiv, "Congratulations!"));
//        The date format is M/dd/yyyy. After september needs to be changed to: MM/dd/yyyy
        assertTrue(elementContainsText(reservationDate, simpleDate.format(myDate)));
        waitForElement(closeConfirmationDiv, defaultTimeOut);
        closeConfirmationDiv.click();
        waitForElement(table,defaultTimeOut);
    }

    public void searchForCurrentReservation(){
        int row = 2; // first table row
        boolean found;
        int count = 0; //Count needed for checking the Make Reservation button
        boolean foundReservationDetails = false;
        waitForElement(makeReservationButton,defaultTimeOut);
        do{
            System.out.println("Checking the table rows...");
            String tableRowText = driver.findElement(By.cssSelector(".ui-jqgrid-btable tr:nth-child("+row+")")).getText();
            if (tableRowText.contains(simpleDate.format(myDate)) && tableRowText.contains(capacityDuration + " hours")
                && tableRowText.contains(processingCenterName)){
                foundReservationDetails = true;
                System.out.println("This is the row number " + row);
                WebElement makeReservationButton = driver.findElement(By.cssSelector(".ui-jqgrid-btable tr:nth-child("+row+") .button.actionButton1"));
                waitForElement(makeReservationButton,defaultTimeOut);
                do {
                    try {
                        makeReservationButton.click();
                        found = true;
                    } catch (Exception e) {
                        found = false;
                        Sleep(0.1);
                    }
                    if (count == 10){
                        System.err.println("The element was not found!");
                        System.exit(1);
                        break;
                    }
                    count++;
                } while(!found);
                }row++;
        }while(!foundReservationDetails);
    }

}
