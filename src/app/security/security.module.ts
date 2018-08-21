import { NgModule } from '@angular/core';
import { UserGuard } from './guards/user.guard';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [
    UserGuard
  ]
})
export class SecurityModule { }
