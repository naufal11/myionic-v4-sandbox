import { Component, OnInit } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(
    private http: HTTP
  ) {}

  ngOnInit() {
    this.http.get('https://app1.suntorygaruda.id:900/api/AvoRest/GetUserLogin?IdPassword=10013770_suntory', {}, {})
        .then(data => {

          console.log('result', data.status);
          console.log(data.status);
          console.log(data.data); // data received by server
          console.log(data.headers);

        })
        .catch(error => {

          console.error('result', error);
          console.warn(error.status);
          console.warn(error.error); // error message as string
          console.warn(error.headers);

        });
  }
}
