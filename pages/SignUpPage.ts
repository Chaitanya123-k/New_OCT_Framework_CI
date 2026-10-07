
import { Locator, Page } from "playwright";

export class SignUpPage
{
    //variable declaration
    readonly page:Page;
    readonly signUpLink:Locator;
    readonly userNameTextbox:Locator;
    readonly passwordTextbox:Locator;
    readonly signUpButton:Locator;

    //assign the values  = initialization
    constructor(pageRecievedFromSignUpTest: Page)
    {
        this.page = pageRecievedFromSignUpTest;
        this.signUpLink=pageRecievedFromSignUpTest.locator('(//a[@id="signin2"])[1]');
        this.userNameTextbox=pageRecievedFromSignUpTest.locator('//input[@id="sign-username"]');
        this.passwordTextbox=pageRecievedFromSignUpTest.locator('//input[@id="sign-password"]');
        this.signUpButton=pageRecievedFromSignUpTest.locator('//button[text()="Sign up"]');
    }

    //create methods which uses these variable  = utilization
    async signUp()
    {
        await this.signUpLink.click();
        await this.userNameTextbox.fill("bipin1232");
        await this.passwordTextbox.fill("Password7765");
        await this.signUpButton.click();
    }
}