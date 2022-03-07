// store actions

export class Login {

  static readonly type = '[Auth] Login';
  constructor() {
  }

}

export class AppSwitchNightMode {

  static readonly type = '[App] SwitchNightMode';

  constructor(public activate: boolean) {
  }

}
