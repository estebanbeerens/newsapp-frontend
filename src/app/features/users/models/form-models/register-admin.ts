import { IRegister, IRegisterInitialValue } from 'src/app/auth/models/form-models/register';

export interface IRegisterAdmin extends IRegister {
    roleID: number
}

export const IRegisterAdminInitialValue: IRegisterAdmin = {
    ...IRegisterInitialValue,
    roleID: 0
}
