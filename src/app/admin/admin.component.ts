import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Configuration, ExpandedLTR, ExpandedRTL, MultilevelNodes, SlideInOut } from 'ng-material-multilevel-menu';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [SlideInOut, ExpandedRTL, ExpandedLTR]

})
export class AdminComponent {
  panelOpenState = false;


  appItems  = [
   
    {
      label: 'Page',
      // icon: 'alarm',
      items: [
        {
          label: 'Page 1',
          // icon: 'favorite',
          link:'/admin/page1'
        },
        {
          label: 'Page 2',
          // icon: 'favorite_border',
          link:'/admin/page2'
        },
      ],
    },
    {
      label: 'Page',
      // icon: 'alarm',
      items: [
        {
          label: 'Page 1',
          // icon: 'favorite',
          link:'/admin/page1'
        },
        {
          label: 'Page 2',
          // icon: 'favorite_border',
          link:'/admin/page2'
        },
      ],
    }
  ];

  config = {
    // paddingAtStart: true,
    interfaceWithRoute: true,
    collapseOnSelect: true,
    highlightOnSelect: true,
  };
  // getClass(item: any) {
  //   return {
  //     [item.faIcon]: true
  //   }
  // }

  selectedItem($event: any) {
    console.log($event);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) { }

  logout() {
    this.router.navigate(['/login'])

  }

}
