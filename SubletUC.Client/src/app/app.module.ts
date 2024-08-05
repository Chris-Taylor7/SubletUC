import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
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
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatCommonModule } from '@angular/material/core';
import { MatCheckbox } from '@angular/material/checkbox';
import { MatLabel } from '@angular/material/input';
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
    AppRoutingModule,
    MatCommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckbox,
    MatLabel,
    ReactiveFormsModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
