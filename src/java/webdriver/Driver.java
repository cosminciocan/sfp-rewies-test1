package webdriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Driver {

    private static WebDriver driver;

    public static void initWebdriver() {
        driver = new FirefoxDriver();
        System.out.println("Starting browser");
        driver.manage().window().maximize();
        driver.manage().deleteAllCookies();
        Runtime.getRuntime().addShutdownHook(new Thread() {
            public void run() {
                System.out.println("Closing browser");
                driver.quit();
            }
        });
    }

    public static WebDriver getWebdriver(){
        return driver;
    }
}
