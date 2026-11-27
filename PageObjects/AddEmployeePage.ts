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
            const maxLength = 10;
            const timestamp = Date.now().toString();
            const suffixLength = Math.max(0, maxLength - user.employeeID.length);
            const suffix = suffixLength > 0 ? timestamp.slice(-suffixLength) : '';
            const uniqueEmployeeId = (user.employeeID + suffix).slice(0, maxLength);

            await this.employeeIdField().click();
            await this.employeeIdField().fill(uniqueEmployeeId);
        }

        let timestamp2 = Date.now();
        let uniqueUsername;
        if (user.username) {
            uniqueUsername = user.username + timestamp2;
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