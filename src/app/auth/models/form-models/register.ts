export interface IRegister {
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string
}

export const IRegisterInitialValue: IRegister = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
};
