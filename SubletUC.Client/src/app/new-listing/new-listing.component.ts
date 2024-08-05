import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.component.html',
  styleUrl: './new-listing.component.css'
})
export class NewListingComponent {
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.propertyForm = this.fb.group({
      address: ['', Validators.required],
      rent: ['', Validators.required],
      utilities_included: [false],
      average_monthly_utilities: ['', Validators.required],
      number_of_bathrooms: ['', Validators.required],
      number_of_roomates: ['', Validators.required],
      males: [0],
      females: [0],
      other_gender: [0],
      description: [''],
      availability: ['', Validators.required],
      pets: [''],
      washer_dryer: [false],
      driveway_parking: [false],
      street_parking: [false],
      pictures: [null]
    });
  }

  onSubmit() {
    if (this.propertyForm.valid) {
      const formData = new FormData();
      const formValues = this.propertyForm.value;

      for (const key in formValues) {
        if (key === 'pictures' && formValues[key]) {
          // Add each file to formData
          formValues[key].forEach((file: File) => formData.append('pictures', file));
        } else {
          formData.append(key, formValues[key]);
        }
      }

      // Submit the form data
      // this.yourService.submitForm(formData).subscribe(response => { ... });
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length) {
      const files = Array.from(event.target.files);
      this.propertyForm.patchValue({ pictures: files });
    }
  }
}
