import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../../../services';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-basic-layout',
  templateUrl: './basic-layout.component.html',
  styleUrls: ['./basic-layout.component.scss']
})
export class BasicLayoutComponent implements OnInit {
  route: string;
  initToken: any;
  
  constructor(private router: Router, private mainService: MainService) {
    /* this.initToken = localStorage.getItem(environment.initialToken);
    this.route = this.router.url.replace('/', '');
    this.route = this.route.split('/')[0]; */
  }

  async ngOnInit() {
    await this.mainService.verifyToken(false);
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
