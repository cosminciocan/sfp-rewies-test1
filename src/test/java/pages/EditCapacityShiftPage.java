package pages;

import Utils.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import webdriver.Driver;


public class EditCapacityShiftPage extends TestBase {

    //URL
//    TODO: Refactor the date method to add date + 1
//    public static java.util.Date d = new Date();
//    public static SimpleDateFormat sd = new SimpleDateFormat("MM/dd/yyyy");
    public  String url = StaffURL + "/Shift/Index?locationId=" + processingCenterID + "&dates=" + simpleDate.format(myDate);


    public void openPage(){
        Driver.getWebdriver().get(url);
        System.out.print("THIS IS THE DATE: " + url );
    }

    public void checkIfCapacityShiftActive(){
        if (!elementContainsText(tdtr1, " / " + capacityShiftValue)){
            System.out.println(tdtr1.getText());
            addCapacityShift();
        }

    }

    public void addCapacityShift(){
        waitForElement(addShiftButton,defaultTimeOut);
        addShiftButton.click();
        waitForElement(saveButton,defaultTimeOut);
//        TODO: Refactor this because it does not take the given value
//        startTimeSelect.sendKeys("12:00pm");
        shiftLengthSelect.sendKeys("8");
        shiftCapacityArea.sendKeys(capacityShiftValue);
        saveButton.click();
    }

}
