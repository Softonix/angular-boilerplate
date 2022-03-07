import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'so-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  animations: [
    trigger('rotate', [
      state('false', style({ transform: 'rotate(-180deg)' })),
      state('true', style({ transform: 'rotate(0)' })),
      transition('true=>false', animate('150ms ease-out')),
      transition('false => true', animate('150ms ease-in'))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {

  @Input()
  public year: string = new Date().getFullYear().toString();

  constructor() { }

}
