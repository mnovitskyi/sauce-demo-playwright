import { Locator, Page, test } from "@playwright/test";
import { BasePage } from "./basePage";

export default class CheckoutCompletePage extends BasePage {
  private readonly completeHeader: Locator;

  constructor(page: Page) {
    super(page);
    this.completeHeader = page.locator(".complete-header");
  }

  async isCompleteHeaderVisible(): Promise<boolean> {
    return await test.step("Check if complete header is visible", async () => {
      return this.completeHeader.isVisible();
    });
  }

  async getCompleteHeaderText(): Promise<string | null> {
    return await test.step("Get complete header text", async () => {
      return this.completeHeader.textContent();
    });
  }

  async expectCompleteHeaderVisible() {
    await this.expectVisible(this.completeHeader, "complete header");
  }

  async expectCompleteHeaderTextContains(expectedText: string) {
    await test.step(`Expect complete header text to contain "${expectedText}"`, async () => {
      await this.expectText(
        this.completeHeader,
        expectedText,
        "complete header"
      );
    });
  }

  async backToHome() {
    await this.clickOnButtonByName("Back Home");
  }
}
