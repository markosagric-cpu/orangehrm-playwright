import { expect, Page, Locator } from '@playwright/test';
import { User } from '../utils/types';

export class PIMPage {
    constructor(private page: Page) { }

    //#region
    //Locators 
    pimHeading(): Locator {
        return this.page.getByRole('heading', { name: 'PIM' });
    }

    employeeInformationHeadin(): Locator {
        return this.page.getByRole('heading', { name: 'Employee Information' });
    }

    addBtn(): Locator {
        return this.page.getByRole('button', { name: ' Add' });
    }

    //#endregion

    //#region functions
    //Functions
    async verifyPimDisplayed() {
        await expect(this.pimHeading()).toBeVisible();
        await expect(this.employeeInformationHeadin()).toBeVisible();
    }

    //#endregion

}