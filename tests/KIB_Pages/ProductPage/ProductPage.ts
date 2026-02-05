// import basePage from "../basePage";

// export default class ProductPage extends basePage {

//   // ===== Product Card =====
//   private readonly testProductCard = this.page.locator(
//     "[data-product-id='8571523137735']"
//   );

//   // Hover Add Button
//   private readonly hoverAddBtn = this.page.locator(
//     "[data-product-id='8571523137735'] span.is-visually-hidden-mobile"
//   );

//   // Buy Now button (PDP)
//   private readonly buyNowBtn = this.page.locator(
//     "//button[normalize-space()='Buy it now']"
//   );

//   // ===== Actions =====

//   // Flow 1: Click product → PDP
//   async openProductDetails() {
//     await this.testProductCard.waitFor({ state: "visible", timeout: 10000 });
//     await this.testProductCard.click();
//   }

//   // Flow 2: Hover → Add to cart
//   async addProductToCartByHover() {
//     await this.testProductCard.waitFor({ state: "visible", timeout: 10000 });
//     await this.testProductCard.hover();
//     await this.hoverAddBtn.waitFor({ state: "visible", timeout: 5000 });
//     await this.hoverAddBtn.click();
//   }

//   // PDP action
//   async clickBuyNow() {
//     await this.buyNowBtn.waitFor({ state: "visible", timeout: 10000 });
//     await this.buyNowBtn.click();
//   }
// }

/////////////////////////////////////////////
import basePage from "../basePage";
export default class ProductPage extends basePage {
    // Product element
    private readonly AddTestProductToCart = this.page.locator(
        "//div[@data-testid='resource-list-grid']/div[2]//div[@data-product-id='8571523137735']"
    );
 // Buy Now button
    private readonly BuyNowBT = this.page.locator(
        "//button[normalize-space(text())='Buy it now']"
    );

async ClickOnTestProduct() {
    await this.AddTestProductToCart.waitFor({ state: 'visible', timeout: 10000 });
    await this.AddTestProductToCart.click();
}

async ClickOnBuyNow() {
   // Wait for the product detail page to load by checking the Buy Now button
    await this.BuyNowBT.waitFor({ state: 'visible', timeout: 10000 });
    await this.BuyNowBT.click();
}
}
//////////////////////////////////////////////////////////////////

   
// async ClickOnBuyNow() {
//     await this.BuyNowBT.waitFor({ state: 'visible', timeout: 5000 });
//     await this.clickOnElement(this.BuyNowBT);
// }


