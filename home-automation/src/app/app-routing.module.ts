import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricityComponent } from './pages/electricity/electricity.component';
import { SunpowerComponent } from './pages/sunpower/sunpower.component';
import { GasComponent } from './pages/gas/gas.component';

// import { SettingsComponent } from './pages/settings/settings.component';

const routes: Routes = [
  { path: '', redirectTo: 'planning', pathMatch: 'full' }, // TODO: Redirect to default page of the user
  { path: 'electricity', component: ElectricityComponent },
  { path: 'gas', component: GasComponent },
  { path: 'sunpower', component: SunpowerComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    // { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
