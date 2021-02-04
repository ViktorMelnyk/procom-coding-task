import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from '../app.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {EditAddressComponent} from './components/edit-address/edit-address.component';
import {UserRoutingModule} from './user.routing.module';
import {MaterialModule} from '../material.module';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    EditUserComponent,
    EditAddressComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    UserRoutingModule
  ],

})
export class UserModule { }
