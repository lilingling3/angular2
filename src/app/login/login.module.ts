import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../share/share.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { BingImageService } from './bing-img.service';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    // BrowserAnimationsModule,
    // NoopAnimationsModule
  ],
  declarations: [ LoginComponent ],
  providers: [
    { provide: 'bing', useClass: BingImageService }
  ]
})
export class LoginModule { }
