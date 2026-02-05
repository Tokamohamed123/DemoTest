import basePage from "../basePage";
import { Locator, Page } from "@playwright/test";

export default class MandatoryDetailsPage extends basePage {
  // 1. Locators - استخدام Selectors أكثر مرونة وتجنب الـ IDs المتغيرة
  private readonly emailInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly addressInput: Locator;
  private readonly phoneInput: Locator;
  private readonly completeOrderBtn: Locator;

  constructor(page: Page) {
    super(page);
    // نستخدم :visible لضمان عدم حدوث Strict Mode violation مع العناصر المخفية
    this.emailInput = page.locator("input[name='email']:visible").first();
    this.lastNameInput = page.locator("input[name='lastName']:visible").first();
    this.addressInput = page.locator("input[name='address1']:visible").first();
    // استخدام selector يغطي كل احتمالات حقل الهاتف في Shopify
    this.phoneInput = page.locator("input[name='phone']:visible, input[type='tel']:visible").first();
    this.completeOrderBtn = page.locator("#checkout-pay-button").first();
  }

  // 2. Methods - تقسيم المهام بشكل واضح

  async fillEmail(email: string) {
    // استخدمنا الميثود من الـ basePage لضمان الانتظار الصحيح
    await this.enterTextToElement(this.emailInput, email);
  }

  async enterLastName(lastName: string) {
    await this.enterTextToElement(this.lastNameInput, lastName);
  }

async fillAddress(address: string) {
    await this.addressInput.fill(address);
    
    await this.page.waitForTimeout(1500); 
    await this.page.keyboard.press('ArrowDown');
    await this.page.keyboard.press('Enter');
    
    // await this.addressOption.waitFor({ state: 'visible', timeout: 5000 });
    await this.phoneInput.waitFor({ state: 'visible', timeout: 5000 });
}
  async enterPhone(phone: string) {
    await this.enterTextToElement(this.phoneInput, phone);
  }

  async completeOrder() {
    
    await this.completeOrderBtn.waitFor({ state: 'visible', timeout: 7000 });
    await this.clickOnElement(this.completeOrderBtn);
  }

  /**
   * ميثود مجمعة (Action Method) - اختيارية ولكنها احترافية جداً
   * تسمح لكِ بتعبئة الصفحة كاملة بطلب واحد في التست
   */
  async fillAllMandatoryDetails(data: {email: string, lastName: string, address: string, phone: string}) {
    await this.fillEmail(data.email);
    await this.enterLastName(data.lastName);
    await this.fillAddress(data.address);
    await this.enterPhone(data.phone);
  }
}
//////////////////////////////////////////////////////////////////

// import basePage from "../basePage";
// import { Locator, Page } from "@playwright/test";

// export default class MandatoryDetailsPage extends basePage {
//   // Locators
//   private readonly emailInput: Locator;
//   private readonly lastNameInput: Locator;
//   private readonly addressInput: Locator;
//   private readonly phoneInput: Locator;
//   private readonly completeOrderBtn: Locator;
//   private readonly addressOption: Locator; // dropdown option

//   constructor(page: Page) {
//     super(page);
//     this.emailInput = page.locator("//input[@id='email']");
//     this.lastNameInput = page.locator("//input[@name='lastName']");
//     this.addressInput = page.locator("//input[@id='shipping-address1']");
//     this.phoneInput = page.locator("//input[contains(@id, 'phone') or @name='phone' or @type='tel']");
//     this.completeOrderBtn = page.locator("//button[@id='checkout-pay-button']");
//     this.addressOption = page.locator("#shipping-address1-options >> text=123 Main Street"); // dynamic example
//   }

//   // Methods
//   async fillEmail(email: string) {
//     await this.enterTextToElement(this.emailInput, email);
//   }

//   async enterLastName(lastName: string) {
//     const lastNameField = this.lastNameInput.first();
    
//         await lastNameField.fill(lastName);
// }

//   // async enterLastName(lastName: string) {
//   //     await this.lastNameInput.scrollIntoViewIfNeeded();
//   //   await this.enterTextToElement(this.lastNameInput, lastName);
//   // }

//   // async fillAddress(address: string) {
//   //   await this.enterTextToElement(this.addressInput, address);

//   //   // wait and selct from dropdown list
//   //   await this.addressOption.waitFor({ state: 'visible', timeout: 5000 });
//   //   await this.addressOption.click();
//   // }

//   async fillAddress(address: string) {
//     //address input
//     await this.addressInput.fill(address);

//     // wait and select from dropdown list
//     const suggestion = this.page.locator("#shipping-address1-options li, [id*='address1-options'] li").first();
    
//     try {
//         await suggestion.waitFor({ state: 'visible', timeout: 5000 });
//         await suggestion.click();
//     } catch (e) {
//         console.log("المنسدلة لم تظهر، سأحاول الضغط على مفتاح Enter كحل بديل");
//         await this.page.keyboard.press('ArrowDown');
//         await this.page.keyboard.press('Enter');
//     }
// }

//   async enterPhone(phone: string) {
//     await this.enterTextToElement(this.phoneInput, phone);
//   }

//   async completeOrder() {
//     await this.completeOrderBtn.waitFor({ state: 'visible', timeout: 5000 });
//     await this.clickOnElement(this.completeOrderBtn);
//   }
// }
////////////////////////////////////////////////////////////////////

// import basePage from "../basePage";

// export default class MandatoryDeatailsPage extends basePage{
//  private readonly FillContact = this.page.locator("///input[@id='email']");
//  //Xpath

// //lastname
// private readonly LastName = this.page.locator(
//   "//input[@id='TextField1']" );

//   //address
//   private readonly address = this.page.locator(
//   "//input[@id='shipping-address1']" );

// //phoneNumber
//   private readonly phoneNumber = this.page.locator(
//   "//input[@id='TextField5']" );
  

// // ordrebutton
//  private readonly CompleteEnterButton = this.page.locator(
//   "[//button[@id='checkout-pay-button']" );

//  async FillContactFiled() {
//     await this.enterTextToElement(this.FillContact,"(907) 247-9199");
    
//   }

//   async FillAddressFiled() {
//     await this.enterTextToElement(this.address,"(907) 247-9199");
    
//   }

//  async EnterLastNmae() {
//     await this.enterTextToElement(this.LastName,"Test");
    
//   }

//   async EnterphoneNumber() {
//     await this.enterTextToElement(this.phoneNumber,"(907) 247-9199");
    
//   }
// async CompleteOrderBtn() {
//   await this.clickOnElement(this.CompleteEnterButton);

 
//   }
// }
