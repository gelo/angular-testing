import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ChangeDetectionComponent } from './change-detection.component';
import { AuthService } from 'src/app/common/auth.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Change Detection', () => {

    let component: ChangeDetectionComponent;
    let fixture: ComponentFixture<ChangeDetectionComponent>;
    let authService: AuthService;
    let el: DebugElement;

    beforeEach(() => {

        // refine the test module by declaring the test component
        TestBed.configureTestingModule({
            declarations: [ChangeDetectionComponent],
            providers: [AuthService]
        });

        // create component and test fixture
        fixture = TestBed.createComponent(ChangeDetectionComponent);

        // get test component from the fixture
        component = fixture.componentInstance;

        // UserService provided to the TestBed
        authService = TestBed.get(AuthService);

        //  get the "a" element by CSS selector
        el = fixture.debugElement.query(By.css('a'));
    });

    it('login button hidden when the user is authenticated', () => {
        // To being with Angular has not done any change detection so the content is blank.
        expect(el.nativeElement.textContent.trim()).toBe('');

        // Trigger change detection and this lets the template update to the initial value which is Login since by
        // default we are not authenticated
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');

        // Change the authetication state to true
        spyOn(authService, 'isAuthenticated').and.returnValue(true);

        // The label is still Login! We need changeDetection to run and for angular to update the template.
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        // Which we can trigger via fixture.detectChange()
        fixture.detectChanges();

        // Now the label is Logout
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });
});
