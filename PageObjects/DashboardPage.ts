import { expect, Page, Locator } from '@playwright/test';
import { User } from '../utils/types';

export class DashboardPage {
    constructor(private page: Page) { }

    //#region
    //Locators 
    dashboardGrid(): Locator {
        return this.page.locator('.orangehrm-dashboard-grid');
    }

    dashboardHeading(): Locator {
        return this.page.getByRole('heading', { name: 'Dashboard' });
    }

    //#endregion

    //#region functions
    async verifyDashboardDisplayed(){
        await expect(this.dashboardGrid()).toBeVisible();
        await expect(this.dashboardHeading()).toBeVisible();
    }

    //#endregion

}