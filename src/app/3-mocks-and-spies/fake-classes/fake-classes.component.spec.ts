import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeClassesComponent } from './fake-classes.component';
import { AuthService } from 'src/app/common/auth.service';

class MockAuthService {
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}

describe('FakeClassesComponent', () => {

  let component: FakeClassesComponent;
  let fixture: ComponentFixture<FakeClassesComponent>;
  let authService: MockAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FakeClassesComponent],
      providers: [
        { provide: AuthService, useClass: MockAuthService }]
    });

    fixture = TestBed.createComponent(FakeClassesComponent);
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
