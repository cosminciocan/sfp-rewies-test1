package pages;


import Utils.TestBase;
import junit.framework.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import webdriver.Driver;

import static junit.framework.Assert.*;

public class ManageReservationsPage extends TestBase {

//    URL
    public String url = BaseURL + "/MyReservations";


    public void openPage(){
        openUrl(url);
    }

    public boolean reservationsActive(){
        boolean reservationsActive = true;
        waitForElement(manageMakeReservation, defaultTimeOut);
        for(int i = 0; !isElementPresent(reservationDivs); i++){
            if(i == 10 && !isElementPresent(reservationDivs)){
                System.out.println("There are no active reservations!");
                reservationsActive = false;
                break;
            }
            Sleep(0.1);
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
        assertTrue(elementContainsText(groupSizeNotEditable, groupSize));
    }

    public void checkGroupMembersPage(){
        assertTrue(isTextPresent("Group Members"));
        assertTrue(isTextPresent(simpleDate.format(myDate)));
        assertTrue(isElementPresent(membersListTable));
    }

    public void goToGroupListPage(){
        waitForElement(addViewGroupMembers,defaultTimeOut);
        addViewGroupMembers.click();
        waitForElement(inviteGroupMembersButton,defaultTimeOut);
    }

    public void openGroupName(){

//        WebElement groupName = driver.findElement(By.cssSelector(simpleDate.format(myDate) + " 12:00:00 AM"));
        waitForElement(groupNameEditButton,defaultTimeOut);
        groupNameEditButton.click();
        waitForElement(addGroupNameDiv,defaultTimeOut);
    }

    public void addGroupName(){
        waitForElement(groupNameField,defaultTimeOut);
        groupNameField.clear();
        groupNameField.sendKeys(groupName);
        saveGroupName.click();
    }

    public void checkSavedGroupName(){
        waitForElement(reservationDivs, defaultTimeOut);
        waitForElement(groupInfoDiv, defaultTimeOut);
        assertTrue(elementContainsText(groupInfoDiv, groupName));
    }

    public void deleteGroupName(){
        openGroupName();
        deleteGroupNameButton.click();
        waitForElement(saveGroupName,defaultTimeOut);
        tryClick(confirmGroupNameDeletionButton,defaultTimeOut);
        waitForElement(groupInfoDiv, defaultTimeOut);
        assertFalse(elementContainsText(groupInfoDiv, groupName));
    }

    public void checkProcessingCenterInfo(){
        waitForElement(processingCenterId,defaultTimeOut);
        processingCenterId.click();
        waitForElement(processingCenterInformationSpan,defaultTimeOut);
        waitForElement(closePCInfoDiv,defaultTimeOut);
        tryClick(closePCInfoDiv,defaultTimeOut);
        waitForElement(processingCenterId,defaultTimeOut);

    }

    public void openModifyPopUp(){
        waitForElement(modifyReservatioDate,defaultTimeOut);
        modifyReservatioDate.click();

    }

    public void modifyReservation(){
        waitForElement(changeReservationTimeDiv,defaultTimeOut);
        waitForElement(datePicker,defaultTimeOut);
        waitForElement(calendarActiveDate,defaultTimeOut);
//        TODO: Refactor this at some point, because it does not work
        if(isElementPresent(calendarActiveDate)){
            calendarActiveDate.click();
            waitForElement(PCDetailsModify,defaultTimeOut);
            selectAnotherReservation.click();
            waitForElement(saveGroupName,defaultTimeOut);
            saveGroupName.click();
            assertTrue(isElementPresent(confirmResChangeDiv));
            assertTrue(isElementPresent(confirmReservationChange));
            tryClick(confirmReservationChange,defaultTimeOut);
        }else
            closePCInfoDiv.click();
        waitForElement(headerReservationsDiv,defaultTimeOut);
    }

}
