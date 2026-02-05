

import basePage from "../basePage";
import { Locator, Page } from "@playwright/test";

export default class MandatoryDetailsPage extends basePage {
  // Locators
  private readonly emailInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly addressInput: Locator;
  private readonly phoneInput: Locator;
  private readonly completeOrderBtn: Locator;
  private readonly addressOption: Locator; // dropdown option

  constructor(page: Page) {
    super(page);
    this.emailInput = page.locator("//input[@id='email']");
    this.lastNameInput = page.locator("//input[@id='TextField1']");
    this.addressInput = page.locator("//input[@id='shipping-address1']");
    this.phoneInput = page.locator("//input[@id='TextField5']");
    this.completeOrderBtn = page.locator("//button[@id='checkout-pay-button']");
    this.addressOption = page.locator("#shipping-address1-options >> text=123 Main Street"); // dynamic example
  }

  // Methods
  async fillEmail(email: string) {
    await this.enterTextToElement(this.emailInput, email);
  }

  async enterLastName(lastName: string) {
      await this.lastNameInput.scrollIntoViewIfNeeded();
    await this.enterTextToElement(this.lastNameInput, lastName);
  }

  async fillAddress(address: string) {
    await this.enterTextToElement(this.addressInput, address);

    // wait and selct from dropdown list
    await this.addressOption.waitFor({ state: 'visible', timeout: 5000 });
    await this.addressOption.click();
  }

  async enterPhone(phone: string) {
    await this.enterTextToElement(this.phoneInput, phone);
  }

  async completeOrder() {
    await this.completeOrderBtn.waitFor({ state: 'visible', timeout: 5000 });
    await this.clickOnElement(this.completeOrderBtn);
  }
}


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
