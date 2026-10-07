import { type Page, type Locator } from "@playwright/test";

export class loginPage {                              // framework 3 things = 1. Variable Declaration
    readonly page: Page;                                
    readonly loginLink: Locator;
    readonly userNameField: Locator;
    readonly passwordField: Locator;
    readonly loginButton: Locator;
 
    constructor(pageReceivedFromLoginPage: Page) {     // Variable Initialization
        this.page = pageReceivedFromLoginPage;
        this.loginLink = pageReceivedFromLoginPage.locator('//a[@id="login2"]');
        this.userNameField = pageReceivedFromLoginPage.locator('//input[@id="loginusername"]');
        this.passwordField = pageReceivedFromLoginPage.locator('//input[@id="loginpassword"]');
        this.loginButton = pageReceivedFromLoginPage.locator('//button[text()="Log in"]');
    }

    async login(uname:string, passw:string)           // method which are using these variable  - utilization
    {
    await this.loginLink.click();
    await this.userNameField.fill(uname);
    await this.passwordField.fill(passw);
    await this.loginButton.click();
    
    }
}