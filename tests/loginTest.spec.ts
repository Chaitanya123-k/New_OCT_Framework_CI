import test, { expect } from "playwright/test";
import { loginPage } from "../pages/loginPages";
//test case work only in pom for call methods and validation only

import data from "../TestData/testData.json";  //for data accessing through json
import { SignUpPage } from "../pages/SignUpPage";

test.beforeEach("pre condition", async({page})=>       //before each test case it will execute when url required
{
    await page.goto("https://demoblaze.com/index.html");
}
)

test.afterEach("tear down", async({page}, testInfo)=> //for taking the details of test case failure //testInfo just mention varibale
{
    if(testInfo.status==="failed")
    {
        await page.screenshot(
            {
                path: `screenshot/${testInfo.title}.png`,                       
                fullPage:true
            }
        )
    }
})

test("loginTest", async({page})=>
{
  //  await page.goto("https://demoblaze.com/index.html");
    
    const obj = new loginPage(page);

    await obj.login("bipin1234", "Password_1234");

    //data call from json
   // await obj.login(data.users[0].username, data.users[0].password);
  //  await obj.login(data.users[1].username, data.users[1].password);

    //validation or assertion
   
    for(let i of data.users)
    {
        await obj.login(i.username, i.password);

        //validation or assertion
      //  await expect(page.locator('//a[@id="logout2"]')).toHaveText("Log out");

        //perform logout
     //   await page.locator('//a[@id="logout2"]').click();
    }


}
    

)

test("sign up test case", async({page})=>
{
   // await page.goto("https://demoblaze.com/index.html");
   // await page.locator('(//a[@id="signin2"])[1]').click();
  
   const obj = new SignUpPage(page);
   await obj.signUp();

})