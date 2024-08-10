import { Component } from '@angular/core';
import { NewListingService } from '../services/new-listing-service';
import { Property } from '../models/property';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrls: ['./new-listing.component.css']
})
export class NewListingComponent {

  newListing: Property = {
    id: 0,
    address: '',
    rent: 0,
    utilities_included: false,
    average_monthly_utilities: 0,
    number_of_bathrooms: 0,
    number_of_roommates: 0,
    males: 0,
    females: 0,
    other_gender: 0,
    description: '',
    availability: '',
    pets: '',
    washer_dryer: false,
    driveway_parking: false,
    street_parking: false,
    pictures: []
  };

  constructor(private newListingService: NewListingService) {}

  onSubmit() {
    const formData = new FormData();
  
    if (this.newListing) {
      // Add properties to FormData
      formData.append('id', this.newListing.id?.toString() || '');
      formData.append('address', this.newListing.address || '');
      formData.append('rent', this.newListing.rent?.toString() || '');
      formData.append('utilities_included', this.newListing.utilities_included?.toString() || '');
      formData.append('average_monthly_utilities', this.newListing.average_monthly_utilities?.toString() || '');
      formData.append('number_of_bathrooms', this.newListing.number_of_bathrooms?.toString() || '');
      formData.append('number_of_roommates', this.newListing.number_of_roommates?.toString() || '');
      formData.append('males', this.newListing.males?.toString() || '');
      formData.append('females', this.newListing.females?.toString() || '');
      formData.append('other_gender', this.newListing.other_gender?.toString() || '');
      formData.append('description', this.newListing.description || '');
      formData.append('availability', this.newListing.availability || '');
      formData.append('pets', this.newListing.pets || '');
      formData.append('washer_dryer', this.newListing.washer_dryer?.toString() || '');
      formData.append('driveway_parking', this.newListing.driveway_parking?.toString() || '');
      formData.append('street_parking', this.newListing.street_parking?.toString() || '');
  
      if (this.newListing.pictures) {
        this.newListing.pictures.forEach((file: File) => formData.append('pictures', file));
      }
    }
  
    // Call the service to submit the form data
    this.newListingService.createOrUpdateProperty(formData).subscribe(response => {
      // Handle the response here
    });
  }
  
  
  
  onFileChange(event: any) {
    if (event.target.files.length) {
      const files = Array.from(event.target.files) as File[]; 
      if (this.newListing) {
        this.newListing.pictures = files;
      }
    }
  }
  
  
}
