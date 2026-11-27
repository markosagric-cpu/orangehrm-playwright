import { expect } from '@playwright/test';
import { test } from '../../utils/pageFixtures';
import loginCredentials from '../../testData/loginCredentials.json';
import newUserData from '../../testData/newUser.json';

test('Login with new user', async ({ page, loginPage, dashboardPage, navigationPanel, pimPage, addEmployeePage, personalDetailsPage, topbarHeader }) => {
    await test.step('Go to the URL and verify the login page is displayed', async () => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginPage.verifLoginPageDisplayed();
    });

    await test.step('Login with valid credentials and verify the user is redirected to the dashboard', async () => {
        await loginPage.login(loginCredentials.validCredentials);
        await dashboardPage.verifyDashboardDisplayed();
    });

    await test.step('Click the PIM link and verify the page is displayed', async () => {
        await navigationPanel.pimLink().click();
        await pimPage.verifyPimDisplayed();
    });

    await test.step('Click the "Add" button and verify the "Add employee" page is displayed', async () => {
        await pimPage.addBtn().click();
        await addEmployeePage.verifyPageDisplayed();
    });

    let username;
    await test.step('Create a new user with valid details', async () => {
        username = await addEmployeePage.createNewUser(newUserData.newValidUser);
    });

    await test.step('Verify the "Personal details" page is displayed and verify the details', async () => {
        await personalDetailsPage.verifyPageDisplayed();
        await personalDetailsPage.verifyDetails(newUserData.newValidUser);
    });

    await test.step('Logout, login with the newly created user and verify the dashboard page is displayed', async () => {
        await topbarHeader.logout();
        await loginPage.login({ username: username!, password: newUserData.newValidUser.password, });
        await dashboardPage.verifyDashboardDisplayed();
    });
});

