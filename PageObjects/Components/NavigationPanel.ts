import { expect, Page, Locator } from '@playwright/test';
import { User } from '../../utils/types';

export class NavigationPanel {
    constructor(private page: Page) { }

    //#region
    //Locators 
    navigationPanel(): Locator {
        return this.page.locator('.oxd-navbar-nav');
    }

    brandBanner(): Locator {
        return this.page.getByRole('link', { name: 'client brand banner' });
    }

    pimLink(): Locator {
        return this.page.getByRole('link', { name: 'PIM' });
    }

    adminLink(): Locator {
        return this.page.getByRole('link', { name: 'Admin' })
    }

    //#endregion

    //#region functions


    //#endregion

}