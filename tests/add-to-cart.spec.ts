import { standardUser } from "../data/userData";
import { test } from "../fixtures/baseFixture";

test("Add product to cart", async ({ loginPage, inventoryPage }) => {
  await test.step("Login to the application", async () => {
    await loginPage.navigateTo();
    await loginPage.login(standardUser);
  });

  await test.step("Add product to cart and verify cart count", async () => {
    await inventoryPage.addProductToCartByName("Sauce Labs Backpack");
    await inventoryPage.expectCartItemCount(1);
  });
});
