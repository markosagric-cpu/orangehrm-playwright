import { expect, Page, Locator } from '@playwright/test';
import { User } from '../utils/types';

export class PasswordResetPage {
    constructor(private page: Page) { }

    //#region
    //Locators 
    resetPasswordContainer(): Locator {
        return this.page.locator('.orangehrm-forgot-password-container');
    }

    resetPasswordHeading(): Locator {
        return this.page.getByRole('heading', { name: 'Reset Password' });
    }

    usernameField(): Locator {
        return this.page.getByRole('textbox', { name: 'Username' });
    }

    cancelBtn(): Locator {
        return this.page.getByRole('button', { name: 'Cancel' })
    }

    resetPasswordBtn(): Locator {
        return this.page.getByRole('button', { name: 'Reset Password' });
    }

    //#endregion

    //#region functions
    async verifyResetPasswordDisplayed(){
        await expect(this.resetPasswordContainer()).toBeVisible();
        await expect(this.resetPasswordHeading()).toBeVisible();
    }

    //#endregion

}