import { Component, OnInit } from '@angular/core';
import { AsyncAuthService } from 'src/app/common/async-auth.service';

@Component({
  selector: 'app-asynchronous-code',
  templateUrl: './asynchronous-code.component.html',
  styleUrls: ['./asynchronous-code.component.css']
})
export class AsynchronousCodeComponent implements OnInit {

  needsLogin = true;

  constructor(private auth: AsyncAuthService) {
  }

  ngOnInit() {
    this.auth.isAuthenticated().then((authenticated) => {
      this.needsLogin = !authenticated;
    });
  }

}
