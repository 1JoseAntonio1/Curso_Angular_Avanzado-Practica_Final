export interface Region{
  id: string;
  code: string;
  iso2code: string;
  name: string;
}

export interface Pais{
  id: string;
  iso2Code: string;
  name: string;
  region: {id: string, iso2code: string, value: string};
  adminregion: {id: string, iso2code: string, value: string};
  incomeLevel: {id: string, iso2code: string, value: string};
  lendingType: {id: string, iso2code: string, value: string};
  capitalCity: string;
  longitude: string;
  latitude: string;
}
