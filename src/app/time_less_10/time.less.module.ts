import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { time.less.component } from './time_less_10/time.less.component';

const appRoutes: Routes =[
    { path: '/time', component: time.less.component},
    ];

@NgModule({
    imports:      [ BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(appRoutes) ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }