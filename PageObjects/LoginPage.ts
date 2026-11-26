import { expect, Page, Locator } from '@playwright/test';
import { User } from '../utils/types';

export class LoginPage {
    constructor(private page: Page) { }

    //#region
    //Locators 
    orangeBranding(): Locator {
        return this.page.locator('.orangehrm-login-branding');
    }

    loginHeading(): Locator {
        return this.page.getByRole('heading', { name: 'Login' });
    }

    loginForm(): Locator {
        return this.page.locator('.orangehrm-login-form');
    }

    usernameField(): Locator {
        return this.page.getByRole('textbox', { name: 'Username' });
    }

    passwordField(): Locator {
        return this.page.getByRole('textbox', { name: 'Password' });
    }

    loginBtn(): Locator {
        return this.page.getByRole('button', { name: 'Login' });
    }

    forgotYourPasswordLink(): Locator {
        return this.page.getByText('Forgot your password? ');
    }

    requiredValidationMessage(): Locator {
        return this.page.locator('.oxd-input-field-error-message').getByText('Required');
    }

    errorAlert(): Locator {
        return this.page.locator('.oxd-alert--error').getByText('Invalid credentials');
    }
    //#endregion

    //#region functions
    async verifLoginPageDisplayed() {
        await expect(this.orangeBranding()).toBeVisible();
        await expect(this.loginForm()).toBeVisible();
    }

    async login(user: User) {
        await this.usernameField().click();
        await this.usernameField().fill(user.username);

        await this.passwordField().click();
        await this.passwordField().fill(user.password);

        await this.loginBtn().click();
    }


    //#endregion

}