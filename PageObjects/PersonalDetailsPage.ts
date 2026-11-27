import { expect, Page, Locator } from '@playwright/test';
import { User } from '../utils/types';
import { NewEmployee } from '../utils/types';

export class PersonalDetailsPage {
    constructor(private page: Page) { }

    //#region
    //Locators 
    editEmployeeContainer(): Locator {
        return this.page.locator('.orangehrm-edit-employee');
    }

    employeeName(): Locator {
        return this.page.locator('.orangehrm-edit-employee-name').getByRole('heading');
    }

    personalDetailsHeading(): Locator {
        return this.page.getByRole('heading', { name: 'Personal Details' });
    }

    firstNameField(): Locator {
        return this.page.getByRole('textbox', { name: 'First Name' });
    }

    middleNameField(): Locator {
        return this.page.getByRole('textbox', { name: 'Middle Name' });
    }

    lastNameField(): Locator {
        return this.page.getByRole('textbox', { name: 'Last Name' });
    }


    //#endregion

    //#region functions
    //Functions
    async verifyPageDisplayed() {
        await expect(this.editEmployeeContainer()).toBeVisible();
        await expect(this.firstNameField()).toBeVisible();
    }

    async verifyDetails(userDetails: NewEmployee) {
        let fullName = userDetails.firstName + ' ' + userDetails.lastName;
        await expect(this.employeeName()).toContainText(fullName);
    }

    //#endregion

}