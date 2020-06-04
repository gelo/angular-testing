import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';

@Component({
  selector: 'app-fake-classes',
  templateUrl: './fake-classes.component.html',
  styleUrls: ['./fake-classes.component.css']
})
export class FakeClassesComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }

}
