import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RouterEvent } from '@angular/router';

import { filter } from 'rxjs/operators';
import { tap } from 'rxjs/operators';

import { EventService } from '../../shared/services';
import { AuthService } from './../services/auth.service';

@Component({
  selector: 'berry-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService,
  ) {
    this.menuItems = [
      { caption: 'Home', link: ['/home'] },
      { caption: 'Configuration', link: '/configure' },
    ];

    this.router.events
      .pipe(filter((e: RouterEvent) => e instanceof NavigationEnd))
      .subscribe((e) => {
        // console.log(e.url); // current url

        // lazy loading and eager loading r result are different
        // below is for lazying loading
        const r = this.route.children.find((ar: ActivatedRoute) => ar.outlet === 'primary');

        const pathLevel1 = r.routeConfig.path;
        // let pathLevel2; // current subRoute path
        let subRouteConfig;

        console.log(r);
        console.log(pathLevel1);
        // here needs to coordinate with lazy loading's routing config, if it has children or not.
        if (r.children.length && r.children[0].routeConfig && r.children[0].routeConfig.children) {
          subRouteConfig = r.children[0].routeConfig.children
            .filter((c) => c.path !== '')
            .map((c) => c.path);

          console.log(subRouteConfig);
          // pathLevel2 = r.children[0].children[0].routeConfig.path;
        }

        this.buildSubNav(pathLevel1, subRouteConfig);
      });
  }

  menuItems: any[];
  subMenuItems;

  buildSubNav(pathLevel1, subRouteConfig) {
    if (subRouteConfig !== undefined) {
      this.subMenuItems = subRouteConfig.map((r: string) => ({
        caption: r,
        link: `${pathLevel1}/${r}`,
      }));
    } else {
      this.subMenuItems = undefined;
    }
  }

  logout() {
    this.authService
      .logout()
      .pipe(
        tap((data) => {
          this.router.navigate(['/login']);
        }),
      )
      .subscribe();
  }

  ngOnInit() {}
}
