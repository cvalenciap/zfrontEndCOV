import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MainService} from '../services';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit, OnDestroy {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private mainService: MainService, private route: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    if (localStorage.getItem(environment.initialToken)) {
      route.navigate(['']);
    } else {
      this.mainService.verifyToken();
    }
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
