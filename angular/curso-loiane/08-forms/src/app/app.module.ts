import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TemplateFormModule } from './template-form/template-form.module';

import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';

@NgModule({
  declarations: [AppComponent, DataFormComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TemplateFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
