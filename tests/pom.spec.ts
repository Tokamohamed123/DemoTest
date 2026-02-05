
//import { expect, Page, test } from "../Fixture/Fixture";
import { expect,test } from "../Fixture/Fixture";
import LoginPage from "./KIB_Pages/login page with password/LoginPage";
import ProductPage from "./KIB_Pages/ProductPage/ProductPage";
import MandatoryDeatailsPage from "./KIB_Pages/Mandatory Details Page/MandatoryDeatilsPage";


test('E2E', async({page, loginPage , productPage, mandatoryDeatailsPage})=>{
   // const loginPage = new LoginPage(page);
   // const productPage=new ProductPage(page);

    await page.goto('https://kib-connect-demo-store-4.myshopify.com/password');
    //  const enterPasswordBtn = page.getByRole('button', { name: 'Enter using password' });

        //   await expect(enterPasswordBtn).toBeVisible();
        //   await enterPasswordBtn.click();

    await loginPage.EnterPassword();
    await loginPage.ClickEnterBtn();
    await page.waitForTimeout(3000);

    //producttest page
    await productPage.ClickOnTestProduct();
    await page.waitForTimeout(3000);
    await productPage.ClickOnBuyNow();

   
  await page.waitForTimeout(3000);

      // 3️⃣ Fill mandatory details and complete order
  await mandatoryDeatailsPage.fillEmail('test@example.com');
   await mandatoryDeatailsPage.enterLastName('Test');
   await mandatoryDeatailsPage.fillAddress('123 Main Street');
   await mandatoryDeatailsPage.enterPhone('(907) 247-9199');
   await mandatoryDeatailsPage.completeOrder();
  // 4️⃣ Wait a bit before closing
  await page.waitForTimeout(3000);
  await page.close();

    // await mandatoryDeatailsPage.FillContactFiled();
    // await mandatoryDeatailsPage.EnterLastNmae();
    // await mandatoryDeatailsPage.FillAddressFiled();


    // await mandatoryDeatailsPage.CompleteOrderBtn();

   


});