import { IRole, IRoleInitialValue } from 'src/app/features/roles/models/entities/role';

export interface IUser {
    userID: number,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
    token: string,
    roleID: number,
    role: IRole
}

export const IUserInitialValue: IUser = {
    userID: 0,
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    token: '',
    roleID: 0,
    role: IRoleInitialValue
};
