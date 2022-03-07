import { AppStateModel } from '../shared/models/app-state.model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { AuthStateModel } from '../shared/models/auth-state.model';
import { AppSwitchNightMode, Login } from './app.actions';
import { AuthService } from '../shared/services/auth/auth.service';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

const DEFAULT_APP_STATE: AppStateModel = {
  authToken: {
    token: null
  },
  nightMode: false,
  data: ['some data']
};

@State<AppStateModel>({
  name: 'app',
  defaults: DEFAULT_APP_STATE
})
@Injectable()
export class AppState {

  constructor(private authService: AuthService) {
  }

  @Selector()
  static token(state: AuthStateModel): string | null {
    return state.token;
  }

  @Selector()
  static nightMode(state: AppStateModel): boolean {
    return state.nightMode;
  }

  @Action(Login)
  login(ctx: StateContext<AuthStateModel>) {
    return this.authService.login().pipe(
      tap((result: {token: string}) => {
        ctx.patchState({
          token: result.token
        });
      })
    );
  }

  @Action(AppSwitchNightMode)
  switchNightMode(ctx: StateContext<AppStateModel>, { activate }: AppSwitchNightMode): void {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      nightMode: activate
    });
  }

}


