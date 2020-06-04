import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';

@Component({
  selector: 'app-mocking-with-spies',
  templateUrl: './mocking-with-spies.component.html',
  styleUrls: ['./mocking-with-spies.component.css']
})
export class MockingWithSpiesComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }


}
