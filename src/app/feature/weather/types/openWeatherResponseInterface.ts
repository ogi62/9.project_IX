//we define only things that we need and use ...
export interface openWeatherResponseInterface {
    //array of objects...
    list: {
      dt_txt: string;
      main: {
        temp: number;
      }
    }[]
  }