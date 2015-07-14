package pages;

import Utils.TestBase;
import junit.framework.Assert;
import webdriver.Driver;

import static junit.framework.Assert.*;


public class ManageWaitListPage extends TestBase{

//    URL
    public String url = BaseURL + waitListPath;


    public void openPage(){
        openUrl(url);
    }

    public boolean checkWaitListRequests(){
       waitUntilElementNotPresent(loadingImg,defaultTimeOut);
        return isElementPresent(waitListTable);
    }

    public void editWaitListRequest(){
        tryClick(editWaitListRequest,defaultTimeOut);
        waitForElement(changeReservationTimeDiv,defaultTimeOut);
        assertTrue(elementContainsText(changeReservationTimeDiv,editWaitListDivTitle));
    }

    public void modifyRequestGroupSize(){
        tryClick(modifyRequestGroupSizeButton,defaultTimeOut);
        spotsField.clear();
        String x = generateRandomNumber(2);
        spotsField.sendKeys(x);
        tryClick(saveWLModification,defaultTimeOut);
        waitForElement(successMessageDiv, defaultTimeOut);
        waitUntilElementNotPresent(groupSizeEditable, defaultTimeOut);
        assertTrue(elementContainsText(groupSizeNotEditable,x));
    }

    public void cancelWaitListRequests(){

        boolean activeRequests = true;
        do{
            waitForElement(insideContentDiv,defaultTimeOut);
            if(isElementPresent(editWaitListRequest)){
                editWaitListRequest();
                tryClick(cancelWaitListRequestButton, defaultTimeOut);
                waitForElement(confirmGroupNameDeletionButton,defaultTimeOut);
                tryClick(confirmGroupNameDeletionButton,defaultTimeOut);
                openPage();
            }else
                activeRequests = false;
        }while(activeRequests);
    }

    public void checkNoWLRequests(){
        waitForElement(watListDiv,defaultTimeOut);
        assertTrue(isTextPresent(noWaitListRequestMessage));
//        assertTrue(elementContainsText(watListDiv,noWaitListRequestMessage));
    }
}
