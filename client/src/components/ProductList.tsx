import { product } from "@/lib/types";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: product[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </ul>
  );
}
