import * as CoreActions from 'src/app/core/state/actions';
import { createReducer, on } from '@ngrx/store';
import { ICoreSidenavState, ICoreSidenavStateInitialValue } from 'src/app/shared/state/core/core-sidenav.state';

export const coreSidenavReducer = createReducer<ICoreSidenavState>(
    ICoreSidenavStateInitialValue,
  
    on(CoreActions.sidenav.toggle.execute, (state): ICoreSidenavState => {
        return {
          ...state,
          toggled: !state.toggled,
        };
      }
    ),
)