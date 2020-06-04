import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleTestBedComponent } from './2-angular-test-bed/sample-test-bed.component';
import { FakeClassesComponent } from './3-mocks-and-spies/fake-classes/fake-classes.component';
import { RealClassesComponent } from './3-mocks-and-spies/real-classes/real-classes.component';
import { OverridingClassesComponent } from './3-mocks-and-spies/overriding-classes/overriding-classes.component';
import { MockingWithSpiesComponent } from './3-mocks-and-spies/mocking-with-spies/mocking-with-spies.component';
import { ChangeDetectionComponent } from './4-testing-change-detection/change-detection/change-detection.component';
import { AsynchronousCodeComponent } from './5-testing-asynchronous-code/asynchronous-code/asynchronous-code.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleTestBedComponent,
    FakeClassesComponent,
    RealClassesComponent,
    OverridingClassesComponent,
    MockingWithSpiesComponent,
    ChangeDetectionComponent,
    AsynchronousCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
