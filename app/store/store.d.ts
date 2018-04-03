export interface Weather {
  cod: string;
  message: number;
  cnt: number;
  city: City;
  list: WeatherPeriod[];
}


export interface WeatherPeriod {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
}


export interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Clouds {
  all: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Rain {
}

interface Sys {
  pod: string;
}

export interface City {
  id: number,
  name: string,
  country: string,
  coord: Cord
}

export interface CityRequest {
  name: string,
  temp: number,
  coord: Cord
}

export interface Coord {
  lon: number,
  lat: number
}