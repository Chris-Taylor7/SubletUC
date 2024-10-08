export class Property {
    id?: number;
    address?: string;
    rent?: number;
    utilities_included?: boolean;
    average_monthly_utilities?: number;
    number_of_bathrooms?: number;
    number_of_roommates?: number;
    males?: number;
    females?: number;
    other_gender?: number;
    description?: string;
    availability?: string;
    pets?: string;
    washer_dryer?: boolean;
    driveway_parking?: boolean;
    street_parking?: boolean;
    pictures?: File[]; // Update this line to an array of Files

  constructor() {
    this.pictures = [];
  }
}