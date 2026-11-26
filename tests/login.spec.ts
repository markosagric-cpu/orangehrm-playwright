import { expect } from '@playwright/test';
import { test } from '../utils/pageFixtures';
import loginCredentials from '../testData/loginCredentials.json';

test.beforeEach(async ({ page, loginPage }) => {
    await test.step('Go to the URL and verify the login page is displayed', async () => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await loginPage.verifLoginPageDisplayed();
    });
});

test('LOGIN_01 - Verify successful login with valid credentials', async ({ loginPage, dashboardPage }) => {
    await test.step('Login with valid credentials and verify the user is redirected to the dashboard', async () => {
        await loginPage.login(loginCredentials.validCredentials);
        await dashboardPage.verifyDashboardDisplayed();
    });
});

test('LOGIN_03 - Verify "Forgot your password" link redirection', async ({ loginPage, passwordResetPage }) => {
    await test.step('Click the "Forgot your password" link and verify the user is redirected to the "Reset password" page', async () => {
        await loginPage.forgotYourPasswordLink().click();
        await passwordResetPage.verifyResetPasswordDisplayed();
    });
});

test('LOGIN_04 - Verify login with both fields empty', async ({ loginPage }) => {
    await test.step('Login with both fields empty', async () => {
        await loginPage.login(loginCredentials.emptyCredentials);
    });

    await test.step('Verify both fields are highlighted in red', async () => {
        await expect(loginPage.usernameField()).toContainClass('oxd-input--error');
        await expect(loginPage.passwordField()).toContainClass('oxd-input--error');
    });

    await test.step('Verify 2 validation messages are displayed', async () => {
        await expect(loginPage.requiredValidationMessage()).toHaveCount(2);
    });
});

test('LOGIN_05 - Verify login with empty username', async ({ loginPage }) => {
    await test.step('Login with empty username field', async () => {
        await loginPage.login(loginCredentials.emptyUsername);
    });

    await test.step('Verify the username field is highlighted and the validation message is displayed', async () => {
        await expect(loginPage.usernameField()).toContainClass('oxd-input--error');
        await expect(loginPage.requiredValidationMessage()).toBeVisible();
    });
});

test('LOGIN_06 - Verify login with empty password', async ({ loginPage }) => {
    await test.step('Login with empty password field', async () => {
        await loginPage.login(loginCredentials.emptyPassword);
    });

    await test.step('Verify the password field is highlighted in red and the validation message is displayed', async () => {
        await expect(loginPage.passwordField()).toContainClass('oxd-input--error');
        await expect(loginPage.requiredValidationMessage()).toBeVisible();
    });
});

test('LOGIN_07 - Verify login with invalid username', async ({ loginPage }) => {
    await test.step('Login with invalid username', async () => {
        await loginPage.login(loginCredentials.invalidUsername);
    });

    await test.step('Verify the error alert is displayed', async () => {
        await expect(loginPage.errorAlert()).toBeVisible();
    });
});

test('LOGIN_08 - Verify login with invalid password', async ({ loginPage }) => {
    await test.step('Login with invalid password', async () => {
        await loginPage.login(loginCredentials.invalidPassword);
    });

    await test.step('Verify the error alert is displayed', async () => {
        await expect(loginPage.errorAlert()).toBeVisible();
    });
});

test('LOGIN_09 - Verify login with invalid username and password', async ({ loginPage }) => {
    await test.step('Login with invalid credentials', async () => {
        await loginPage.login(loginCredentials.invalidCredentials);
    });

    await test.step('Verify the error alert is displayed', async () => {
        await expect(loginPage.errorAlert()).toBeVisible();
    });
});

test('LOGIN_10 - Verify login with leading whitespace character in the username', async ({ loginPage }) => {
    await test.step('Login with leading whitespace in the username', async () => {
        await loginPage.login(loginCredentials.usernameLeadingWhitespace);
    });

    await test.step('Verify the error alert is displayed', async () => {
        await expect(loginPage.errorAlert()).toBeVisible();
    });
});

test('LOGIN_11 - Verify login with trailing whitespace character in the username', async ({ loginPage, dashboardPage }) => {
    await test.step('Login with trailing whitespace in the username', async () => {
        await loginPage.login(loginCredentials.usernameTrailingWhitespace);
    });

    await test.step('Verify the user is redirected to the dashboard', async () => {
        await dashboardPage.verifyDashboardDisplayed();
    });
});

test('LOGIN_12 - Verify login with leading whitespace character in the password', async ({ loginPage, dashboardPage }) => {
    await test.step('Login with leading whitespace in the password', async () => {
        await loginPage.login(loginCredentials.passwordLeadingWhitespace);
    });

    await test.step('Verify the error alert is displayed', async () => {
        await expect(loginPage.errorAlert()).toBeVisible();
    });
});

test('LOGIN_13 - Verify login with trailing whitespace character in the password', async ({ loginPage, dashboardPage }) => {
    await test.step('Login with trailing whitespace in the password', async () => {
        await loginPage.login(loginCredentials.passwordTrailingWhitespace);
    });

    await test.step('Verify the error alert is displayed', async () => {
        await expect(loginPage.errorAlert()).toBeVisible();
    });
});