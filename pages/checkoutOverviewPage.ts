import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export default class CheckoutOverviewPage extends BasePage {
  private readonly summaryInfo: Locator;
  private readonly finishButton: Locator;

  constructor(page: Page) {
    super(page);
    this.summaryInfo = page.locator(".summary_info");
    this.finishButton = page.getByRole("button", { name: "Finish" });
  }

  async clickFinish(): Promise<void> {
    await this.clickOnButtonByName("Finish");
  }

  async expectSummaryInfoVisible(): Promise<void> {
    await this.expectVisible(this.summaryInfo, "summary info section");
  }

  async expectFinishButtonVisible(): Promise<void> {
    await this.expectVisible(this.finishButton, '"Finish" button');
  }
}
