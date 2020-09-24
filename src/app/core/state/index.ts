import { coreSidenavReducer } from 'src/app/core/state/reducers/sidenav.reducer';
import { ICoreState } from 'src/app/shared/state/core/core.state';
import * as fromRoot from 'src/app/state/app.state';

export interface State extends fromRoot.State {
    core: ICoreState;
}

export const CoreEffects = [
    
];

export const CoreReducers = {
    sidenav: coreSidenavReducer
};