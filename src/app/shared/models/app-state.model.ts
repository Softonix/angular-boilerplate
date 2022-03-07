import { AuthStateModel } from './auth-state.model';

export interface AppStateModel {
  authToken: AuthStateModel;
  nightMode: boolean;
  data: string[];
}
