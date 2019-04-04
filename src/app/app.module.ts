import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import {NgxPaginationModule} from 'ngx-pagination';
import { Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TestObjectService } from './service/test-object.service';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { IdDiseaseValidationDirective } from './directive/id-object-validation.directive';


// DEFINE ROUTES
const appRoutes: Routes = [
  {path: ''       ,   component: HomeComponent },
  {path: 'home',          redirectTo: '' },
  {path: 'page-not-gound', component: NotFoundComponent },
  {path: '**',        redirectTo: 'page-not-gound' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    IdDiseaseValidationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    NgxPaginationModule,
    AppRoutingModule,
  ],
  providers: [
    CookieService,
    TestObjectService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
