using System.Collections.Generic;
using Microsoft.AspNetCore.Http;

public class Property
{
    public int? Id { get; set; }
    public string Address { get; set; }
    public decimal? Rent { get; set; }
    public bool? UtilitiesIncluded { get; set; }
    public decimal? AverageMonthlyUtilities { get; set; }
    public int? NumberOfBathrooms { get; set; }
    public int? NumberOfRoommates { get; set; }
    public int? Males { get; set; }
    public int? Females { get; set; }
    public int? OtherGender { get; set; }
    public string Description { get; set; }
    public string Availability { get; set; }
    public string Pets { get; set; }
    public bool? WasherDryer { get; set; }
    public bool? DrivewayParking { get; set; }
    public bool? StreetParking { get; set; }
    public List<IFormFile> Pictures { get; set; }

    public Property()
    {
        Pictures = new List<IFormFile>();
    }
}
