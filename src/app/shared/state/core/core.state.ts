import { ICoreSidenavState, ICoreSidenavStateInitialValue } from 'src/app/shared/state/core/core-sidenav.state';

export interface ICoreState {
    sidenav: ICoreSidenavState;
}

export const ICoreStateInitialValue: ICoreState = {
    sidenav: ICoreSidenavStateInitialValue
}
