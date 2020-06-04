import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/common/auth.service';

@Component({
  selector: 'app-overriding-classes',
  templateUrl: './overriding-classes.component.html',
  styleUrls: ['./overriding-classes.component.css']
})
export class OverridingClassesComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  needsLogin() {
    return !this.auth.isAuthenticated();
  }


}
