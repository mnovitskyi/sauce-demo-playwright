import { Locator, Page, expect, test } from "@playwright/test";
import { BasePage } from "./basePage";

export default class InventoryPage extends BasePage {
  private readonly inventoryContainer: Locator;
  private readonly cartBadge: Locator;
  private readonly cartLink: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryContainer = page.locator(".inventory_list");
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartLink = page.locator(".shopping_cart_link");
  }

  async isInventoryVisible(): Promise<boolean> {
    return await test.step("Check if inventory list is visible", async () => {
      return this.inventoryContainer.isVisible();
    });
  }

  async expectInventoryVisible() {
    await test.step("Expect inventory list to be visible", async () => {
      await expect(
        this.inventoryContainer,
        "Inventory list should be visible after login"
      ).toBeVisible();
    });
  }

  async expectCartItemCount(expectedCount: number) {
    await test.step(`Expect cart item count to be ${expectedCount}`, async () => {
      if (expectedCount === 0) {
        await expect(
          this.cartBadge,
          "Cart badge should be hidden when no items are added"
        ).toBeHidden();
      } else {
        await expect(
          this.cartBadge,
          "Cart badge should be visible when items are in the cart"
        ).toBeVisible();
        await expect(
          this.cartBadge,
          `Cart badge should show ${expectedCount} item(s)`
        ).toHaveText(expectedCount.toString());
      }
    });
  }

  async addProductToCartByName(productName: string) {
    await test.step(`Add product "${productName}" to cart`, async () => {
      const addToCartButton = this.page.locator(
        `.inventory_item:has-text("${productName}") button`
      );
      await addToCartButton.click();
    });
  }

  async getCartItemCount(): Promise<number> {
    return await test.step("Get current cart item count", async () => {
      if (await this.cartBadge.isVisible()) {
        const countText = await this.cartBadge.textContent();
        return Number(countText);
      }
      return 0;
    });
  }

  async goToCart() {
    await test.step("Navigate to cart", async () => {
      await this.cartLink.click();
    });
  }
}
