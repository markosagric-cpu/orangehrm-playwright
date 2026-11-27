export type User = {
    username: string,
    password: string;
}

export type NewEmployee = {
    firstName: string;
    middleName?: string;
    lastName: string;
    employeeID?: string;
    username?: string;
    password?: string;
    confirmPassword: string;
    profilePicture: boolean;
}