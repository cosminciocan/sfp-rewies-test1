package pages;

import Utils.TestBase;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import webdriver.Driver;


public class MakeReservationPage extends TestBase{

//    URL
    private static String url = BaseURL + "/ReservationWizard";

//    Locators




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
        searchForCurrentReservation();
        waitForElement(makeReservationButton,defaultTimeOut);
    }

    public void makeReservation(){
//        TODO: Refactor this to remove the sleep

        Sleep(1);
        makeReservationButton.click();
        waitForElement(confirmationDiv, defaultTimeOut);
    }

    public void checkReservationDetails(){
        waitForElement(reservationDate, defaultTimeOut);
        Assert.assertTrue(elementContainsText(congratulateDiv, "Congratulations!"));
//        The date format is DD/m/yyyy. After september needs to be changed to: DD/mm/yyyy
        Assert.assertTrue(elementContainsText(reservationDate, simpleDate.format(myDate)));
    }

    public void searchForCurrentReservation(){
        int row = 2; // first table row
        boolean foundReservationDetails = false;
        do{
            String tableRowText = driver.findElement(By.cssSelector(".ui-jqgrid-btable tr:nth-child(" + row + ")")).getText();
            if (tableRowText.contains(myDate.toString())){
                foundReservationDetails = true;
                row++;
            }
        }while(!foundReservationDetails);
    }


}
