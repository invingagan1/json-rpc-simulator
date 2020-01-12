import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddApiComponent } from './add-api/add-api.component';
import { AddApiModule } from './add-api/add-api.module';
import { HomeModule } from './home/home.module';
import { HomeComponent } from './home/home.component';
import { ManageApiModule } from './manage-api/manage-api.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add',
    component: AddApiComponent
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AddApiModule,
    HomeModule,
    ManageApiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
