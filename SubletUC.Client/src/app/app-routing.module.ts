import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewListingComponent } from './new-listing/new-listing.component';
import { FindRoomComponent } from './find-room/find-room.component';
import { BookmarkedListingsComponent } from './bookmarked-listings/bookmarked-listings.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'new-listing', component: NewListingComponent },
  { path: 'find-room', component: FindRoomComponent },
  { path: 'bookmarked-listings', component: BookmarkedListingsComponent },
  { path: 'profile', component: AccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
