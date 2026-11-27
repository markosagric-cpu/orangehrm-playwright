import { expect, Page, Locator } from '@playwright/test';
import { User } from '../../utils/types';

export class TopbarHeader {
    constructor(private page: Page) { }

    //#region
    //Locators 
    userDropdown(): Locator {
        return this.page.locator('.oxd-userdropdown-tab');
    }

    logoutMenuItem(): Locator {
        return this.page.getByRole('menuitem', { name: 'Logout' });
    }

    //#endregion

    //#region functions
    async logout() {
        await this.userDropdown().click();

        await expect(this.logoutMenuItem()).toBeVisible();
        await this.logoutMenuItem().click();
    }

    //#endregion

}