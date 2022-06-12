export type Covid19ApiCases = {
  Cases: number;
  City: string;
  CityCode: string;
  Country: string;
  CountryCode: string;
  Date: string;
  Lat: string;
  Lon: string;
  Province: string;
  Status: string;
}[];

export type Covid19ApiCountries = {
  Country: string;
  ISO2: string;
  Slug: string;
}[];
