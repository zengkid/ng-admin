import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbIconLibraries } from '@nebular/theme';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-admin';

  constructor(
    private iconLibraries: NbIconLibraries,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.iconLibraries.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('fas', { packClass: 'fa-solid', iconClassPrefix: 'fa' });
    this.iconLibraries.registerFontPack('far', { packClass: 'fa-regular', iconClassPrefix: 'fa' });
    // this.iconLibraries.registerFontPack('fal', { packClass: 'fa-light', iconClassPrefix: 'fa' });
    // this.iconLibraries.registerFontPack('fat', { packClass: 'fa-thin', iconClassPrefix: 'fa' });
    // this.iconLibraries.registerFontPack('fad', { packClass: 'fa-duotone', iconClassPrefix: 'fa' });
    // this.iconLibraries.setDefaultPack('fa');// <---- set as default
  }
}
