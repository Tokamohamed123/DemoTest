import basePage from "../basePage";

export default class CartPage extends basePage {

  private readonly cartIcon = this.page.locator('[data-testid="cart-icon"]');
  private readonly checkoutBtn = this.page.locator('#checkout');

  async openCartPopup() {
    await this.cartIcon.waitFor({ state: "visible", timeout: 5000 });
    await this.cartIcon.click();
  }

  async clickCheckout() {
    await this.checkoutBtn.waitFor({ state: "visible", timeout: 5000 });
    await this.checkoutBtn.click();
  }
}
