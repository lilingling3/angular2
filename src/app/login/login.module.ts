import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../share/share.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { BingImageService } from './bing-img.service';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  declarations: [ LoginComponent, RegisterDialogComponent ],
  //
  entryComponents: [RegisterDialogComponent],
  providers: [
    { provide: 'bing', useClass: BingImageService }
  ]
})
export class LoginModule { }
