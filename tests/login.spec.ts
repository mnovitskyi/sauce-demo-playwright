import { standardUser, wrongUser } from "../data/userData";
import { test } from "../fixtures/baseFixture";

test.describe("Login tests", () => {
  test("Login with valid credentials", async ({ loginPage, inventoryPage }) => {
    await loginPage.navigateTo();
    await loginPage.login(standardUser);
    await inventoryPage.expectInventoryVisible();
  });

  test("Login fails with invalid credentials", async ({ loginPage }) => {
    await loginPage.navigateTo();
    await loginPage.login(wrongUser);
    await loginPage.expectErrorMessageContains(
      "Username and password do not match"
    );
  });
});
