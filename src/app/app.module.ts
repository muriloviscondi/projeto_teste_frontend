import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { CreatePersonComponent } from './persons/create-person/create-person.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './persons/update/update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    CreatePersonComponent,
    UpdateComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
