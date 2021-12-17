const { locateWith } = require("selenium-webdriver");
const {By,Key,Builder} = require("selenium-webdriver");
const { checkLegacyResponse } = require("selenium-webdriver/lib/error");
const { getRandomString } = require("selenium-webdriver/safari");
require("geckodriver")

const login = "Admin";
const password = "admin123";
const empname= "Paul Collings";
const uname = "Dima12345667";
const code="Dima_Babiuk228";


async function func(){


    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("https://opensource-demo.orangehrmlive.com/");

    await driver.findElement(By.id("txtUsername")).sendKeys(login);
    await driver.findElement(By.id("txtPassword")).sendKeys(password);

    await driver.findElement(By.id("btnLogin")).click();
    await driver.findElement(By.id("menu_admin_viewAdminModule")).click();
    await driver.actions({async: true}).move({origin:driver.findElement(By.id("menu_admin_UserManagement"))}).perform();
    await driver.findElement(By.id("menu_admin_viewSystemUsers")).click();
    await driver.findElement(By.id("btnAdd")).click();
    await driver.findElement(By.id("systemUser_employeeName_empName")).sendKeys(empname);
    await driver.findElement(By.id("systemUser_userName")).sendKeys(uname);
    await driver.findElement(By.id("systemUser_password")).sendKeys(code);
    await driver.findElement(By.id("systemUser_confirmPassword")).sendKeys(code);
    await driver.findElement(By.id("btnSave")).click();
    await driver.findElement(By.id("btnSave")).click();

    await driver.findElement(By.id("searchSystemUser_userName")).sendKeys(uname);
    await driver.findElement(By.id("searchSystemUser_userType")).click();
    driver.findElement(By.id('searchSystemUser_userType')).sendKeys('ESS');
    await driver.findElement(By.id("searchSystemUser_employeeName_empName")).sendKeys(empname);
driver.findElement(By.id('searchSystemUser_status')).sendKeys('Enabled');
await driver.findElement(By.id("searchBtn")).click();
if (await driver.findElement(By.linkText(uname)).isEnabled())
    console.log("Element exist");
else  console.log("Element doesn't exist");

await driver.findElement(By.id("resetBtn")).click()

if(await driver.findElement(By.linkText(uname)).isEnabled())
    console.log("Element exist");
    else
 await driver.findElement(By.className("tiptip")).click();
 if(await driver.findElement(By.linkText(uname)).isEnabled()){

 
}
 else console.log("Element doesn't exist");
    
let zxc=await driver.findElement(By.linkText(uname));
addr = await driver.findElement(locateWith(By.name("chkSelectRow[]")).toLeftOf(zxc));
addr.click()

await driver.findElement(By.id("btnDelete")).click();
if(await driver.findElement(By.linkText(uname)).isEnabled())
    console.log("Element haven't been deleted ");
    else
console.log("Element has beem successfully deleted");
}
func();