import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'second-component', component: SecondComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  // scrollOffset: [0, 64],
};
@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
