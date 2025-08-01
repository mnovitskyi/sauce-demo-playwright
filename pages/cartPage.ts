import { Locator, Page, test, expect } from "@playwright/test";
import { BasePage } from "./basePage";

export default class CartPage extends BasePage {
  private readonly cartItems: Locator;

  constructor(page: Page) {
    super(page);
    this.cartItems = page.locator(".cart_item");
  }

  async getCartItemsCount(): Promise<number> {
    return await test.step("Get number of items in the cart", async () => {
      return this.cartItems.count();
    });
  }

  async expectCartItemsCount(expectedCount: number) {
    await test.step(`Expect cart to have ${expectedCount} item(s)`, async () => {
      await expect(
        this.cartItems,
        `Expected ${expectedCount} item(s) in cart`
      ).toHaveCount(expectedCount);
    });
  }

  async removeProductByName(productName: string) {
    await test.step(`Remove product "${productName}" from cart`, async () => {
      const removeButton = this.page.locator(
        `.cart_item:has-text("${productName}") button`
      );
      await removeButton.click();
    });
  }

  async proceedToCheckout() {
    await this.clickOnButtonByName("Checkout");
  }
}
