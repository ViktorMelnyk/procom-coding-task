import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {EditUserComponent} from './components/edit-user/edit-user.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'create'
  },
  {
    path: 'create',
    component: EditUserComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
