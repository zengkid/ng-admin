import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-admin';

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute
 ) { 
    this.router.navigate(['/admin']);
    // this.router.navigate()
  }
}
