import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ElectricityComponent } from './pages/electricity/electricity.component';
import { GasComponent } from './pages/gas/gas.component';
import { SunpowerComponent } from './pages/sunpower/sunpower.component';

@NgModule({
  declarations: [
    AppComponent,

    ElectricityComponent,
    GasComponent,
    SunpowerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
