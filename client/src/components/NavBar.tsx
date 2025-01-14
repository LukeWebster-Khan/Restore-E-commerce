import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

type NavBarProps = {
  addProduct: () => void;
};
export default function NavBar({ addProduct }: NavBarProps) {
  return (
    <div className="flex justify-between my-7 mx-1">
      <h1>Re-store</h1>
      <div className="flex space-x-3 align-top">
        <ModeToggle />
        <Button variant={"outline"} onClick={addProduct}>
          Add product
        </Button>
      </div>
    </div>
  );
}
