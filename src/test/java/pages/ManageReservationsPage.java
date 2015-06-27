package pages;


import Utils.TestBase;
import junit.framework.Assert;
import webdriver.Driver;

public class ManageReservationsPage extends TestBase {

//    URL
    public String url = BaseURL + "/MyReservations";


    public void openPage(){
        Driver.getWebdriver().get(url);
    }

    public boolean reservationsActive(){
        boolean reservationsActive = true;
        waitForElement(manageMakeReservation, defaultTimeOut);
        for(int i = 0; !isElementPresent(reservationDivs); i++){
            if(i == 3 && !isElementPresent(reservationDivs)){
                System.out.println("There are no active reservations!");
                reservationsActive = false;
                break;
            }
            Sleep(1);
        }
        return reservationsActive;
    }

    public void cancelAllActiveReservations(){
        waitForElement(headerReservationsDiv, defaultTimeOut);
        while(isElementPresent(cancelButton) && isElementPresent(reservationDivs)){
            waitForElement(cancelButton, defaultTimeOut);
            cancelButton.click();
            waitForElement(confirmCancelReservations,defaultTimeOut);
            confirmCancelReservations.click();
            openPage();
            while(isAlertPresent()){
                driver.switchTo().alert().accept();
            }
            waitForElement(manageMakeReservation, defaultTimeOut);
            if (isTextPresent("No reservations found.")){
                break;
            }else
                waitForElement(headerReservationsDiv, defaultTimeOut);
        }
    }

    public String groupSize;
    public void editGroupSize(){
        modifyGroupSizeButton.click();
        waitForElement(spotsField, defaultTimeOut);
        spotsField.clear();
        spotsField.sendKeys(generateRandomNumber(1));
        groupSize = spotsField.getText();
        groupSizeSaveButton.click();
    }

    public void isGroupSizeValid(){
        waitForElement(groupSizeNotEditable, defaultTimeOut);
        Assert.assertTrue(elementContainsText(groupSizeNotEditable, groupSize));
    }



}
