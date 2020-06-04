import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchForumComponent } from './search-forum/search-forum.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SearchFunctionalityComponent } from './search-functionality/search-functionality.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchForumComponent,
    AutocompleteComponent,
    AboutComponent,
    LoginComponent,
    SearchFunctionalityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatInputModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatAutocompleteModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
