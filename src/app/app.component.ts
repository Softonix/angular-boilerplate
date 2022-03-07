import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { AppState } from './store/app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'so-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  @Select(AppState.nightMode)
  public nightModeActive!: Observable<boolean>;

  title = 'my-app';
  t = 'as';

}
