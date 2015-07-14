package pages;

import Utils.TestBase;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import webdriver.Driver;

import java.text.SimpleDateFormat;

import static junit.framework.Assert.*;


public class MakeReservationPage extends TestBase{

//    URL
    private static String url = BaseURL + makeReservationPath;
    SimpleDateFormat singleDayDigitFormat = new SimpleDateFormat("M/d/yyyy");


//    Methods
    public void openPage(){
        openUrl(url);
    }

    public void fillReservationDetails(){
        waitForElement(processingCenterId, defaultTimeOut);
        processingCenterId.click();
        dateCheckbox.click();
        groupSizeText.sendKeys(reservationGroupSize);
        findReservationButton.click();
        waitForElement(PCDetailsModify,defaultTimeOut);
        waitForElement(makeReservationButton,defaultTimeOut);
    }

    public void check_list_loaded(){
        waitForElement(table, defaultTimeOut);
    }

    public void makeReservation(){
        int row = searchForCurrentReservation();
        clickMakeReservation(row);
    }

    public void checkReservationDetails(){
        waitForElement(reservationDate, defaultTimeOut);
        assertTrue(elementContainsText(congratulateDiv, congratulationMessage));
//        The date format is M/dd/yyyy. After september needs to be changed to: MM/dd/yyyy
        if(elementContainsText(reservationDate, simpleDate.format(myDate)))
            assertTrue(elementContainsText(reservationDate, simpleDate.format(myDate)));
        else
            assertTrue(elementContainsText(reservationDate, singleDayDigitFormat.format(myDate)));
        waitForElement(closeConfirmationDiv, defaultTimeOut);
        closeConfirmationDiv.click();
        waitForElement(table,defaultTimeOut);
    }

    public int searchForCurrentReservation(){
        int row = 2; // first table row
        boolean foundReservationDetails = false;
//        waitForElement(makeReservationButton,defaultTimeOut);
//        simpleDate = new SimpleDateFormat("MM/dd/yyyy");
        do{
            System.out.println("Checking the table rows...");
            String tableRowText = driver.findElement(By.cssSelector(".ui-jqgrid-btable tr:nth-child(" + row + ")")).getText();
            if (tableRowText.contains(simpleDate.format(myDate)) || tableRowText.contains(singleDayDigitFormat.format(myDate))
                    && tableRowText.contains(capacityDuration + " hours")
                    && tableRowText.contains(processingCenterName)){
                foundReservationDetails = true;
                System.out.println("This is the row number: " + row);
                }else
                row++;
        }while(!foundReservationDetails);
        return row;
    }

    public void clickMakeReservation(int rowNumber){
        WebElement makeReservationButton = driver.findElement(By.cssSelector(".ui-jqgrid-btable tr:nth-child("+rowNumber+") .actionButton1[id='"+ makeReservationButtonID +"']"));
        tryClick(makeReservationButton,defaultTimeOut);
        waitForElement(confirmationDiv, defaultTimeOut);
    }

    public void highGroupNumberReservation(){
        waitForElement(makeReservationButton,defaultTimeOut);
        groupSizeText.clear();
        groupSizeText.sendKeys(highReservationGroupSize);
        tryClick(findReservationButton,defaultTimeOut);
    }

    public void addToWaitList(){
        int row = searchForCurrentReservation();
        clickAddToWaitList(row);
        assertTrue(elementContainsText(addToWaitListConfirmationDiv, "Add To Wait List"));
        new Select(selectNotifyDays).selectByIndex(1);
        tryClick(confirmAddToWaitList,defaultTimeOut);
        waitUntilElementNotPresent(addToWaitListConfirmationDiv,defaultTimeOut);
        assertFalse(isElementPresent(addToWaitListConfirmationDiv));
    }

    public void clickAddToWaitList(int rowNumber){
        waitForElement(saveToWaitListButton,defaultTimeOut);
        WebElement addToWaitListButton  = driver.findElement(By.cssSelector(".ui-jqgrid-btable tr:nth-child("+rowNumber+") .actionButton1[id='"+ saveToWaitListID +"']"));
        tryClick(addToWaitListButton,defaultTimeOut);
        waitForElement(addToWaitListConfirmationDiv,defaultTimeOut);
    }
}
