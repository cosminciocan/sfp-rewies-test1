package Utils;

import java.awt.*;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;


public class LoginWindow implements Runnable {
    @Override
    public void run() {
        try {
            login();
        } catch (Exception ex) {
            System.out.println("Error in Login Thread: " + ex.getMessage());
        }
    }

//    TODO: FIND A WAY TO AUTOMATE WINDOWS AUTHENTICATION
//    THIS IS A WORKAROUND
    public void login() throws Exception {

        //wait - increase this wait period if required
        Thread.sleep(1000);

        //create robot for keyboard operations
        Robot rb = new Robot();

        //Enter user name by ctrl-v
        StringSelection username = new StringSelection("cciocan");
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(username, null);
        rb.keyPress(KeyEvent.VK_CONTROL);
        rb.keyPress(KeyEvent.VK_V);
        rb.keyRelease(KeyEvent.VK_V);
        rb.keyRelease(KeyEvent.VK_CONTROL);

        //tab to password entry field
        rb.keyPress(KeyEvent.VK_TAB);
        rb.keyRelease(KeyEvent.VK_TAB);
        Thread.sleep(1000);

        //Enter password by ctrl-v
        StringSelection pwd = new StringSelection("Passw0rd.1");
        Toolkit.getDefaultToolkit().getSystemClipboard().setContents(pwd, null);
        rb.keyPress(KeyEvent.VK_CONTROL);
        rb.keyPress(KeyEvent.VK_V);
        rb.keyRelease(KeyEvent.VK_V);
        rb.keyRelease(KeyEvent.VK_CONTROL);

        //press enter
        rb.keyPress(KeyEvent.VK_ENTER);
        rb.keyRelease(KeyEvent.VK_ENTER);
    }
}