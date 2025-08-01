import { expect, Locator, Page, test } from "@playwright/test";

export class BasePage {
  protected readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOnButtonByName(
    buttonName: string,
    stepMsg = `Click button ${buttonName}`
  ) {
    await test.step(stepMsg, async () => {
      await this.page.getByRole("button", { name: buttonName }).click();
    });
  }

  async fill(
    fieldName: string,
    text: string,
    stepMsg = `Fill input ${fieldName}`
  ) {
    await test.step(`${stepMsg}: "${text}"`, async () => {
      await this.page.getByRole(`textbox`, { name: fieldName }).fill(text);
    });
  }

  async expectText(locator: Locator, expectedText: string, label = "") {
    await test.step(`Expect ${label || "element"} to contain "${expectedText}"`, async () => {
      await expect(locator).toContainText(expectedText);
    });
  }

  async expectVisible(locator: Locator, label = "element") {
    await test.step(`Expect ${label} to be visible`, async () => {
      await expect(locator).toBeVisible();
    });
  }
}
