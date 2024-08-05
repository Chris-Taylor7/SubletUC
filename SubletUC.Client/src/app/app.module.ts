import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { MapViewComponent } from './map-view/map-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { FindRoomComponent } from './find-room/find-room.component';
import { BookmarkedListingsComponent } from './bookmarked-listings/bookmarked-listings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewListingComponent,
    CreateAccountComponent,
    MapViewComponent,
    NavbarComponent,
    LoginComponent,
    AccountComponent,
    FindRoomComponent,
    BookmarkedListingsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
