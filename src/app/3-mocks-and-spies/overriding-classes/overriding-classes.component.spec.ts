import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverridingClassesComponent } from './overriding-classes.component';
import { AuthService } from 'src/app/common/auth.service';

class MockAuthService extends AuthService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('OverridingClassesComponent', () => {

  let component: OverridingClassesComponent;
  let fixture: ComponentFixture<OverridingClassesComponent>;
  let authService: MockAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OverridingClassesComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService }]
    });

    fixture = TestBed.createComponent(OverridingClassesComponent);
    component = fixture.componentInstance;
    authService = TestBed.get(AuthService);

  });

  afterEach(() => {
    authService = null;
    component = null;
  });


  it('needsLogin returns true when the user has not been authenticated', () => {
    authService.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  });

  it('needsLogin returns false when the user has been authenticated', () => {
    authService.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  });
});
