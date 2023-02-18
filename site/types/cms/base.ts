export interface CMSPage {
  _createdAt: string;
  _updatedAt: string;
  _type: string;
  _id: string;
  title: string;
  slug: {
    current: string;
  };
}

export interface Seo {
  description: string
  keywords?: string[]
  hideFromSearchEngine?: boolean
}
