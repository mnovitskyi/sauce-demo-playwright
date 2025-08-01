import { Page, expect, test, Locator } from "@playwright/test";
import { UserCredentials } from "../data/userData";
import { BasePage } from "./basePage";

export default class LoginPage extends BasePage {
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.errorMessage = page.locator('h3[data-test="error"]');
  }

  async navigateTo() {
    await test.step("Navigate to login page", async () => {
      await this.page.goto("/");
    });
  }

  async login(userCredentials: UserCredentials) {
    await test.step(`Log in with username: ${userCredentials.username} and password: ${userCredentials.password}`, async () => {
      await this.fill("Username", userCredentials.username);
      await this.fill("Password", userCredentials.password);
      await this.clickOnButtonByName("Login");
    });
  }

  async expectErrorMessageContains(expectedText: string) {
    await test.step(`Verify error message contains: "${expectedText}"`, async () => {
      await expect(
        this.errorMessage,
        `Expected error message to be visible but it was not.`
      ).toBeVisible();
      await expect(
        this.errorMessage,
        `Error message should contain "${expectedText}"`
      ).toContainText(expectedText);
    });
  }
}
