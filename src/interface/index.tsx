export interface IProductCard {
  id: string,
  img: string,
  product_name: string,
  categories: string,
  cost: number,
  rate: number,
  product_page?: boolean,
  description: string,
  count?: number
}

// Categories
export interface ICategories {
  id: string,
  name: string,
  images: ICategoriesImages[]
}

// CategoriesImages
export interface ICategoriesImages {
  id: string,
  product_name: string,
  img: string,
  rate: number,
  cost: number,
  description: string,
  tags: string[],
  sku: string
}

export interface ICategoryProducts {
  img: string,
  id: string
}

export interface IPostProduct {
  id: string,
  product_name: string,
  description?: string,
  rate?: number,
  cost?: number,
  img: string,
  count?: number,
  overallCharge?: number,
}

// comments
export interface ITextArea {
  text: string
}
