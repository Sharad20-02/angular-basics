import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { EInfoComponent } from './e-info/e-info.component';

const routes: Routes = [
  {path: 'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
  {path:'forms', component:FormDemoComponent},
  {path:'eInfo', component:EInfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
