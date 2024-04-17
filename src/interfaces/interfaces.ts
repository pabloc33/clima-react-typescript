export interface CountryI {
  code: string;
  name: string;
}

export interface SearchI {
  city: string;
  country: string;
}

export interface Weather {
  name: string;
  main: {
    temp: number;
    temp_max: number;
    temp_min: number;
  };
}
