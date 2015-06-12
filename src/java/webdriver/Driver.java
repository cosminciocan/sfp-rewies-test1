package webdriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;


public class Driver {

    private static WebDriver driver;

    public static void initWebdriver() {
//        driver = new FirefoxDriver(); // for Firefox
        System.setProperty("webdriver.chrome.driver", "D:\\Personal\\personal work\\JAVA SFP Reviews\\sfp-rewies-test1\\chromeDriver\\chromedriver.exe");
        driver = new ChromeDriver(); // For chrome
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


    /** Screenshot functionality to be integrated with the fail method
      WebDriver driver = new FirefoxDriver();
     driver.get("http://www.google.com/");
     File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
     // Now you can do whatever you need to do with it, for example copy somewhere
     FileUtils.copyFile(scrFile, new File("c:\\tmp\\screenshot.png"));
     */


    public static WebDriver getWebdriver(){
        return driver;
    }
}
