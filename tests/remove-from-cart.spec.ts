import { standardUser } from "../data/userData";
import { test } from "../fixtures/baseFixture";

test("Remove product from cart", async ({
  loginPage,
  inventoryPage,
  cartPage,
}) => {
  await test.step("Login and add product to cart", async () => {
    await loginPage.navigateTo();
    await loginPage.login(standardUser);
    await inventoryPage.addProductToCartByName("Sauce Labs Backpack");
    await inventoryPage.goToCart();
  });

  await test.step("Verify product in cart and remove it", async () => {
    await cartPage.expectCartItemsCount(1);
    await cartPage.removeProductByName("Sauce Labs Backpack");
    await cartPage.expectCartItemsCount(0);
  });
});
