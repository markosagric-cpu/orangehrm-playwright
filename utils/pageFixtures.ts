import { test as base, expect, mergeTests } from '@playwright/test';
import { LoginPage } from '../PageObjects/loginPage';
import { DashboardPage } from '../PageObjects/DashboardPage';
import { NavigationPanel } from '../PageObjects/Components/NavigationPanel';
import { PasswordResetPage } from '../PageObjects/PasswordResetPage';

export const test = base.extend<{
    loginPage: LoginPage;
    dashboardPage: DashboardPage,
    navigationPanel: NavigationPanel
    passwordResetPage: PasswordResetPage
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    navigationPanel: async ({ page }, use) => {
        await use(new NavigationPanel(page));
    },
    passwordResetPage: async ({ page }, use) => {
        await use(new PasswordResetPage(page));
    },
});

export { expect };