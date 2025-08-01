import { test as base } from '@playwright/test';
import LoginPage from "../pages/loginPage";
import InventoryPage from "../pages/inventoryPage";
import CartPage from "../pages/cartPage";
import CheckoutPage from "../pages/checkoutPage";
import CheckoutCompletePage from "../pages/checkoutCompletePage";
import CheckoutOverviewPage from '../pages/checkoutOverviewPage';

type MyFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutCompletePage: CheckoutCompletePage;
  checkoutOverviewPage: CheckoutOverviewPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },
  checkoutOverviewPage: async ({ page }, use) => {
    await use(new CheckoutOverviewPage(page));
  },
  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});

export { expect } from "@playwright/test";
