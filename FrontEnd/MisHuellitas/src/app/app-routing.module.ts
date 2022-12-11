import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import {TiendaComponent} from './tienda/tienda.component';
const routes: Routes = [
{
	path:'header',
	component: HeaderComponent
},
{
	path:'tienda',
	component: TiendaComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
