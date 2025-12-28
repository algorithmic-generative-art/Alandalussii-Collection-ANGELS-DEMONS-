
export interface Artwork {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export enum Page {
  Home = 'home',
  Gallery = 'gallery',
  About = 'about',
  Contact = 'contact'
}
