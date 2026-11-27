import { expect, Page, Locator } from '@playwright/test';
import { User } from '../utils/types';
import { NewEmployee } from '../utils/types';
import { time } from 'node:console';

export class AddEmployeePage {
    constructor(private page: Page) { }

    //#region
    //Locators 
    addEmployeeHeading(): Locator {
        return this.page.getByRole('heading', { name: ' Add Employee' });
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

    employeeIdField(): Locator {
        return this.page.getByRole('textbox').nth(4);
    }

    cancelBtn(): Locator {
        return this.page.getByRole('button', { name: 'Cancel' });
    }

    saveBtn(): Locator {
        return this.page.getByRole('button', { name: 'Save' });
    }

    loginDetailsSwitch(): Locator {
        return this.page.locator('.oxd-switch-input');
    }

    usernameField(): Locator {
        return this.page.getByRole('textbox').nth(5);
    }

    passwordField(): Locator {
        return this.page.getByRole('textbox').nth(6);
    }

    confirmPasswordField(): Locator {
        return this.page.getByRole('textbox').nth(7);
    }

    //#endregion

    //#region functions
    //Functions
    async verifyPageDisplayed() {
        await expect(this.addEmployeeHeading()).toBeVisible();
        await expect(this.firstNameField()).toBeVisible();
    }

    async createNewUser(user: NewEmployee) {
        await this.loginDetailsSwitch().click();

        if (user.firstName) {
            await this.firstNameField().click();
            await this.firstNameField().fill(user.firstName);
        }

        if (user.middleName) {
            await this.middleNameField().click();
            await this.middleNameField().fill(user.middleName);
        }

        if (user.lastName) {
            await this.lastNameField().click();
            await this.lastNameField().fill(user.lastName);
        }

        if (user.employeeID) {
            await this.employeeIdField().click();
            await this.employeeIdField().fill(user.employeeID);
        }

        let timestamp = Date.now();
        let uniqueUsername
        if (user.username) {
            uniqueUsername = user.username + timestamp;
            await this.usernameField().click();
            await this.usernameField().fill(uniqueUsername);
        }

        if (user.password) {
            //await this.passwordField().click();
            await this.passwordField().fill(user.password);
        }

        if (user.confirmPassword) {
            //await this.confirmPasswordField().click();
            await this.confirmPasswordField().fill(user.confirmPassword);
        }

        await this.saveBtn().click();

        return uniqueUsername;
    }

    //#endregion

}