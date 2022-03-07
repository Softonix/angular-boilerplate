import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../../store/app.state';
import { Observable } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { AppSwitchNightMode } from '../../store/app.actions';
import { ROOT_ROUTES } from '../../shared/models/constants';

@Component({
  selector: 'so-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  @Select(AppState.nightMode)
  public nightModeActive!: Observable<boolean>;


  constructor(private store: Store) { }

  // in some rare single cases you can define type as here
  get rootRoutes(): { home: string; login: string } {
    return ROOT_ROUTES;
  }

  // dispatch() method return cold stream and no need to subscribe it
  switchNightMOde(event: MatSlideToggleChange): void {
    this.store.dispatch(new AppSwitchNightMode(event.checked));
  }

}
