import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faMobileScreen, faPhone, faVenus, faMars } from '@fortawesome/free-solid-svg-icons';

import { UserModel } from '../models/user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent {
  @HostBinding('class.scale')
  isHover = false;
  @Input()
  public user!: UserModel;
  public icons: { [iconName: string]: IconDefinition } = {
    faEnvelope, faMobileScreen, faPhone, faVenus, faMars
  }

  @HostListener('mouseenter') addClass(): void {
    this.isHover = true;
  }
  @HostListener('mouseleave') removeClass(): void {
    this.isHover = false;
  }
}
