import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SearchRepositoryComponent } from './search-repository/search-repository.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { AppRoutingModule } from './app-routing.module';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { RepositoriesCardsComponent } from './repository-card/repository-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchRepositoryComponent,
    LoginComponent,
    BookmarksComponent,
    RepositoriesCardsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
