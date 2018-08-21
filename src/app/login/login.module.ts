import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AuthService } from './auth.service';
import { LoginComponent } from './login.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [AuthService]
})
export class LoginModule {
  constructor( @Optional() @SkipSelf() parentModule: LoginModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoginModule,
      providers: [AuthService]
    }
  }

}
