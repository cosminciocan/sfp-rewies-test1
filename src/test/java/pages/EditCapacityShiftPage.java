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
    public  String url = StaffURL + "/Shift/Index?locationId=5071&dates=" + simpleDate.format(date);

    //Locators
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

    public void openPage(){
        Driver.getWebdriver().get(url);
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
