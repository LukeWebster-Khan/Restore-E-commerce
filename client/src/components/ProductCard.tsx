import { product } from "@/lib/types";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { NavLink } from "react-router-dom";

type ProductCardProps = {
  product: product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="w-[280px] max-w-[100%] flex flex-col overflow-hidden">
      <img
        src={product.pictureUrl}
        alt={product.name}
        className="w-full mb-4"
      />
      <CardContent className="mt-auto">
        <CardTitle>{product.name}</CardTitle>
        <p className="font-semibold text-purple-700">
          £{(product.price / 100).toFixed(2)}
        </p>
        <div className="flex justify-between">
          <Button variant={"outline"}>Add to Card</Button>
          <Button asChild>
            <NavLink to={`/catalog/${product.id}`}>View</NavLink>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
