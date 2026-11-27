import { test as base, expect, mergeTests } from '@playwright/test';
import { LoginPage } from '../PageObjects/LoginPage';
import { DashboardPage } from '../PageObjects/DashboardPage';
import { NavigationPanel } from '../PageObjects/Components/NavigationPanel';
import { PasswordResetPage } from '../PageObjects/PasswordResetPage';
import { PIMPage } from '../PageObjects/PIMPage';
import { PersonalDetailsPage } from '../PageObjects/PersonalDetailsPage';
import { AddEmployeePage } from '../PageObjects/AddEmployeePage';
import { TopbarHeader } from '../PageObjects/Components/TopbarHeader';

export const test = base.extend<{
    loginPage: LoginPage;
    dashboardPage: DashboardPage,
    navigationPanel: NavigationPanel
    passwordResetPage: PasswordResetPage,
    pimPage: PIMPage,
    personalDetailsPage: PersonalDetailsPage,
    addEmployeePage: AddEmployeePage,
    topbarHeader: TopbarHeader;
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
    pimPage: async ({ page }, use) => {
        await use(new PIMPage(page));
    },
    personalDetailsPage: async ({ page }, use) => {
        await use(new PersonalDetailsPage(page));
    },
    addEmployeePage: async ({ page }, use) => {
        await use(new AddEmployeePage(page));
    },
    topbarHeader: async ({ page }, use) => {
        await use(new TopbarHeader(page));
    },
});

export { expect };