import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Configuration, ExpandedLTR, ExpandedRTL, MultilevelMenuService, MultilevelNodes, SlideInOut } from 'ng-material-multilevel-menu';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [SlideInOut, ExpandedRTL, ExpandedLTR]

})
export class AdminComponent {
  panelOpenState = false;


  appItems = [

    {
      label: 'Page',
      items: [
        {
          label: 'Page 1',
          // icon: 'favorite',
          link: '/admin/page1'
        },
        {
          label: 'Page 2',
          // icon: 'favorite_border',
          link: '/admin/page2'
        },
      ],
    },
    // {
    //   id:'page2',
    //   label: 'Page',
    //   // icon: 'alarm',
    //   items: [
    //     {
    //       id:'page2-1',
    //       label: 'Page 1',
    //       // icon: 'favorite',
    //       link:'/admin/page1'
    //     },
    //     {
    //       id:'page2-2',
    //       label: 'Page 2',
    //       // icon: 'favorite_border',
    //       link:'/admin/page2'
    //     },
    //   ],
    // }
  ];

  config = {
    paddingAtStart: true,
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

  constructor(private router: Router, private breakpointObserver: BreakpointObserver) {
    var url = router.url;
    console.log('url: ' + url);
    // var node =  multilevelMenuService.getMatchedObjectByUrl(this.appItems, url);
    // multilevelMenuService.selectMenuByID(node.id!);
    // multilevelMenuService.setMenuExapandCollpaseStatus()
  }

  logout() {
    this.router.navigate(['/login'])

  }

}
