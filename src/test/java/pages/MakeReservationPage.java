package pages;

import Utils.TestBase;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import webdriver.Driver;

import java.util.NoSuchElementException;


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
        Assert.assertTrue(elementContainsText(congratulateDiv, "Congratulations!"));
//        The date format is DD/m/yyyy. After september needs to be changed to: DD/mm/yyyy
        Assert.assertTrue(elementContainsText(reservationDate, simpleDate.format(myDate)));
        waitForElement(closeConfirmationDiv, defaultTimeOut);
        closeConfirmationDiv.click();
        waitForElement(table,defaultTimeOut);
    }

    public void searchForCurrentReservation(){
        int row = 2; // first table row
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
                //        TODO: Refactor this to remove the sleep
                Sleep(1);
                makeReservationButton.click();
            }
            row++;
        }while(!foundReservationDetails);
    }


}
