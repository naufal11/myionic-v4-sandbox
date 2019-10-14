import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { LoginData } from '../interfaces/login-data';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  dataRespond: any;
  data: LoginData;

  constructor(
    private apiService: ApiService
  ) {
    this.apiService.getUrl('GetUserLogin?IdPassword=10030471_suntory')
      .subscribe(async (res) => {
        this.dataRespond = res;
        console.log('response', this.dataRespond);
        // this.data.szMessage = this.dataRespond.szMessage;
        // this.data.szName = this.dataRespond.szName;
        // this.data.szUserId = this.dataRespond.szUserId;
      }, (err) => {
        console.error(err);
      });
  }

  ngOnInit() { }
}
