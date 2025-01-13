export type product = {
    id: number
    name: string
    description: string
    price: number
    pictureUrl: string
    type: string
    brand: string
    quantityInStock: number
  }

export type simpleProduct = Omit<product, "id" | "description" | "pictureUrl" | "type" | "brand" | "quantityInStock">