import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {SeeFileComponent} from "./components/see-file/see-file.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'see-file/:fileName',
    component: SeeFileComponent
  },
  {
    path: '**',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
