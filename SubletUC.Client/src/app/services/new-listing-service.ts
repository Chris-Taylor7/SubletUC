import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from '../models/property';

@Injectable({
  providedIn: 'root'
})
export class NewListingService {

  private apiUrl = '/listings';

  constructor(private http: HttpClient) { }

  // Method to create a new listing
  createOrUpdateProperty(new_listing: FormData): Observable<Property> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Property>(this.apiUrl, new_listing, { headers })
  }

  // Method to upload pictures for a listing
  uploadPictures(listingId: number, files: File[]): Observable<any> {
    const formData: FormData = new FormData();
    files.forEach(file => formData.append('pictures', file, file.name));

    const url = `${this.apiUrl}/${listingId}/upload-pictures`; // Adjust endpoint as needed
    return this.http.post<any>(url, formData)
  }
}
