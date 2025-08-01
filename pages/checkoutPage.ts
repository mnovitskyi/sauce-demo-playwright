import { Page, test } from "@playwright/test";
import { BasePage } from "./basePage";

export default class CheckoutPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async fillCheckoutInformation(
    firstName: string,
    lastName: string,
    postalCode: string
  ) {
    await test.step("Fill out checkout information form", async () => {
      await this.fill("First Name", firstName);
      await this.fill("Last Name", lastName);
      await this.fill("Zip/Postal Code", postalCode);
    });
  }

  async continueCheckout() {
    await this.clickOnButtonByName("Continue");
  }
}
