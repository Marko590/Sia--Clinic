export interface Service {
  title: string;
  subTitle: string;
  link: string;
  pictureUrl: string;
}

export interface NavLink {
  title: string;
  path: string;
}

export interface PriceItem {
  service: string;
  price: number;
  category: string;
}
