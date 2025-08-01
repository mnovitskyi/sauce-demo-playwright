import { standardUser } from "../data/userData";
import { test } from "../fixtures/baseFixture";
import { generateUserData } from "../utils/generateUserData";

const userData = generateUserData(standardUser);

test("Complete checkout process", async ({
  loginPage,
  inventoryPage,
  cartPage,
  checkoutPage,
  checkoutOverviewPage,
  checkoutCompletePage,
}) => {
  await test.step("Login and add product to cart", async () => {
    await loginPage.navigateTo();
    await loginPage.login(userData.credentials);
    await inventoryPage.addProductToCartByName("Sauce Labs Backpack");
    await inventoryPage.goToCart();
  });

  await test.step("Proceed to checkout and fill information", async () => {
    await cartPage.proceedToCheckout();
    await checkoutPage.fillCheckoutInformation(
      userData.firstName,
      userData.lastName,
      userData.zipCode
    );
    await checkoutPage.continueCheckout();
  });

  await test.step("Verify checkout overview and finish order", async () => {
    await checkoutOverviewPage.expectSummaryInfoVisible();
    await checkoutOverviewPage.expectFinishButtonVisible();
    await checkoutOverviewPage.clickFinish();
  });

  await test.step("Verify order completion and return home", async () => {
    await checkoutCompletePage.expectCompleteHeaderVisible();
    await checkoutCompletePage.expectCompleteHeaderTextContains(
      "Thank you for your order!"
    );
    await checkoutCompletePage.backToHome();
  });
});
