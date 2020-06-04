import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockingWithSpiesComponent } from './mocking-with-spies.component';
import { AuthService } from 'src/app/common/auth.service';

describe('MockingWithSpiesComponent', () => {

  let component: MockingWithSpiesComponent;
  let fixture: ComponentFixture<MockingWithSpiesComponent>;
  let authService: AuthService;
  let spy: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockingWithSpiesComponent],
      providers: [AuthService]
    });

    // create component and test fixture
    fixture = TestBed.createComponent(MockingWithSpiesComponent);

    // get test component from the fixture
    component = fixture.componentInstance;

    // UserService provided to the TestBed
    authService = TestBed.get(AuthService);

  });

  afterEach(() => {
    localStorage.removeItem('token');
    authService = null;
    component = null;
  });


  it('needsLogin returns true when the user has not been authenticated', () => {
    spy = spyOn(authService, 'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(authService.isAuthenticated).toHaveBeenCalled();

  });

  it('needsLogin returns false when the user has been authenticated', () => {
    spy = spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(authService.isAuthenticated).toHaveBeenCalled();
  });
});
