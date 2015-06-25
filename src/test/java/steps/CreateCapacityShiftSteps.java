package steps;

import org.openqa.selenium.support.PageFactory;
import pages.EditCapacityShiftPage;
import pages.Homepage;
import webdriver.Driver;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;

public class CreateCapacityShiftSteps {
    protected EditCapacityShiftPage editShift;

    public CreateCapacityShiftSteps(){
        editShift = PageFactory.initElements(Driver.getWebdriver(), EditCapacityShiftPage.class);
    }

    @And("^I create a capacity shift$")
    public void I_create_a_capacity_shift() throws Throwable {
        editShift.openPage();
        editShift.checkIfCapacityShiftActive();
    }


}
